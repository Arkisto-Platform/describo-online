# describo-online

This is the source code for the describo-online application.

- [describo-online](#describo-online)
  - [Before you start up the development environment](#before-you-start-up-the-development-environment)
    - [Get Describo UI plugins](#get-describo-ui-plugins)
    - [Register your application with Microsoft](#register-your-application-with-microsoft)
    - [Create an Okta organisation and setup your application](#create-an-okta-organisation-and-setup-your-application)
    - [Create a configuration file](#create-a-configuration-file)
  - [Developing the application](#developing-the-application)
    - [Running the tests in watch mode](#running-the-tests-in-watch-mode)
  - [Setting up for production](#setting-up-for-production)
  - [Integrating Describo Online into another service](#integrating-describo-online-into-another-service)
  - [Building production containers](#building-production-containers)

## Before you start up the development environment

There are some things you need to do before you can start developing this application:

1. Get Describo UI plugins
2. Register your application with Microsoft
3. Create an Okta organisation and setup your application
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

-   The API service will be started.
-   The UI dev environment will be started
-   The Postgres service will be commissioned with a database called `describo` and user / password: `admin / admin`
-   The UI service is available at [http://localhost:9000](http://localhost:9000)
-   The API service will be available on [http://localhost:9000/api](http://localhost:9000/api)
-   The environment is setup the same way production is run - namely, you connect to an nginx container that reverse proxies back to the ui / api servers.

### Running the tests in watch mode

If you want to run the tests in watch mode you need to start the service manually as follows:

-   in another terminal
    -   find the id of the docker API container: `docker ps`
    -   exec into the container: `docker exec -it {container id} bash`
    -   run jest: `npm run test:watch`

Jest tests run in parallel so it comes with the ability to filter which tests run. However, in order
to do this the command can't be started automatically by docker as you won't be able to attach to
jest. By starting it manually - and it has to be inside the container - you can control which tests
run which is very handy when you're developing new tests or checking existing ones.

## Setting up for production

Setting up for production is similar to setting up for development except that you don't need the source code.

1. Set up an Azure application so the app can auth to onedrive. Follow the documentation at [https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive](https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive). Specifically, the section `Setting up Azure`
2. Set up an okta organisation as defined in the section above: **Create an Okta organisation and setup your application**
3. Copy the `production` folder to your server
    1. The file `docker-compose.yml` is a docker compose file you can use (alternately, if you have a swarm use the file `production-stack.yml` to start a stack)
    2. Update nginx.conf: if you've set up SSL on your server be sure to update the nginx config as required.
4. Copy `configuration/example-configuration.json` to `production-configuration.json` on the server and configure with Azure and okta details. Put it in the same folder as the compose/stack file.
5. Start the service: `docker-compose up -d`

## Integrating Describo Online into another service

Describo Online can function in a mode where authentication is effectively delegated to another service. In
this mode, okta auth is bypassed for a given session. This works as follows:

-   Set up an entry for your service in the configuration file under `api/applications`. This must be an array of objects each with a key `name` set to the full qualified domain name of the service and a key `secret` set to some long, random string.
-   In order to bypass okta, your service must first POST to `https://{describo-online}/api/session/application` a JSON object `containing a name and an email`.
-   The POST must set the header `Authorization: Bearer: {your secret as defined in the configuration}`
-   The POST must set the header `"Content-Type": "application/json"`

-   **See the test `it should be able to create a session and login - bypassing okta auth` @ [api/src/routes/index.spec.js](https://github.com/UTS-eResearch/describo-online/blob/master/api/src/routes/index.spec.js#L48) for an example.**

-   If successful, a `session identifier` will be returned from describo online. Call describo-online inside an iframe as `https://{describo-online}/application?sid={sessionId}`. From that point on the session id will be used to identifier the currently logged in user bypassing all okta authentication.

-   The application secret is not stored in the DB so it can be changed at anytime by changing in the configuration file and restarting describo online.

## Building production containers

To build the production containers for a release:

```
> ./build-production-containers.sh
```
