<!--
title: 'AWS HTTP Endpoint example in NodeJS'
description: 'This template shows an HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

## Prerequisites

```
- Node
- Docker
```

### Environment Variables

```dotenv
# serverless config
SERVERLESS_OFFLINE_PORT=

# db config
MYSQL_DATABASE=
MYSQL_ROOT_PASSWORD=
MYSQL_HOST=
MYSQL_PORT=
```

### Offline Mode

```
# Install dependencies
yarn install 

# Create the build of project
yarn build

# Create local database with docker
yarn db:up

# Run migrations
yarn migration:run

# Deploy local serverless offline
yarn offline
```

### Deployment

```
# Set serverless vars
stage: <some-stage>
profile: <some-profile>
region: <some-region>

# Deploy
$ yarn deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": "..."
}
```

## Documentation

Endpoints are available in `insomnia.json` file in root.

```
> Health endpoint
> Swapi endpoints
  - Get people
  - Get person
  - Get person schema
> Book endpoints
  - Get books
  - Get book
  - Post book
```
