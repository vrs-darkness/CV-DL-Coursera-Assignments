# URL Shortener Microservice

A simple URL shortener API that takes in a long URL and returns a shortened version. This API leverages Node.js's built-in `dns` module for URL validation and redirection.

## Features

- Shorten long URLs with a simple API call.
- Validate URLs using Node.js's `dns` library.
- Redirect users from the shortened URL to the original URL.

## API Endpoints

### 1. Shorten a URL

**Endpoint:**  
`POST /api/shorturl`

**Description:**  
This endpoint accepts a long URL and returns a shortened URL.

**Request Body:**

- The request must include a JSON object with the key `url` representing the URL to be shortened.

```json
{
  "url": "https://example.com"
}
```

**Response:**

- If the URL is valid, the response will include a JSON object with the shortened URL.

```json
{
  "original_url": "https://example.com",
  "short_url": "<shortened_url>"
}
```

### 2. Redirect to Original URL

**Endpoint:**  
`GET /api/shorturl/:shorturl`

**Description:**  
Redirects the user to the original URL associated with the shortened URL.


### 2. Redirect to the Original URL

Use the shortened URL to redirect to the original. For example, if the shortened URL is `1`, visiting `/api/shorturl/1` will redirect you to `https://example.com`.

## How It Works

1. **URL Validation:**  
   The API uses Node.js's `dns` module to perform a lookup of the provided URL and validate that it's reachable.

2. **Shortened URL Generation:**  
   A unique identifier is generated for each valid URL, which is stored and mapped to the original URL.

3. **Redirection:**  
   When a user accesses the shortened URL, they are redirected to the original URL through a simple `GET` request handler.

## Built With

- Node.js
- Express.js
- DNS module for URL validation
---
