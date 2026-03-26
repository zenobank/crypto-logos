#!/bin/bash
# Fill missing icon variants (light/dark) by copying the existing one.
# For each logo that has icon-light but not icon-dark (or vice versa),
# copies the existing file to fill the gap.
#
# Usage: ./scripts/fill-missing-icons.sh [--dry-run]

LIBRARY_DIR="$(cd "$(dirname "$0")/../public/library" && pwd)"
DRY_RUN=false

if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "=== DRY RUN (no files will be created) ==="
  echo
fi

count=0

# Find all icon-light files and check for missing dark counterparts
for light in "$LIBRARY_DIR"/*-icon-light.*; do
  [ -f "$light" ] || continue
  dark="${light/-icon-light./-icon-dark.}"
  if [ ! -f "$dark" ]; then
    count=$((count + 1))
    echo "MISSING DARK: $(basename "$dark") — copying from $(basename "$light")"
    if [ "$DRY_RUN" = false ]; then
      cp "$light" "$dark"
    fi
  fi
done

# Find all icon-dark files and check for missing light counterparts
for dark in "$LIBRARY_DIR"/*-icon-dark.*; do
  [ -f "$dark" ] || continue
  light="${dark/-icon-dark./-icon-light.}"
  if [ ! -f "$light" ]; then
    count=$((count + 1))
    echo "MISSING LIGHT: $(basename "$light") — copying from $(basename "$dark")"
    if [ "$DRY_RUN" = false ]; then
      cp "$dark" "$light"
    fi
  fi
done

echo
echo "Total: $count missing icon(s) filled."
