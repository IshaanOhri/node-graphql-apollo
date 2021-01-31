#!/bin/bash

clear
echo "================="
echo "Pushing to GitHub"
echo "================="
git add .
echo "Enter commit message"
read commit
git commit -m "$commit"
git checkout -b 7-Events_MyEvents_Query
git push origin 7-Events_MyEvents_Query