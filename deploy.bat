@echo off
echo.
echo ===================================
echo   EGC - Build and Package for Deploy
echo ===================================
echo.

cd /d d:\ekorr

echo [1/2] Building static export...
call npx next build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo BUILD FAILED! Check errors above.
    pause
    exit /b 1
)

echo.
echo [2/2] Creating deployment ZIP...
powershell -Command "Compress-Archive -Path 'd:\ekorr\out\*' -DestinationPath 'd:\ekorr\hostinger-upload.zip' -Force"

echo.
echo ===================================
echo   DONE! 
echo   ZIP ready: d:\ekorr\hostinger-upload.zip
echo ===================================
echo.
echo Next steps:
echo   1. Upload hostinger-upload.zip to public_html
echo   2. Delete old _next/ folder first
echo   3. Extract ZIP with folder name "."
echo   4. Clear Hostinger cache
echo.
pause
