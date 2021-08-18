#!/bin/sh

# client
cd client && ./build.sh
cd -
rm -rf static
cp -r client/public static
