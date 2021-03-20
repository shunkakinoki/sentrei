#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"
echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_MESSAGE" =~ "[skip ci]" ]]; then
  exit 0
elif [[ "$VERCEL_ENV" == "production" || "$VERCEL_GIT_COMMIT_REF" == "alpha" || "$VERCEL_GIT_COMMIT_REF" == "beta" || "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  exit 1
else
  if [[ "$PWD" =~ "apps/dashboard" ]]; then
    if git diff --quiet HEAD~ -- .; then
      exit 0
    else
      exit 1
    fi
  fi
  if [[ "$PWD" =~ "apps/demo" ]]; then
    if git diff --quiet HEAD~ -- .; then
      exit 0
    else
      exit 1
    fi
  fi
  if [[ "$PWD" =~ "apps/landing" ]]; then
    if git diff --quiet HEAD~ -- .; then
      exit 0
    else
      exit 1
    fi
  fi
  if [[ "$PWD" =~ "." ]]; then
    if git diff --quiet HEAD~ -- components; then
      exit 0
    else
      exit 1
    fi
  fi
fi
