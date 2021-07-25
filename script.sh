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

  NX_VERSION=$(node -e "console.log(require('./configurations/nrwl/package.json').dependencies['@nrwl/workspace'])")
  TS_VERSION=$(node -e "console.log(require('./configurations/typescript/package.json').dependencies['typescript'])")
  npm install -D @nrwl/workspace@$NX_VERSION typescript@$TS_VERSION --prefer-offline
  CHANGED=$(npx nx affected:apps --plain --base HEAD~1 --head HEAD)
  echo $CHANGED | grep $APP -q

  if [ $? -eq 1 ]; then
    echo "🛑 - Build cancelled at $APP - $CHANGED"
    exit 0
  else
    echo "✅ - Build can proceed at $APP - $CHANGED"
    exit 1
  fi
fi
