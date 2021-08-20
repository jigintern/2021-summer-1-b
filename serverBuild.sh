#!/bin/sh

#server
rm ./places.db
deno run -A seeder.js
