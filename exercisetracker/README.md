# Exercise Tracker API

A simple exercise tracking API that allows users to create profiles, log their exercises, and retrieve exercise logs.

## Features

- Create a new user.
- Add exercises for a user by their ID.
- Retrieve a user's exercise log.
- Supports querying exercise logs with optional filters.

## API Endpoints

### 1. Create a New User

**Endpoint:**  
`POST /api/users`

**Description:**  
Creates a new user and assigns them a unique ID. If the username already exists, returns the existing user.

**Request Body:**

- `username`: The name of the user to create.

**Response:**

```json
{
  "username": "JohnDoe",
  "_id": "64a2b7f7e9b8c9d3e2a0"
}
```

### 2. Add Exercise for a User

**Endpoint:**  
`POST /api/users/:_id/exercises`

**Description:**  
Logs a new exercise for the specified user by their ID.

**Request Parameters:**

- `_id`: The ID of the user to add exercises for.

**Request Body:**

- `description`: A description of the exercise.
- `duration`: Duration of the exercise in minutes.
- `date` (optional): Date of the exercise in `YYYY-MM-DD` format. If not provided, the current date is used.

**Response:**

```json
{
  "_id": "64a2b7f7e9b8c9d3e2a0",
  "username": "JohnDoe",
  "date": "Thu Oct 23 2024",
  "duration": 60,
  "description": "Running"
}
```

### 3. Get All Users

**Endpoint:**  
`GET /api/users`

**Description:**  
Retrieves a list of all registered users.

**Response:**

```json
[
  {
    "username": "JohnDoe",
    "_id": "64a2b7f7e9b8c9d3e2a0"
  },
  {
    "username": "JaneSmith",
    "_id": "74a2b7f7e9b8c9d3e2a5"
  }
]
```

### 4. Get User's Exercise Log

**Endpoint:**  
`GET /api/users/:_id/logs`

**Description:**  
Retrieves a user's exercise log, including the count of exercises logged.

**Request Parameters:**

- `_id`: The ID of the user whose exercise log to retrieve.

**Response:**

```json
{
  "count": 2,
  "log": [
    {
      "description": "Running",
      "duration": 60,
      "date": "Thu Oct 23 2024"
    },
    {
      "description": "Swimming",
      "duration": 30,
      "date": "Wed Oct 22 2024"
    }
  ]
}
```

### 5. Get User's Exercise Log with Filters

**Endpoint:**  
`GET /api/users/:_id/logs?[from][&to][&limit]`

**Description:**  
Retrieves a user's exercise log with optional query parameters to filter results.

**Query Parameters:**

- `from`: (Optional) Start date in `YYYY-MM-DD` format.
- `to`: (Optional) End date in `YYYY-MM-DD` format.
- `limit`: (Optional) Limit the number of returned exercises.

**Response:**

Same as the response for the `/logs` endpoint but filtered according to the query parameters.

## How It Works

1. **User Creation:**  
   Users are created with a unique ID and can log their exercises with the ID provided.
   
2. **Exercise Logging:**  
   Users can log exercises with details like description, duration, and date. If no date is provided, the current date is logged.

3. **Exercise Logs:**  
   Users' logs can be retrieved either in full or filtered by date range and the number of records.
   
## Built With

- Node.js
- Express.js
- Body-parser
- Cors
- dotenv (for environment variable management)
