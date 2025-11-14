@echo off
echo 正在配置Git认证...
echo.
echo 请确保您的GitHub Personal Access Token具有以下权限:
echo - repo (完整仓库权限)
echo - workflow (如果需要GitHub Actions)
echo.
echo 配置Git用户信息...
git config user.name "zkhyww"
git config user.email "2506802@qq.com"
echo.
echo Git用户信息已配置:
git config user.name
git config user.email
echo.
echo 现在请手动运行推送命令:
echo git push -u origin main
echo.
echo 当提示输入密码时，请输入您的Personal Access Token
echo 按任意键退出...
pause