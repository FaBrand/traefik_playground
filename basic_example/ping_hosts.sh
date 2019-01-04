#!/bin/sh

echo "================================"
echo "Pinging whoami1"
curl -X GET -H 'Host: whoami.server.test' localhost -L | grep -e '^IP' -A15 -B15
echo "================================"

echo "================================"
echo "Pinging whoami2"
curl -X GET -H 'Host: iamme.server.test' localhost -L | grep -e '^IP' -A15 -B15
echo "================================"
