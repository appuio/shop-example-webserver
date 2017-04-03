#!/bin/sh

set -e

# replace the API_URL placeholder with the environment variable
echo "Replacing API_URL with $API_URL"
sed -i 's;__API_URL__;'$API_URL';g' /app/html/static/js/*

>&2 echo "Running webserver..."
exec "$@"
