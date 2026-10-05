import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
modelo = os.getenv("GEMINI_MODEL", "gemini-flash-latest")

resposta = client.models.generate_content(
    model=modelo,
    contents="Diga olá em uma Frase",
)

print ("Modelo usado:", modelo)
print ("Resposta:", resposta.text)
