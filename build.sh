#!/bin/bash
npm run build

git switch production
cp -r dist/* .
git rm -rf .
git add .
git commit -m "Deploy"
git push -f origin production

git switch main