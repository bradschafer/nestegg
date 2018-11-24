#!/bin/bash
# npm start

npm rebuild node-sass

concurrently "npm:start" --kill-others
# concurrently "npm:start" "npm:test" --kill-others