#!/bin/bash
fuser -k 8000/tcp > /dev/null 2>&1
echo "--- OCTO SYSTEM STARTING ---"
python3 -m http.server 8000 --bind 0.0.0.0 &
sleep 2
echo "CLICK THE LINK BELOW:"
echo "https://8000-dot-octo-project-2026.cloudshell.dev"
