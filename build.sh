#!/bin/bash
npm run build

git switch production
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy"
git push -f origin production

git switch main