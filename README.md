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
   eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZCRzdfdFIxYTRQWGtCMl9WUDNxayJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUtYXBpLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJxeFhEbmIwekR3WFI3OXNWVTQzZ3hLdXpCQUxHVGxIUEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9leGFtcGxlLWFwaS5kZXZkZXYubm8vIiwiaWF0IjoxNjgzMTg2MTMwLCJleHAiOjE2ODMyNzI1MzAsImF6cCI6InF4WERuYjB6RHdYUjc5c1ZVNDNneEt1ekJBTEdUbEhQIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.mEoQI99sCbeV6cKxYM4CTU99mGND45aMRB6EoNhd3Swes7JFogY-vheGYsCDOhMt-qNEucn3IBYeMbuAJHzRIhM0TkYOCyP7psnesdIS-DX_sR-4KyKqIsxOHkWq5mm42XMuXXCNSq9-VRLxZ8UrPvTa1A2clgV3UVjqsrVQKo8DsGrkGPyJx7nu_C3-b2F9FrCT6hFnXXbBdtQqxoE7elktJq6VHTqPBPL8DrgkRrT2_zxpprboBi77qKsTVL5NlXTHeXqhvrbhnb9Lp5ErcodXE4W5yWWp1yqfjOaJOmVNVYzpLRietWcZuw9Ip7xZhxj8-PE2frVJI5--vjXKdw
   ```
3. jwt with scope: `read:todos`
   ```
   eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZCRzdfdFIxYTRQWGtCMl9WUDNxayJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUtYXBpLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJxeFhEbmIwekR3WFI3OXNWVTQzZ3hLdXpCQUxHVGxIUEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9leGFtcGxlLWFwaS5kZXZkZXYubm8vIiwiaWF0IjoxNjgzMTg2MDg0LCJleHAiOjE2ODMyNzI0ODQsImF6cCI6InF4WERuYjB6RHdYUjc5c1ZVNDNneEt1ekJBTEdUbEhQIiwic2NvcGUiOiJyZWFkOnRvZG9zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.ZA3VRqpqU7MZeN37r9JV1SKEIpT0emhyrHDmqgcDvp8LJEcbDclK0qstrxxR1V-kUfBHoffLiyGa2cq3BlcZxyvD16eoEFDbkLDrHx-wSj96AGmGbY1V2-dudiTyI6QRGZEZKNa7uYJXg8OpLS45riDAY7ujhHXH403gTubgcTBwrMOISh-vzmHvcp6zpsMuUbvgQPOtT-MHsr-mCb0X9gjP6jdyf67AWc5QlYTnm-sn7iM8EqUq8Lvpj_r2tbME4lykP348oHqxngoHjePUP9KosB7-ZFaBT-l_IYBzJ9aM3u8vvAndKZBsi5eLE7ser0NCo-OtB6qiK5YHfUSbwg
   ```
4. jwt with scope: `edit:todos`
   ```
   eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZCRzdfdFIxYTRQWGtCMl9WUDNxayJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUtYXBpLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJxeFhEbmIwekR3WFI3OXNWVTQzZ3hLdXpCQUxHVGxIUEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9leGFtcGxlLWFwaS5kZXZkZXYubm8vIiwiaWF0IjoxNjgzMTg2MzQ4LCJleHAiOjE2ODMyNzI3NDgsImF6cCI6InF4WERuYjB6RHdYUjc5c1ZVNDNneEt1ekJBTEdUbEhQIiwic2NvcGUiOiJlZGl0OnRvZG9zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.JutQm9dTi6doKpQO7eYzNy9idMTPWsafcMD_Vcv-v-RtukpuI4iD0XAFgYwD0cjKMkOs2PLDN42OLc-0MvdSpu2uKsauGQeWUHlbBGtlLqgpzjRtuE2QIJ9Im3amQcDQX5Ui8D6EKJLw8lxBMWM68I4ROJ9GbA5zBbt8kDP53W4qCaAdGQImCSsPFTaJ_wrjvAbndzOvDInithp9xAORz4WXp0IyPQ9G7XTuU8REUviQumZsyvy_cbijHeAZE0CBJfPRY0J-pQpUHfVsDlzqGWaEF8xuOgnTw1ygqReLicHBmqXP8OReDWgFKscTf1H-NDtSdxaHFBRPvqv8Ak67qw
   ```
5. jwt with scope: `read:todos edit:todos delete:todos`
   ```
   eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZCRzdfdFIxYTRQWGtCMl9WUDNxayJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUtYXBpLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJxeFhEbmIwekR3WFI3OXNWVTQzZ3hLdXpCQUxHVGxIUEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9leGFtcGxlLWFwaS5kZXZkZXYubm8vIiwiaWF0IjoxNjgzMTg2Mzk1LCJleHAiOjE2ODMyNzI3OTUsImF6cCI6InF4WERuYjB6RHdYUjc5c1ZVNDNneEt1ekJBTEdUbEhQIiwic2NvcGUiOiJyZWFkOnRvZG9zIGVkaXQ6dG9kb3MgZGVsZXRlOnRvZG9zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.Bf5_0niCly6oftXi7pBsCDrkfCO1VV1gV6__lGKerH9Mmvu4SM395LwBxnm_sxVZ5gFf6zlmKyCepjMLBQ3osm4PL2da-9kQYaqFJqicqcuCncaWIjl--LQnBuNND9RLVsX5fj52nbHYyLOjxhwfin1N4FGVFGfQc0cCqHDr-DGWVdtgajQaeJmnhLF8yjgTVaovVSuAUW7I5iWkmR6VoeyT5pCC97K9B2GB45bzgvXS377Pi6Q5BfZguzFGQcAp7RzGoHWopSQ0kSemwm-_g3wwVSW7K0KCeG3TYF3GqB1o68xNh3bIXpVvX2HH2k99U3LfgE5Y9CB-M4pDBR898g
   ```
