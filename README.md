# Bayt Customs

A premium custom furniture and architectural woodworking website for Bayt Customs.

The project includes a modern frontend for showcasing custom furniture, materials, and projects, along with a backend system for handling project inquiries and file submissions.

## Features

* Responsive website
* Home page
* Showcase page
* Materials page
* Contact page
* Custom project inquiry form
* File uploads
* Project specifications
* Appointment requests
* Responsive navigation
* Backend project submission API

## Showcase

The showcase includes:

* Kitchens
* Dining Rooms
* Living Rooms
* Bedrooms

Projects can include images, materials, descriptions, and project information.

## Materials

Supported materials include:

* Oak
* Walnut
* Ash
* Pine
* MDF
* Plywood
* Veneer
* Laminate

## Project Submission

The project form supports:

* Name
* Email
* Phone
* Contact method
* Project type
* Project description
* Showcase piece
* Dimensions
* Appointment date and time
* Site visit date and time
* Reference files
* Additional information

Supported files:

```text
JPG
PNG
PDF
```

Maximum file size:

```text
10 MB
```
## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* React Router
* CSS

### Backend

* Node.js
* Express
* Multer
* Nodemailer
* CORS
* dotenv

## Project Structure

```text
bayt-customs/
│
├── bayt-customs/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── server/
│   │   ├── uploads/
│   │   ├── server.js
│   │   ├── package.json
│   │   └── .env
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

## Requirements

* Node.js
* npm

## Frontend Setup

```bash
cd bayt-customs
npm install
npm run dev
```

The frontend will run on the Vite development server.

## Backend Setup

```bash
cd server
npm install
npm start
```

The backend runs on port `5001` by default.

