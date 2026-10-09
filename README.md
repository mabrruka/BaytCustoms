# Bayt Customs

A custom furniture and architectural woodworking website for **Bayt Customs**, based in Tripoli, Libya.

The website showcases bespoke furniture, materials, and collections, and allows customers to submit project specifications and appointment requests.

**Languages:** English and Arabic (EN / AR)

## Features

* Responsive website
* English and Arabic language options
* Home, Showcase, Materials, and Contact pages
* Custom furniture project inquiry form
* Project dimensions and appointment requests
* JPG, PNG, and PDF file uploads
* Backend API for project submissions

## Tech Stack

| Frontend     | Backend         |
| ------------ | --------------- |
| React        | Node.js         |
| Vite         | Express         |
| JavaScript   | Multer          |
| React Router | Nodemailer      |
| CSS          | CORS and dotenv |

## Project Structure

```text
bayt-customs/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── uploads/
│   ├── server.js
│   └── package.json
├── package.json
└── README.md
```

## Requirements

* Node.js
* npm

Check your installation:

```bash
node -v
npm -v
```

## Getting Started

### 1. Run the frontend

Open a terminal in the frontend project directory:

```bash
cd bayt-customs
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

**http://localhost:5173**

### 2. Run the backend

Open a **second terminal**:

```bash
cd server
npm install
npm start
```

The backend runs at:

**http://localhost:5001**

Keep both terminals running while developing.

> If Vite uses another port, open the URL displayed in your terminal.

## API Endpoints

| Method | Endpoint                  | Description                                         |
| ------ | ------------------------- | --------------------------------------------------- |
| `GET`  | `/`                       | Health check — verifies that the backend is running |
| `POST` | `/api/project-submission` | Receives project specifications and uploaded files  |

### Health Check

Test the backend using your browser or terminal.

| Item              | Value                                            |
| ----------------- | ------------------------------------------------ |
| URL               | `http://localhost:5001/`                         |
| Method            | `GET`                                            |
| Success status    | `200 OK`                                         |
| Expected response | `{"message":"Bayt Customs backend is running."}` |

Test with:

```bash
curl http://localhost:5001/
```



