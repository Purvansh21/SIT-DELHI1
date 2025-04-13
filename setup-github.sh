#!/bin/bash

# This script helps set up the GitHub repository for SITDELHI

# Check if a GitHub username is provided
if [ -z "$1" ]; then
  echo "Please provide your GitHub username as an argument."
  echo "Usage: ./setup-github.sh yourusername"
  exit 1
fi

GITHUB_USERNAME=$1

# Add the remote repository URL
git remote add origin https://github.com/$GITHUB_USERNAME/SITDELHI.git

# Push the changes to the new repository
git push -u origin main

echo "GitHub repository setup complete!"
echo "Your repository is now available at: https://github.com/$GITHUB_USERNAME/SITDELHI" 