@echo off
echo.
echo ====================================
echo  CyberInsight Security Platform
echo ====================================
echo.
echo Checking dependencies...
echo.

cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing npm dependencies...
  call npm install
  echo Dependencies installed successfully!
  echo.
)

echo Starting development server...
echo.
echo The app will be available at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
