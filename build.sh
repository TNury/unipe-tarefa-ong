pm run build

git switch prod
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy"
git push -f origin prod

git switch main