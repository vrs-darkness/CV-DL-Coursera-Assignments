# Micro-Services Templates

This repository contains multiple micro-services templates that can be easily cloned and used for different purposes, such as URL shortening, timestamp validation, file metadata extraction, and exercise tracking. Each service is built with Node.js and can be quickly set up by following the steps below.

## Micro-Services Included:
1. **URL Shortener**: Shorten URLs and manage redirects.
2. **Timestamp Validator**: Validate and parse timestamps in various formats.
3. **File Metadata Finder**: Extract metadata (size, type, etc.) from uploaded files.
4. **Exercise Tracker**: Track exercises with user data, including duration, type, and timestamps.

## Setup Instructions

To use any of these micro-services, follow the steps below:

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/micro-services-templates.git
cd micro-services-templates
```

### 2. Navigate to the Micro-Service Directory
Each service has its own directory. Navigate to the one you want to use:

- **URL Shortener**:
  ```bash
  cd urlshortener
  ```

- **Timestamp Validator**:
  ```bash
  cd timestamp-validator
  ```

- **File Metadata Finder**:
  ```bash
  cd file-metadata-finder
  ```

- **Exercise Tracker**:
  ```bash
  cd exercise-tracker
  ```

### 3. Install Dependencies
Inside the service directory, install the required dependencies using npm:

```bash
npm install
```

### 4. Start the Server
After installing dependencies, start the server:

```bash
node server.js
```

The server will start running on the default port (usually `http://localhost:3000`).

## Requirements
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Usage
Once the server is up, you can use your preferred API testing tool (like Postman or Curl) to interact with the micro-services. Each service will have its own API endpoints.

## Contributing
Feel free to contribute by adding new micro-services or improving the existing ones. To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

---

By following this guide, you'll be able to run and test any of the micro-services in this repository with ease.

----
Special Thanks to FreeCodersCamp for helping me make such Templates
----
