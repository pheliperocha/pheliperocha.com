#!/usr/bin/env bash

# die on error
set -e

# https://gist.github.com/cjus/1047794
echo 'Retrieving latest deploy...'
url=$(curl -H "Authorization: Bearer $NETLIFY_ACCESS_TOKEN" https://api.netlify.com/api/v1/sites/$NETLIFY_SITE_ID/deploys)
# temp=`echo $url`
temp=$(echo $url | sed 's/\\\\\//\//g' | sed 's/[{}]//g' | awk -v k="text" '{n=split($0,a,","); for (i=1; i<=n; i++) print a[i]}' | sed 's/\"\:\"/\|/g' | sed 's/[\,]/ /g' | sed 's/\"//g' | grep -w -m 1 'deploy_ssl_url')

echo ${temp##*|}

npm run lh -- ${temp##*|}