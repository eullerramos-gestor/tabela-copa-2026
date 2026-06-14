#!/usr/bin/env python3
"""Atualiza data.json com os placares mais recentes da API e publica no GitHub.

Le a chave da API do arquivo .env, busca os jogos da Copa do Mundo 2026,
atualiza o campo "matches" e "updated" do data.json (preservando scores e
bolao), e faz commit + push se houver alteracoes.
"""

import json
import os
import subprocess
import urllib.request
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ENV_FILE = os.path.join(BASE_DIR, ".env")
DATA_FILE = os.path.join(BASE_DIR, "data.json")
API_URL = "https://api.football-data.org/v4/competitions/WC/matches"


def load_api_key():
    with open(ENV_FILE) as f:
        for line in f:
            if line.startswith("FOOTBALL_DATA_API_KEY="):
                return line.strip().split("=", 1)[1]
    raise RuntimeError("FOOTBALL_DATA_API_KEY nao encontrada em .env")


def fetch_matches(token):
    req = urllib.request.Request(API_URL, headers={"X-Auth-Token": token})
    with urllib.request.urlopen(req, timeout=30) as resp:
        body = json.loads(resp.read())
    return body.get("matches", [])


def run(cmd):
    return subprocess.run(cmd, cwd=BASE_DIR, capture_output=True, text=True)


def main():
    token = load_api_key()
    matches = fetch_matches(token)

    with open(DATA_FILE) as f:
        data = json.load(f)

    data["matches"] = matches
    data["updated"] = datetime.now(timezone.utc).isoformat()

    with open(DATA_FILE, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    run(["git", "add", "data.json"])
    diff = run(["git", "diff", "--cached", "--quiet"])
    if diff.returncode == 0:
        print("Sem alteracoes nos placares.")
        return

    run(["git", "commit", "-m", "Atualizar placares automaticamente"])
    push = run(["git", "push", "origin", "main"])
    if push.returncode != 0:
        print("Erro no push:", push.stderr)
    else:
        print("Placares atualizados e publicados com sucesso.")


if __name__ == "__main__":
    main()
