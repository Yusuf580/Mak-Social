@echo off
REM PostgreSQL Backend Startup Script

color 0a
title Mak Social Backend - PostgreSQL Edition

echo.
echo ========================================
echo  MAK SOCIAL BACKEND - PostgreSQL
echo ========================================
echo.

REM Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found! Please install from https://nodejs.org/
    pause
    exit /b 1
)

REM Navigate to backend folder
cd /d "%~dp0"

echo Checking dependencies...
if not exist node_modules (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo ========================================
echo  ⚙️ SETTING UP DATABASE...
echo ========================================
echo.

REM Run migrations
echo Running database migrations...
call node migrate.js
if %errorlevel% neq 0 (
    echo ERROR: Database migration failed
    echo Make sure your PostgreSQL database is running and credentials are correct
    echo Check .env file for database connection details
    pause
    exit /b 1
)

echo.
echo Running database seed...
call node seed.js
if %errorlevel% neq 0 (
    echo ERROR: Database seed failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo  ✅ STARTING SERVER...
echo ========================================
echo.
echo 🌐 Backend URL: http://localhost:5000
echo 📁 API Endpoint: http://localhost:5000/api
echo 📸 Uploads: %cd%\uploads
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start

pause

