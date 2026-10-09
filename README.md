# Bayt Customs

A responsive custom furniture and architectural woodworking website for **Bayt Customs**.

The website showcases bespoke furniture, materials, and collections, supports project inquiries, and includes an AI-powered chatbot called **Bayt Assistant**.

## Features

- Responsive website with English and Arabic language options.
- Home, Showcase, Materials, and Contact pages.
- Custom furniture project inquiries and appointment requests.
- JPG, PNG, and PDF file uploads.
- Floating AI chatbot for customer questions.
- OpenRouter AI integration with a PDF knowledge base.
- Backend API for chat and project submissions.

## Tech Stack

| Frontend | Backend |
|---|---|
| React | Node.js |
| Vite | Express |
| JavaScript | Multer |
| React Router | Nodemailer |
| CSS | dotenv and CORS |
| Geist Sans | pdf-parse |
| | OpenRouter API |

## Local Development Links

| Service | URL | Description |
|---|---|---|
| Frontend | [http://localhost:5173](http://localhost:5173) | Website interface |
| Backend | [http://localhost:5001](http://localhost:5001) | Backend API |
| Health Check | [http://localhost:5001/](http://localhost:5001/) | Checks whether the backend is running |

## Project Structure

```text
bayt-customs/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ChatWidget.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── knowledge/
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
├── package.json
└── README.md
```


## Requirements

- Node.js
- npm
- OpenRouter API key for AI chatbot responses

Check your installation:

```bash
node -v
npm -v
```

## How to Run

### 1. Start the Frontend

From the project root:

```bash
npm install
npm install @fontsource/geist-sans
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 2. Configure the Backend

Create `server/.env`:

```env
PORT=5001
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_MODEL=openrouter/free
```

### 3. Start the Backend

Open a second terminal:

```bash
cd server
npm install
npm start
```

If no `start` script is defined in `server/package.json`, run:

```bash
node server.js
```

The backend should be available at [http://localhost:5001](http://localhost:5001).

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Backend health check |
| `POST` | `/api/project-submission` | Submits project details and uploaded files |
| `POST` | `/api/chat` | Sends a message to Bayt Assistant and returns an AI-generated response |


## AI Chatbot

Bayt Assistant is available through a floating chat widget in the bottom-right corner of the website.

- Answers customer questions in English or Arabic.
- Uses OpenRouter to generate responses.
- Retrieves relevant information from a local PDF knowledge base.
- Avoids inventing unconfirmed business details.

Knowledge base file:

`server/knowledge/bayt_customs_temporary_chatbot_knowledge_base.pdf`

