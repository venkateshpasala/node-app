#!/bin/sh


ssh root@139.59.21.158 <<EOF
 cd ~/node-app
 git pull
 npm install — production
 pm2 restart all
 exit
EOF