#!/bin/bash
# Downloads the video-shotcraft skill (pinned to one exact commit) into ~/.claude/skills.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

REPO=https://github.com/Vincentwei1021/video-shotcraft
PIN=42f922fe076f6428814d10f6184caf22a8b2adc2
DEST="$HOME/.claude/skills/video-shotcraft"
STAMP="$DEST/.pinned-commit"

# Skip if this exact version is already installed
if [ -f "$STAMP" ] && [ "$(cat "$STAMP")" = "$PIN" ]; then
  exit 0
fi

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
git -C "$tmp" init -q
git -C "$tmp" remote add origin "$REPO"
git -C "$tmp" fetch -q --depth 1 origin "$PIN"
git -C "$tmp" checkout -q FETCH_HEAD
# Verify we got exactly the pinned commit
[ "$(git -C "$tmp" rev-parse HEAD)" = "$PIN" ]
rm -rf "$tmp/.git"

rm -rf "$DEST"
mkdir -p "$(dirname "$DEST")"
mv "$tmp" "$DEST"
trap - EXIT
echo "$PIN" > "$STAMP"
