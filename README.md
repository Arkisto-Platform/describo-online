# describo-online

This is the source code for the describo-online application.

- [describo-online](#describo-online)
  - [Developing the application](#developing-the-application)
  - [Before you start up the development environment](#before-you-start-up-the-development-environment)

## Developing the application

The application is developed inside docker containers. To get started:

```
> docker-compose up
```

-   The API service will be started in addition to a test watcher. Both will live reload on change.
-   The Postgres service will be commissioned with a database called `describo` and user / password: `admin / admin`
-   The API service will be available on `localhost:8080`
-   The UI service will be available on `localhost:9000`

## Before you start up the development environment

There are some things you need to do before you can start developing on this application:

1.  Check out `https://github.com/UTS-eResearch/describo-ui-plugins` alongside this folder on your development machine. You should have a structure like:

```
~/src/../describo-online
~/src/../describo-ui-plugins
```

**It is crucial that these two repo's are sibling folders.**

2. Register your application with Microsoft

    Follow the documentation at [https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive](https://github.com/UTS-eResearch/describo-ui-plugins/tree/master/onedrive). Specifically, the section `Setting up Azure`

3. Create the file `configuration/development-configuration.json`

Copy `configuration/example-configuration.json` to `configuration/development-configuration.json` and fill in the various properties.
