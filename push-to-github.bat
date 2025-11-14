@echo off
echo 正在推送到GitHub仓库...
echo 用户名: zkhyww
echo 仓库: https://github.com/zkhyww/divinebyte-web.git
echo.
echo 请确保您已经创建了Personal Access Token
echo Personal Access Token创建地址: https://github.com/settings/tokens
echo.
echo 当您准备好后，按任意键开始推送...
pause

git push -u origin main

echo.
echo 推送完成！
pause