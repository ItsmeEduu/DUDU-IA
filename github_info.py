import os
import time

import requests

GITHUB_USER = "ItsmeEduu"   # seu usuário do GitHub
CACHE_SECONDS = 600         # reaproveita a resposta por 10 minutos
RETRY_SECONDS = 60          # se o GitHub falhar, espera 1 minuto para tentar de novo
MAX_REPOS = 3               # quantos repositórios mostrar
COMMITS_PER_REPO = 3        # quantos commits por repositório

# Memória do servidor: guarda o último resumo e quando buscar de novo
_cache = {"text": None, "next_fetch": 0}


def _headers():
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "dudu-ai",
    }
    # Opcional: com um token no .env, o limite do GitHub sobe bastante
    token = os.getenv("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def _get(url, params=None):
    response = requests.get(url, headers=_headers(), params=params, timeout=10)
    response.raise_for_status()
    return response.json()


def _format_date(iso_date):
    """Transforma '2026-10-05T01:19:39Z' em '05/10/2026'."""
    if not iso_date or len(iso_date) < 10:
        return "data desconhecida"
    year, month, day = iso_date[:10].split("-")
    return f"{day}/{month}/{year}"


def _fetch_summary():
    repos = _get(
        f"https://api.github.com/users/{GITHUB_USER}/repos",
        {"sort": "pushed", "direction": "desc", "per_page": 10},
    )

    # Ignora forks (cópias de projetos de outras pessoas)
    repos = [repo for repo in repos if not repo.get("fork")][:MAX_REPOS]

    lines = []
    for repo in repos:
        name = repo["name"]
        description = repo.get("description") or "sem descrição"
        language = repo.get("language") or "linguagem não informada"
        pushed = _format_date(repo.get("pushed_at"))

        lines.append(
            f"- Repositório {name} ({language}): {description}. "
            f"Último envio de código em {pushed}."
        )

        try:
            commits = _get(
                f"https://api.github.com/repos/{GITHUB_USER}/{name}/commits",
                {"per_page": COMMITS_PER_REPO},
            )
        except requests.RequestException:
            # Repositório vazio ou erro pontual: segue para o próximo
            continue

        for item in commits:
            message = item["commit"]["message"].splitlines()[0][:100]
            date = _format_date(item["commit"]["author"]["date"])
            lines.append(f"    * {date}: {message}")

    return "\n".join(lines)


def get_github_summary():
    """Devolve o resumo do GitHub (texto) ou None se não conseguir."""
    now = time.time()

    if now < _cache["next_fetch"]:
        return _cache["text"]

    try:
        text = _fetch_summary()
    except (requests.RequestException, KeyError, ValueError) as error:
        print("Erro ao buscar o GitHub:", error)
        _cache["next_fetch"] = now + RETRY_SECONDS
        return _cache["text"]  # devolve o último resumo bom, se existir

    _cache["text"] = text or None
    _cache["next_fetch"] = now + CACHE_SECONDS
    return _cache["text"]