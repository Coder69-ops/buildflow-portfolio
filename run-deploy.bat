@echo off
echo Loading environment variables from .env file...
for /f "tokens=1,2 delims==" %%a in (.env) do (
    if not "%%a"=="" (
        if not "%%a"=="# Firebase Configuration for BuildFlow" (
            if not "%%a"=="# Real Firebase web config from Firebase Console" (
                if not "%%a"=="# Optional: Analytics (not needed for authentication)" (
                    if not "%%a"=="# Service account keys are for server-side applications only" (
                        set "%%a=%%b"
                    )
                )
            )
        )
    )
)
echo Running Firebase deployment script...
node deploy-firebase.js
pause
