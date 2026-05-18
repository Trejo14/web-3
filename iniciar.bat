@echo off
title TechCorp - Servidor de Desarrollo
echo ========================================
echo   TechCorp - Soluciones Digitales
echo ========================================
echo.

:: Verificar que Node.js este instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no esta instalado.
    echo Descargalo en: https://nodejs.org/
    pause
    exit /b 1
)

:: Instalar dependencias si no existen
if not exist "node_modules" (
    echo Instalando dependencias...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Fallo la instalacion de dependencias.
        pause
        exit /b 1
    )
    echo.
    echo Dependencias instaladas correctamente.
    echo.
)

:: Arrancar el servidor de desarrollo
echo Iniciando servidor de desarrollo...
echo El navegador se abrira automaticamente.
echo Para detener el servidor presiona Ctrl+C
echo.
call npm run dev -- --open
pause
