#!/usr/bin/env/sh

# Abort if an error occurs
set -e

# Navigate into the build output directory
cd build

# Initialize a new Git repository
git init

# Add all files in the output directory to the repo
git add -A

# Commit the changes with a message
git commit -m "Deploy to gh-pages 🚀"

# Push the commit to the remote repo
git push -f git@github.com:NoteNecron/NoteNecron.git master:gh-pages

# Confirm the deployment has been successful
echo "Deplyed to gh-pages 🚀"

# Show the message for 3 seconds before closing
sleep 3
