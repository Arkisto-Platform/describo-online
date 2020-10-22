#!/usr/bin/env bash

if [ "$#" != 1 ] ; then
    echo "Please provide a version number for these containers: e.g. 0.1.0"
    exit -1
fi
VERSION="${1}"

echo "Building API container"
docker build --rm -t describo-online-api:latest -f Dockerfile.api-build .
docker tag describo-online-api:latest describo-online-api:${VERSION}
docker rmi $(docker images | grep none | awk '{print $3}')
exit 

echo "Building UI code"
docker run --rm -v $PWD/ui:/srv/ui -v $PWD/../describo-ui-plugins:/srv/plugins -w /srv/ui node:14-buster npm run build

echo "Building UI container"
docker build --rm -t describo-online-ui:latest -f Dockerfile.ui-build .
docker tag describo-online-ui:latest describo-online-ui:${VERSION}

docker rmi $(docker images | grep none | awk '{print $3}')

echo "Pushing built containers to docker hub"
docker push utseresearch/describo-online-api:latest
docker push utseresearch/describo-online-api:${VERSION}
docker push utseresearch/describo-online-ui:latest
docker push utseresearch/describo-online-ui:${VERSION}