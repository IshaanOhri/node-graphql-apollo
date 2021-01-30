#!/bin/bash

clear
echo "================="
echo "Pushing to GitHub"
echo "================="
git add .
echo "Enter commit message"
read commit
git commit -m "$commit"
git checkout -b 4-Events
git push origin 4-Events