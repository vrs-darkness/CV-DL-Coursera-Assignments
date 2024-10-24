# File Metadata Microservice

A microservice that accepts file uploads and returns metadata about the uploaded file, such as the file type, size, and original name.

## Features

- Accepts file uploads.
- Provides file metadata, including file type (MIME type), size, and original file name.

## API Endpoints

### 1. Upload File

**Endpoint:**  
`POST /api/fileanalyse`

**Description:**  
This endpoint allows you to upload a file and returns metadata about the uploaded file, including the original name, size, and type.

**Request Body:**

- The request must include a file in a form-data format.

**Response:**

- If the file is successfully uploaded, the response will be a JSON object containing the file metadata.

```json
{
  "original_name": "example.txt",
  "size": 1024,
  "type": "text/plain"
}
```

### Error Handling

- If no file is uploaded, or the request is malformed, an error message will be returned.

```json
{
  "error": "No file uploaded."
}
```

## How It Works

1. **File Upload:**  
   The service uses middleware to handle file uploads. The file is processed and stored in memory temporarily.

2. **Metadata Extraction:**  
   After the file is uploaded, the service extracts the file’s original name, size (in bytes), and MIME type.

3. **Response:**  
   The API responds with a JSON object containing the metadata information of the file.

## Built With

- Node.js
- Express.js
- `multer` (for handling file uploads)

