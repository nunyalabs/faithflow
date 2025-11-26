@echo off
REM FaithFlow Quick Start Script for Windows
REM This script helps you quickly launch FaithFlow

echo.
echo ========================================
echo    FaithFlow - Church Management PWA
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "index.html" (
    echo ERROR: Please run this script from the faithflow directory
    pause
    exit /b 1
)

echo [OK] FaithFlow directory found
echo.

REM Try to start Python server
echo Starting server...
echo.
echo Server will run on http://localhost:8000
echo.
echo Open your browser to:
echo   - http://localhost:8000 (main app)
echo.
echo Press Ctrl+C to stop the server
echo.

REM Try Python 3 first, then Python 2
python --version >nul 2>&1
if %errorlevel% equ 0 (
    python -m http.server 8000
) else (
    py -3 -m http.server 8000
)

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Python not found on your system
    echo.
    echo Alternative methods:
    echo 1. Install Python from https://python.org
    echo 2. Just double-click index.html to open in browser
    echo.
    pause
    exit /b 1
)
