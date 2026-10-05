from github_info import get_github_summary

resumo = get_github_summary()

if resumo:
    print(resumo)
else:
    print("Não consegui buscar nada (veja a mensagem de erro acima).")