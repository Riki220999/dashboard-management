#!/bin/bash

docker stop web-pruforce \
; docker rm web-pruforce \
; docker rmi docker-ptpla-pruforce.registry.pruconnect.net/pruforce/web-pruforce:UAT \
; rm -rf build \
; npm run build \
; ./postbuild.sh \
; docker build -t docker-ptpla-pruforce.registry.pruconnect.net/pruforce/web-pruforce/web-pruforce:UAT . \
; docker run -d --name web-pruforce -e HOST=https://pruforce-uat.prudential.co.id -p 3000:3000 docker-ptpla-pruforce.registry.pruconnect.net/pruforce/web-pruforce/web-pruforce:UAT