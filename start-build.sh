#!/bin/bash
npm config set cache /tmp/.npm-cache
yarn install
yarn run build
