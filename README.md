# API Koa example

A simple example Koa microservice

## Getting Started

### Prerequisites
You can run the project with [Docker](https://docs.docker.com/install/) or [Node](https://nodejs.org/en/download/package-manager/).

1. Clone this repo
2. Create the `.env` file, use the file `.env-example` as example.

### Build / Run

1. **Docker**

    Build an image from project:

    ```shell
    docker build -t api-koa-example .
    ```

    Run the docker image:

    ```shell
    docker run -it -p 3000:3000 api-koa-example
    ```

2. **Node**

    Install dependencies:

    ```
    npm install
    ```

    Run the project:

    ```
    npm start
    ```

## Running the tests

To run the tests execute: 
```shell
npm run test
```