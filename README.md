# GraphQL Server with local Prisma

## How to use

### 1. Install Docker

To use Prisma locally, you need to have Docker installed on your machine. If you don't have Docker yet, you can download the Docker Community Edition for your operating system [here](https://www.docker.com/get-started).

### 2. Prisma CLI

The Prisma CLI is used for various Prisma workflows. You can install it using `npm` / `yarn` or you can use prisma commands defined in `package.json` file.

```javascript
npm install -g prisma
```

OR

```javasript
yarn global add prisma
```

### 3. Define .env variables

Create `variables.env` file in the root of the project and define values for these keys.

```yml
PRISMA_SECRET= __string__

SERVER_PORT= __number__
FRONTEND_URL= __string__

SESSION_NAME= __string__
SESSION_SECRET= __string__
SESSION_AGE= __number__
```

### 4. Run Docker containers

Run terminal command to start prisma & database docker containers in the root of the project.

```
docker-compose up -d
```

Check the running containers by `docker ps` command.
Prisma playground should now run on `localhost:9001/`

### 5. Download dependencies

Download npm dependencies via `npm` or `yarn`

```javascript
npm i
```

OR

```javascript
yarn install
```

### 6. Generate types and deploy prisma

Run `package.json` command

```
yarn prisma:all
```

This is going to deploy prisma but also generate prisma client (schema & types) from `datamodel.prisma` and also generate graphql resolvers and its types which you can use in your code (for more info please check [graphqlgen](https://github.com/prisma/graphqlgen) page)

You can also seed your database with Admin user defined in `prisma/seed.graphql` by

```
yarn prisma:seed
```

## Issues

### Prisma token

Because we have prisma secret defined in `prima.yml` file, you will probably have problem run queries or mutations in prisma playground `localhost:9001`

You can test it by running query

```graphql
{
  users {
    email
    role
    id
  }
}
```

You will get the error like

```json
{
  "errors": [
    {
      "message": "Your token is invalid. It might have expired or you might be using a token from a different project.",
      "code": 3015,
      "requestId": "local:api:cjp9vg7mo001q0960g667vv7o"
    }
  ]
}
```

To fix this issue you have to generate a token by running `yarn prisma:token` in the terminal. It will return token

```
eyJhbGciOiNiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaE1NDQ0NTI0OTd9.GJuV99rUnxEd8KI
```

Copy and past this token into `HTTP HEADERS` section in your prisma playground.

```
{
  "Authorization": "Bearer __YOUR_TOKEN_HERE__"
}
```

Now the prisma should return data from the database.
