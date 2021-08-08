#!/bin/bash

if [ $VERCEL ]; then
  echo "PWD: $PWD"
  echo "VERCEL_ENV: $VERCEL_ENV"
  echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"
  echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
fi

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "[skip ci]" ]]; then
  echo "🤖 - Bot build cancelled"
  exit 0
else
  APP=$1
fi

if [[ $APP ]]; then
  echo "✨ - Running in specified branches at $APP"
else
  echo "🛣 - Running in PR at $APP"

  if [ $VERCEL ]; then
    NX_VERSION=$(node -e "console.log(require('./configurations/nrwl/package.json').dependencies['@nrwl/workspace'])")
    TS_VERSION=$(node -e "console.log(require('./configurations/typescript/package.json').dependencies['typescript'])")
    npm install -D @nrwl/workspace@$NX_VERSION typescript@$TS_VERSION --prefer-offline
  fi

  CHANGED=$(npx nx affected:apps --plain --base HEAD~1 --head HEAD)
  echo $CHANGED | grep $APP -q

  if [ $? -eq 1 ]; then
    echo "🛑 - Build cancelled at $APP - $CHANGED"
    exit 0
  elif [[ "$VERCEL_ENV" == "production" ]]; then
      echo "✅ - Build can proceed in production at $APP - $CHANGED"
  elif [[ "$VERCEL_ENV" == "preview" && ( "$APP" == "design" || "$APP" == "sentrei" ) ]]; then
      echo "💚 - Build can proceed in preview at $APP - $CHANGED"
  else
    echo "🌼 - Build not proceeding at $APP - $CHANGED"
    exit 1
  fi
fi
