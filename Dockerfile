FROM hasura/graphql-engine:v1.2.2.cli-migrations

ENV HASURA_GRAPHQL_MIGRATIONS_DIR=/migrations \
    HASURA_GRAPHQL_ENABLE_CONSOLE=true \
    HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous    

COPY migrations /migrations