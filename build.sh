npm install
rm -rf dist
npm run build-all
cp -r assets dist/assets
git branch -D production 2>/dev/null || true
git switch --orphan production
cp -r dist/* .
rm -rf dist
rm -rf node_modules
git add .
git commit -m "Deploy"
git push -f origin production