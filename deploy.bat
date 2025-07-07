@echo off
echo Starting BuildFlow deployment...
echo.

echo Building the application...
npm run build
if %errorlevel% neq 0 (
    echo Build failed! Exiting...
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo.
echo Files ready for deployment in the 'dist' folder:
dir dist /b

echo.
echo Deployment files are ready!
echo.
echo Next steps:
echo 1. The dist folder contains all built files
echo 2. Upload these files to your hosting platform
echo 3. Or use 'vercel --prod' for Vercel deployment
echo 4. Or use 'netlify deploy --prod --dir=dist' for Netlify
echo.
echo NOTE: Make sure to redeploy to fix the MIME type issues
echo The updated vercel.json configuration should resolve loading problems
echo.
pause
