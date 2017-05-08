#!/bin/bash
DIR=$(pwd)
TEMP=/tmp/webserver

# copy the sources to a temporary location
# as yarn install will fail if started within a shared drive (vbox)
rm -rf $TEMP
cp -R $DIR $TEMP

# install the NPM packages in the temporary location
# and run the build
cd $TEMP
yarn install
yarn run build

# copy the bundled files back to the repository location
cd $DIR
rm -rf $DIR/build
cp -R $TEMP/build $DIR/build
