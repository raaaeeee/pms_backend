@echo off
REM Optional: If you want to start PM2 processes:
REM pm2 resurrect

REM Wait a few seconds to ensure the processes are up before opening the browser
timeout /t 10 /nobreak

REM Automatically open backend and frontend in default browser
start "" "http://localhost:1337"
start "" "http://localhost:8080"
