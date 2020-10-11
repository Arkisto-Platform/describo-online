# describo-online

This is the source code for the describo-online application.

## Developing the application

The application is developed inside docker containers. To get started:

```
> docker-compose up
```

-   The API service will be started in addition to a test watcher. Both will live reload on change.
-   The Postgres service will be commissioned with a database called `describo` and user / password: `admin / admin`
-   The API service will be available on `localhost:8080`
