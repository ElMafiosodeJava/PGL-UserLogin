## Description

This repository is a [Nest](https://github.com/nestjs/nest) framework TypeScript project. You can read the documentation [here](https://docs.nestjs.com/first-steps).

## Installation
Install all node modules after cloning the repository:
```bash
$ npm install
```

To set the app port, environment and the local database configuration, it is necessary a ```.env``` file in the root directory of the project with the following parameters:
```bash
PORT=5000
NODE_ENV=development
JWT_SECRET=aSecretExample123
DATABASE_URL="file:./database/sqlite.db"
```

Generate all database typescript models and create necessary files:
```bash
$ npx prisma generate
$ npx prisma db push
```

Note that this file is written in the ```.gitignore``` file because it contains sensitive data. This is the reason why you need to create it manually.

## Running or testing the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Components creation

```bash
# Install Nest CLI globally
$ npm i -g @nestjs/cli

# Generate a new controller
$ nest g controller [name]

# Generate a new provider
$ nest g service [name]

# Generate a new module
$ nest g module [name]
```

## Mandatory code rules
- Use normal functions to define any function inside a controller, service or repository. Arrow functions must be used inside pipe functions such as map, foreach, etc.
- Nest uses classes to validate js objects, so avoid declaring interface for models.
- Models are divided between entities or dtos. Entities are for database related objects, while dtos are those objects used to transfer data between frontend and backend. Frontend app users shouldn't know the database's structure.