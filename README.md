# Todo App API using trpc

This is a simple Todo app API built with Node.js and trpc. It provides CRUD (Create, Read, Update, Delete) operations for managing a list of Todos.

## Prerequisites

Before you can run this app, please make sure you have the following installed on your system:

- Node.js (v18 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install the dependencies.

## Configuration

The app uses environment variables for configuration. You need to set up the following environment variables:

- `PORT`: The port number on which the server will listen. (Default is 3000)
- `AUTH0_ISSUER_BASE_URL`: The base URL of the Auth0 issuer for verifying JWT tokens. This is required for authentication.

You can set the environment variables in a `.env` file in the root of your project or using another method of your choice.

## Running the App

You can start the app by running the following command in the terminal:

`npm run dev`

## Tasks

1. Implement routes: `getTodo`, `addTodo`, and `deleteTodo` in the file `./src/routes/todo.ts`. You can use the methods: `getTodoById`, `addTodo`, and `deleteTodo` to communicate with the "database".
2. Complete the function `validateScopes` in the file `./src/middleware/auth.ts`.
3. JWT validation: `getTodo`, `completeTodo`, `addTodo`, and `deleteTodo` must have a valid JWT token.
   - `getTodo` must also have the scope `read:todos`.
   - `completeTodo` must also have the scope `edit:todos`.
   - `deleteTodo` must also have the scopes `edit:todos delete:todos`.


## jwt for testing:

1. expired jwt:
   ```
   eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZCRzdfdFIxYTRQWGtCMl9WUDNxayJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUtYXBpLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJxeFhEbmIwekR3WFI3OXNWVTQzZ3hLdXpCQUxHVGxIUEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9leGFtcGxlLWFwaS5kZXZkZXYubm8vIiwiaWF0IjoxNjgyNDMyNjM0LCJleHAiOjE2ODI1MTkwMzQsImF6cCI6InF4WERuYjB6RHdYUjc5c1ZVNDNneEt1ekJBTEdUbEhQIiwic2NvcGUiOiJyZWFkOnRvZG9zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.B5qHtdViArTNUAMhEubrTqljY4txXpJRHn-dOEjmgnd0O_3tzovluC8lx6QoLmsj2dpBUUua4SBCyhJ6ax7GQXNP-ymF1ZiY1JieegTXxmy4BW4SKpFSYYWSvrzwFz9TjlSU8uh4bcmkBc8Y1jDY--4YZln-FJD0b0elzfwCHAdEoX9Mx2Uqbm2HZK5JBrSGbfJTxJnBzjYPf5u-bMYiM34_JoE3ZUaFfWASlNpAGDRJpPl6evl207yOPnqCs04LoHKZtWBsvT8Qzuf-jlexDHHy-Em-IcoBnlsODmhBMoEbuEjo9x5yC5mk8TW5vPE9O64avrwMdWOUFyPerRTb1A
   ```
2. jwt without scope:
    ```
    exempel her
    ```
3. jwt with scope: `read:todos`
    ```
    exempel her
    ```
4. jwt with scope: `edit:todos`
    ```
    exempel her
    ```
5. jwt with scope: `read:todos edit:todos delete:todos`
    ```
    exempel her
    ```
