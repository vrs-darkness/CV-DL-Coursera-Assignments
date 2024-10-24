# Request Header Parser Microservice

A microservice that retrieves and parses information from the request headers, including the IP address, accepted language, and software (browser).

## Features

- Extracts the requester's IP address.
- Retrieves the preferred language from the request headers.
- Identifies the software (browser and operating system) from the user agent.

## API Endpoints

### 1. Get Requester's Information

**Endpoint:**  
`GET /api/whoami`

**Description:**  
This endpoint extracts and returns information about the requester, such as their IP address, accepted language, and software (browser and operating system).

**Response:**

- The response will be a JSON object containing the requester's information.

```json
{
  "ipaddress": "192.168.1.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
}
```

### Error Handling

- If there is an issue with retrieving the information, an appropriate error message will be returned.

```json
{
  "error": "Unable to retrieve request information."
}
```

## How It Works

1. **IP Address Retrieval:**  
   The service extracts the IP address of the requester from the request headers (`req.ip` or `x-forwarded-for`).

2. **Language Parsing:**  
   The service extracts the `Accept-Language` header to retrieve the preferred language(s) set in the requester's browser.

3. **Software Information:**  
   The service parses the `User-Agent` header to extract the browser and operating system information of the requester.

## Built With

- Node.js
- Express.js
