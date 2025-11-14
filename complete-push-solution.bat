@echo off
echo ========================================
echo DivineByte 项目推送到GitHub解决方案
echo ========================================
echo.
echo 当前项目状态:
echo - ✅ 项目文件已准备就绪
echo - ✅ Git仓库已初始化
echo - ✅ 初始提交已创建
echo - ✅ 远程仓库已配置
echo.
echo 目标仓库: https://github.com/zkhyww/divinebyte-web.git
echo.
echo ========================================
echo.

:: 清除Git凭据缓存
echo 步骤1: 清除Git凭据缓存...
runas /user:%USERNAME% "cmd /c git config --global --unset credential.helper 2>nul"
git config --global --unset credential.helper 2>nul

:: 重新配置Git用户信息
echo.
echo 步骤2: 配置Git用户信息...
git config user.name "zkhyww"
git config user.email "2506802@qq.com"

:: 显示当前配置
echo.
echo 步骤3: 当前Git配置:
echo 用户名: 
git config user.name
echo 邮箱: 
git config user.email

:: 尝试推送
echo.
echo 步骤4: 尝试推送到GitHub...
echo 当提示输入密码时，请输入您的Personal Access Token
echo.
pause

git push -u origin main

:: 检查结果
echo.
echo 步骤5: 检查推送结果...
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ 推送成功！
    echo 您的代码已上传到: https://github.com/zkhyww/divinebyte-web
) else (
    echo.
    echo ❌ 推送失败
    echo 请尝试以下方法:
    echo 1. 检查Personal Access Token权限
    echo 2. 使用GitHub Desktop: https://desktop.github.com/
    echo 3. 手动在GitHub网站上创建仓库并上传文件
)

echo.
echo 按任意键退出...
pause