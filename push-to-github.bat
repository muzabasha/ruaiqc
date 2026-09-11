@echo off
echo ========================================
echo PUSHING FIXED CODE TO GITHUB
echo ========================================
echo.
echo This will push 3 commits with all fixes to GitHub
echo Repository: https://github.com/muzabasha/ruaiqc
echo.
echo Press Ctrl+C to cancel, or
pause

echo.
echo Attempting to push using GitHub CLI...
gh auth login
git push origin main

echo.
echo ========================================
echo If successful, Vercel will auto-deploy
echo Wait 2-3 minutes then check:
echo https://ruaiqc.vercel.app
echo ========================================
pause
