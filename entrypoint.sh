#!/bin/sh

set -e

# replace the API_URL placeholder with the environment variable
sed -i 's;__API_URL__;'$API_URL';g' /usr/share/nginx/html

>&2 echo "Running webserver..."
exec "$@"
