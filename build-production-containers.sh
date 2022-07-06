#!/usr/bin/env bash

if [ "$#" != 1 ] ; then
    echo "Please provide a version number for these containers: e.g. 0.1.0"
    exit -1
fi
VERSION="${1}"

read -p '>> Build the containers? [y|N] ' resp
if [ "$resp" == "y" ] ; then
    echo '>> Building the API container '
    docker buildx build --platform=linux/amd64,linux/arm64 \
        --rm \
        -t arkisto/describo-online-api:latest \
        -t arkisto/describo-online-api:${VERSION} \
        -f Dockerfile.api-build .
    docker buildx build --load \
        -t arkisto/describo-online-api:latest \
        -t arkisto/describo-online-api:${VERSION} \
        -f Dockerfile.api-build .

    echo

    echo '>> Building the UI container'
    cd ui
    docker run -it --rm \
        -v $PWD:/srv/ui \
        -v $PWD/../../describo-ui-plugins:/srv/ui/src/plugins \
        -v ui_node_modules:/srv/ui/node_modules \
        -w /srv/ui node:14-buster bash -l -c "npm run build"
    cd -
    docker buildx build --platform=linux/amd64,linux/arm64 \
        --rm \
        -t arkisto/describo-online-ui:latest \
        -t arkisto/describo-online-ui:${VERSION} \
        -f Dockerfile.ui-build .
    docker buildx build --load \
        -t arkisto/describo-online-ui:latest \
        -t arkisto/describo-online-ui:${VERSION} \
        -f Dockerfile.ui-build .
    echo
fi

read -p '>> Tag the repo (select N if you are still testing the builds)? [y|N] ' resp
if [ "$resp" == "y" ] ; then
    cd api
    npm version --no-git-tag-version ${VERSION}
    cd ../ui
    npm version --no-git-tag-version ${VERSION}
    cd ..
    git tag v${VERSION}
    git commit -a -m "tag and bump version"
fi

read -p '>> Push the containers to docker hub? [y|N] ' resp
if [ "$resp" == "y" ] ; then
    docker login

    echo "Pushing built containers to docker hub"
    docker buildx build --platform=linux/amd64,linux/arm64 \
        --push \
        --rm \
        -t arkisto/describo-online-api:latest \
        -t arkisto/describo-online-api:${VERSION} \
        -f Dockerfile.api-build .
    docker buildx build --platform=linux/amd64,linux/arm64 \
        --push \
        --rm \
        -t arkisto/describo-online-ui:latest \
        -t arkisto/describo-online-ui:${VERSION} \
        -f Dockerfile.ui-build .
    # docker push arkisto/describo-online-api:latest
    # docker push arkisto/describo-online-api:${VERSION}
    # docker push arkisto/describo-online-ui:latest
    # docker push arkisto/describo-online-ui:${VERSION}
fi

read -p '>> Remove local container copies? [y|N] ' resp
if [ "$resp" == "y" ] ; then
    docker rmi arkisto/describo-online-api:latest
    docker rmi arkisto/describo-online-api:${VERSION}
    docker rmi arkisto/describo-online-ui:latest
    docker rmi arkisto/describo-online-ui:${VERSION}
fi