# Date to GMT Converter Microservice

A microservice that accepts a valid date as input and converts it to GMT format. The service is designed to process dates through a simple POST request.

## Features

- Accepts a date in various valid formats.
- Converts the given date to GMT format.
- Returns the result as a JSON response.

## API Endpoints

### 1. Convert Date to GMT

**Endpoint:**  
`POST /api/date`

**Description:**  
This endpoint accepts a date in the request body and returns the equivalent date and time in GMT format.

**Request Body:**

- The request must include a JSON object with the key `Date`, where the value can be a valid date string or timestamp.

```json
{
  "Date": "2024-10-23T18:30:00"
}
```

**Response:**

- If the date is valid, the response will include the original date and the date converted to GMT format.

```json
{
  "original_date": "2024-10-23T18:30:00",
  "gmt_date": "Wed, 23 Oct 2024 18:30:00 GMT"
}
```

### Error Handling

- If the date is invalid or not provided, an error message will be returned.

```json
{
  "error": "Invalid date format."
}
```
## How It Works

1. **Date Parsing:**  
   The microservice accepts a valid date string or timestamp in the request body. It parses the date using JavaScript's `Date` object.

2. **GMT Conversion:**  
   The date is then converted to GMT using the built-in `toUTCString()` method, which returns a string representing the date in GMT.

3. **Response:**  
   The API responds with both the original date and the GMT-converted date.

## Built With

- Node.js
- Express.js
