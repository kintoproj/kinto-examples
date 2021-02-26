# TODO Example

This is a fullstack TODO app running with

- [Hasura GraphQL engine](https://github.com/kintohub/todo-hasura)
- [PostgreSQL](https://github.com/kintohub/catalog-postgresql)
- React Frontend

## Deployment

### Prerequisite

- Running Hasura Endpoints e.g. `https://yourhostname.com/v1/graphql`
- TODO schema ([check this](https://github.com/kintohub/todo-hasura)])

### On Kintohub v1

- Type: `Webapp`
- Repo: `https://github.com/kintohub/todo-react`
- Port: `5000`
- Language: `Dockerfile`
- Environment Variables: `REACT_APP_SERVER_URL=https://yourhostname.com/v1/graphql`