#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_FILE="$ROOT_DIR/docs/index.html"

cd "$ROOT_DIR"
npm run build

if [[ ! -s "$OUTPUT_FILE" ]]; then
  echo "error: build produced an empty docs/index.html" >&2
  exit 1
fi

if ! grep -qi '<!doctype html\|<html' "$OUTPUT_FILE"; then
  echo "error: docs/index.html does not look like valid HTML output" >&2
  exit 1
fi

echo "Build succeeded: docs/index.html is present and non-empty."