@echo off
setlocal
echo =======================================================
echo          FintechX Clone - 1-Click GitHub Uploader
echo =======================================================
echo.
echo Step 1: Open https://github.com/new in your browser.
echo Step 2: Name your repository (e.g., fintechx-clone) and click "Create repository".
echo Step 3: Copy the repository URL (e.g., https://github.com/YOUR_USERNAME/fintechx-clone.git).
echo.
set /p REPO_URL="Paste your GitHub repository URL here: "

if "%REPO_URL%"=="" (
    echo Error: No URL provided. Exiting.
    pause
    exit /b 1
)

echo.
echo Connecting to %REPO_URL%...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Pushing code to GitHub...
echo (If a browser window or login prompt pops up, simply sign in with your other GitHub account)
echo.
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================
    echo   SUCCESS! Your website clone is now on GitHub!
    echo =======================================================
) else (
    echo.
    echo =======================================================
    echo   Push failed. Check your repo URL or permissions.
    echo =======================================================
)

echo.
pause
