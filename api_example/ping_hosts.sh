#!/bin/sh

echo "================================"
echo "Pinging whoami1"
curl -X GET -H 'Host: whoami.localhost' localhost -L
echo "================================"

echo "================================"
echo "Pinging api in /api"
curl -X GET -H 'Host: localhost' localhost/api -L
echo "================================"

echo "================================"
echo "Pinging api in root"
curl -X GET -H 'Host: localhost' localhost -L
echo "================================"
