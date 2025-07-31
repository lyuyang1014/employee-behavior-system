#!/bin/bash
echo "🚀 推送更新到GitHub..."
git add .
git status
read -p "📝 请输入更新说明: " message
git commit -m "$message"
git push origin main
echo "✅ 推送完成！网站将在1-2分钟后更新"
echo "🌐 网站地址: https://lyuyang1014.github.io/employee-behavior-system"
