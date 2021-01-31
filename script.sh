#!/bin/bash

clear
echo "================="
echo "Pushing to GitHub"
echo "================="
git add .
echo "Enter commit message"
read commit
git commit -m "$commit"
git checkout -b 6-Event_and_User_Resolver_Chain
git push origin 6-Event_and_User_Resolver_Chain