$ErrorActionPreference = 'Stop'
$universityPath = $PSScriptRoot
$outputsPath = Split-Path -Parent $universityPath
$toolPath = Join-Path $outputsPath 'wilkerson-tool-suite'
$toolLauncher = Join-Path $toolPath 'START-WILKERSON-TOOLS.ps1'
$nodeExecutable = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $nodeExecutable) { $nodeExecutable = 'C:\Users\wilke\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' }
if (-not (Test-Path -LiteralPath $nodeExecutable)) { Write-Host 'Node.js was not found.' -ForegroundColor Yellow; Read-Host 'Press Enter to close'; exit 1 }

if (-not (Get-NetTCPConnection -LocalPort 8788 -State Listen -ErrorAction SilentlyContinue) -and (Test-Path -LiteralPath $toolLauncher)) {
    & $toolLauncher
}
if (-not (Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue)) {
    Start-Process -FilePath $nodeExecutable -ArgumentList 'server.js' -WorkingDirectory $universityPath -WindowStyle Hidden
}
Start-Sleep -Milliseconds 1100
Start-Process 'http://127.0.0.1:3000/'
Write-Host 'Wilkerson Collective University is running at http://127.0.0.1:3000/' -ForegroundColor Green
Write-Host 'Wilkerson Local AI Studio is running at http://127.0.0.1:8788/' -ForegroundColor Green
