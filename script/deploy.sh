#!/bin/sh


ssh pasala@139.59.21.158 <<EOF
 cd ~/node-app
 git pull
 npm install — production
 npm start
 pm2 restart all
 exit
EOF