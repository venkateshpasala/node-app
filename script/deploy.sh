#!/bin/sh


ssh root@139.59.21.158 <<EOF
 cd ~/node-app
 git pull
 npm install — production
 pm2 start npm
 pm2 restart all
 exit
EOF