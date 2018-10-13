#!/bin/bash
# npm start

#give mongo some time to start - in production it will exit and docker will restart, but with nodemon it will wait for a file change. So just delay
# sleep 1m

# npm rebuild node-sass

concurrently "npm:start" --kill-others
# concurrently "npm run start:dev" --kill-others
# concurrently "npm:start" "npm:test" --kill-others