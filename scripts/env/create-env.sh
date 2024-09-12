#!/bin/bash

SOURCE_FILE=".env.example"
TARGET_FILE=".env"

cd "$(dirname "$0")/../.." || exit

if [ -f "$TARGET_FILE" ]; then
    echo ".env file already exists, no need to copy."
else
    if [ -f "$SOURCE_FILE" ]; then
        cp "$SOURCE_FILE" "$TARGET_FILE"
        echo ".env file created successfully."
    else
        echo ".env.example does not exist. Cannot create .env file."
    fi
fi
