# URL Shortener

A simple URL shortening service that allows users to convert long URLs into short, easy-to-share links.

## Features

- Shorten long URLs
- Redirect short URLs to original links
- Basic analytics (click count)
- RESTful API

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally or remotely

### Installation

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
npm install
```

### Configuration

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### Running the App

```bash
npm start
```

## API Endpoints

- `POST /api/shorten` - Shorten a URL
- `GET /:shortId` - Redirect to original URL
- `GET /api/stats/:shortId` - Get analytics for a short URL

## License

MIT

## Author

Parm's Musale