@echo off
REM This script helps set up the GitHub repository for SITDELHI

REM Check if a GitHub username is provided
if "%~1"=="" (
  echo Please provide your GitHub username as an argument.
  echo Usage: setup-github.bat yourusername
  exit /b 1
)

set GITHUB_USERNAME=%~1

REM Add the remote repository URL
git remote add origin https://github.com/%GITHUB_USERNAME%/SITDELHI.git

REM Push the changes to the new repository
git push -u origin main

echo GitHub repository setup complete!
echo Your repository is now available at: https://github.com/%GITHUB_USERNAME%/SITDELHI 