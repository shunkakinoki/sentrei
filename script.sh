#!/bin/bash

echo "PWD: $PWD"
echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "[skip ci]" ]]; then
  echo "🤖 - Bot build cancelled"
  exit 0
else
  APP=$1
fi

if [[ "$VERCEL_ENV" == "production" || "$VERCEL_GIT_COMMIT_REF" == "alpha" || "$VERCEL_GIT_COMMIT_REF" == "beta" || "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  echo "✨ - Running in specified branches at $APP"
  exit 1
else
  echo "🌼 - Running in PR at $APP"
  npx nx affected:apps --plain --base HEAD~1 --head HEAD | grep $APP -q
fi
IS_AFFECTED=$?

if [ $IS_AFFECTED -eq 1 ]; then
  echo "🛑 - Build cancelled at $APP"
  exit 0
elif [ $IS_AFFECTED -eq 0 ]; then
  echo "✅ - Build can proceed at $APP"
  exit 1
fi
