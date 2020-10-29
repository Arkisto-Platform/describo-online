# describo-online

This is the source code for the describo-online application.

- [describo-online](#describo-online)
  - [Before you start up the development environment](#before-you-start-up-the-development-environment)
    - [Get Describo UI plugins](#get-describo-ui-plugins)
    - [Register your application with Microsoft](#register-your-application-with-microsoft)
    - [Create an Okta organisation and setup your application](#create-an-okta-organisation-and-setup-your-application)
    - [Create a configuration file](#create-a-configuration-file)
  - [Developing the application](#developing-the-application)
  - [Setting up for production](#setting-up-for-production)
  - [Building production containers](#building-production-containers)

## Before you start up the development environment

There are some things you need to do before you can start developing this application:

1. Get Describo UI plugins
2. Register your application with Microsoft
3. Create and Okta organisation and setup your application
4. Create a configuration file

### Get Describo UI plugins

Check out `https://github.com/UTS-eResearch/describo-ui-plugins` alongside this folder on your development machine. You should have a structure like:

```
.../describo-online
.../describo-ui-plugins

    ** It is crucial that these two repo's are sibling folders.
```

### Register your application with Microsoft

    Follow the documentation at [https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive](https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive). Specifically, the section `Setting up Azure`

### Create an Okta organisation and setup your application

    - Create an account at [developer.okta.com] and log in
    - Create a new `application` (Applications tab at the top, `Add Application`)
    - Choose Single-Page App
    - Name it - whatever you want
    - Base URIs: `http://localhost:9000`
    - Login redirect URIs: `http://localhost:9000/okta-login`
    - Logout redirect URIs: `http://localhost:9000`
    - Grant type allowed: `Authorization Code` and not Implicit

### Create a configuration file

Copy `configuration/example-configuration.json` to `configuration/development-configuration.json` and fill in the various properties.

-   siteName: whatever you want
-   logo: a URL to a logo to be used on your site
-   services.okta - fromurthe Okta page for the application you just created
    -   domain: `Okta domain`
    -   clientId: `Client ID`
    -   redirectUri: `Login redirect URIs`

## Developing the application

The application is developed inside docker containers. To get started:

```
> docker-compose up
```

-   The API service will be started in addition to a test watcher. The API will livereload when API code changes and tests will be re-run when any test file changes. Jest is used for testing.
-   The Postgres service will be commissioned with a database called `describo` and user / password: `admin / admin`
-   The API service will be available on `localhost:8080`
-   The UI service will be available on `localhost:9000`

## Setting up for production

Setting up for production is similar to setting up for development except that you don't need the source code.

1. Set up an Azure application so the app can auth to onedrive. Follow the documentation at [https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive](https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive). Specifically, the section `Setting up Azure`
2. Set up an okta organisation as defined in the section above: **Create an Okta organisation and setup your application**
3. Copy the `production` folder to your server
    1. The file `docker-compose.yml` is a docker compose file you can use (alternately, if you have a swarm use the file `production-stack.yml` to start a stack)
    2. Update nginx.conf: if you've set up SSL on your server be sure to update the nginx config as required.
4. Copy `configuration/example-configuration.json` to `production-configuration.json` on the server and configure with Azure and okta details. Put it in the same folder as the compose/stack file.
5. Start the service: `docker-compose up -d`

## Building production containers

To build the production containers for a release:

```
> ./build-production-containers.sh
```
