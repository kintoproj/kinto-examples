# TODO Example

This is a fullstack TODO app running with

- [Hasura GraphQL engine](https://github.com/kintoproj/kinto-examples/tree/main/todo-hasura)
- [PostgreSQL](https://github.com/kintoproj/kinto-examples/tree/main/catalog-postgresql)
- React Frontend

## Deployment

### Prerequisite

- Running Hasura Endpoints e.g. `https://yourhostname.com/v1/graphql`
- TODO schema ([check this](https://github.com/kintoproj/kinto-examples/tree/main/todo-hasura)])

### On Kintohub v1

- Type: `Webapp`
- Repo: `https://github.com/kintoproj/kinto-examples/tree/main/todo-react`
- Port: `5000`
- Language: `Dockerfile`
- Environment Variables: `REACT_APP_SERVER_URL=https://yourhostname.com/v1/graphql`