#!/bin/bash

# if [ "$1" = "" ]
# then
#   echo "🛑 - Missing required projectName as first argument"
#   exit 1
# fi

# if [ "$2" = "" ]
# then
#   echo "🛑 - Missing required outputPath as second argument"
#   exit 1
# fi

rm -rf node_modules

SCRIPT_LOCATION=$0
DOT_DOT_SLASH=../

s=${SCRIPT_LOCATION//"$DOT_DOT_SLASH"}
NUMBER_OF_DOT_DOT_SLASHES="$(((${#SCRIPT_LOCATION} - ${#s}) / ${#DOT_DOT_SLASH}))"

for i in $(seq 1 $NUMBER_OF_DOT_DOT_SLASHES)
do
  cd ../
done

yarn install
yarn run build:$APP
# NODE_ENV=production npx nx build $1 --prod --outputPath=$2
