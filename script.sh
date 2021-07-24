#!/bin/bash

echo "PWD: $PWD"
echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "[skip ci]" ]]; then
  exit 0
else
  if [[ "$PWD" =~ "apps/app" ]]; then
    APP=app
  fi
  if [[ "$PWD" =~ "apps/demo" ]]; then
    APP=demo
  fi
  if [[ "$PWD" =~ "apps/home" ]]; then
    APP=home
  fi
  # if git diff --quiet HEAD~ -- components; then
  #   exit 0
  # else
  #   exit 1
  # fi
fi

if [[ "$VERCEL_ENV" == "production" || "$VERCEL_GIT_COMMIT_REF" == "alpha" || "$VERCEL_GIT_COMMIT_REF" == "beta" || "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
echo "🌼 - Running in specified branches"
npx nx affected:apps --plain --base HEAD~1 --head HEAD | grep $APP -q
else
echo "🌼 - Running in PR"
npx nx affected:apps --plain --base origin/main --head HEAD | grep $APP -q
fi
IS_AFFECTED=$?

if [ $IS_AFFECTED -eq 1 ]; then
  echo "🛑 - Build cancelled at $APP"
  exit 0
elif [ $IS_AFFECTED -eq 0 ]; then
  date
  echo "✅ - Build can proceed at $APP"
  exit 1
fi
