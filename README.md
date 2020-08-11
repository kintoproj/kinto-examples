# todo-hasura

A hasura graphql gateway with initial database files for an example Graphql React todo list.

## Other projects

* [Frontend Todo List App](github.com/kintohub/todo-react)
* Requires a Postgres Database which can be []deployed on KintoHub](https://docs.kintohub.com/catalogs/postgresql).

## Run Hasura Locally

1) Run `docker-compose up -d`
2) Go to localhost:8080 - It may take up to 60 seconds to become available.


## Required Environment Variables

```
HASURA_GRAPHQL_DATABASE_URL=postgresql://postgres:[password]@postgresql/postgres
```
