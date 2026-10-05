# 🪵 Bayt Customs

> **Premium handcrafted custom furniture and architectural woodworking website** for **Bayt Customs**, a custom furniture studio based in **Tripoli, Libya**.

The project combines a refined **editorial-style frontend** with a backend **project specification system** for collecting custom furniture requests, dimensions, appointment preferences, reference files, and client contact information.

---

## ✨ Overview

**Bayt Customs** specializes in:

* 🏠 **Custom Kitchens**
* 🚪 **Bespoke Cabinetry**
* 👔 **Wardrobes**
* 🍽️ **Dining Furniture**
* 🛋️ **Living Room Furniture**
* 🛏️ **Bedroom Furniture**
* 🪚 **Architectural Woodworking**
* ✏️ **Custom Furniture Commissions**

The website allows visitors to:

* Explore the Bayt Customs studio
* Browse furniture collections
* Discover available materials
* View showcase projects
* Submit detailed project specifications
* Upload reference images and plans
* Request quotes and appointments

---

# 🚀 Features

## 🌐 Website

* Responsive custom furniture website
* Editorial / luxury furniture visual style
* Custom typography using **Geist** and **Instrument Serif**
* Home page
* Showcase page
* Materials page
* Contact / Project Specification page
* Reusable navigation and footer
* React Router navigation
* Responsive layouts
* Custom project inquiry form

---

## 🖼️ Showcase

The showcase currently includes categories such as:

* **Kitchens**
* **Dining Rooms**
* **Living Rooms**
* **Bedrooms**

### Featured Pieces

* **Walnut Hearth Kitchen**
* **Oakline Kitchen**
* **Verde Pantry Kitchen**
* **Espresso Frame Kitchen**
* **Cedar Ridge Kitchen**
* **Mediterranean Oak Kitchen**

Each showcase piece can include:

* Product image
* Material information
* Description
* Quote request
* Detailed specification information

---

## 🪵 Materials

The Materials page includes a curated selection of:

| Material     | Use                      |
| ------------ | ------------------------ |
| **Oak**      | Furniture & cabinetry    |
| **Walnut**   | Premium furniture        |
| **Ash**      | Furniture & interiors    |
| **Pine**     | Furniture & construction |
| **MDF**      | Cabinetry & panels       |
| **Plywood**  | Structural furniture     |
| **Veneer**   | Premium finishes         |
| **Laminate** | Durable surfaces         |

---

# 📝 Project Specification Form

Visitors can submit detailed project information including:

### 👤 Client Information

* **Name**
* **Email**
* **Phone**
* **Preferred contact method**

### 🪑 Project Information

* **Project type**
* **Project description**
* **Showcase piece**
* **Approximate dimensions**

  * Width
  * Height
  * Depth

### 📅 Scheduling

* **Appointment date**
* **Appointment time**
* **Site visit date**
* **Site visit time**

### 📎 Files & Additional Information

* Reference images
* Architectural plans
* Additional project information

### Supported Upload Formats

```text
JPG
PNG
PDF
```

### Maximum Upload Size

> **10 MB per file**

---

# 🛠️ Tech Stack

## Frontend

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| **React**        | Frontend framework           |
| **Vite**         | Development & build tooling  |
| **JavaScript**   | Application logic            |
| **React Router** | Client-side routing          |
| **CSS**          | Styling & responsive layouts |

## Backend

| Technology     | Purpose               |
| -------------- | --------------------- |
| **Node.js**    | Backend runtime       |
| **Express**    | API server            |
| **Multer**     | File uploads          |
| **Nodemailer** | Email delivery        |
| **CORS**       | Cross-origin requests |
| **dotenv**     | Environment variables |

---

# 📁 Project Structure

```text
bayt-customs/
│
├── bayt-customs/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Showcase.jsx
│   │   │   ├── Materials.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── navbar.css
│   │   │   ├── footer.css
│   │   │   ├── home.css
│   │   │   ├── showcase.css
│   │   │   ├── materials.css
│   │   │   └── contact.css
│   │   │
│   │   ├── data/
│   │   │   └── images.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── server/
│   │   ├── uploads/
│   │   ├── server.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── .env
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# 📋 Requirements

Before running the project, install:

* **Node.js**
* **npm**

The project has been developed using:

> **Node.js 24**

### Check Your Versions

```bash
node -v
npm -v
```

---

# 💻 Frontend Setup

Navigate to the frontend project:

```bash
cd /Users/mabrukataher/WebstormProjects/bayt-customs/bayt-customs
```

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Vite Development Server

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

If port `5173` is already in use, Vite will automatically select another port, such as:

```text
http://localhost:5174
```

---

# ⚙️ Backend Setup

Navigate to the server:

```bash
cd /Users/mabrukataher/WebstormProjects/bayt-customs/bayt-customs/server
```

### 1. Install Backend Dependencies

```bash
npm install
```

### 2. Start the Backend

```bash
npm start
```

### Development Mode

For automatic restarting during development:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5001
```

---

# 🔌 Backend API

## Health Check

### `GET /`

Check whether the backend is running:

```bash
curl http://localhost:5001/
```

Expected response:

```json
{
  "message": "Bayt Customs backend is running."
}
```

---

## 📬 Project Submission

### `POST /api/project-submission`

The endpoint accepts:

```text
multipart/form-data
```

### Form Fields

```text
name
email
phone
contactMethod
projectType
projectDescription
showcasePiece
width
height
depth
appointmentDate
appointmentTime
siteVisitDate
siteVisitTime
projectFile
additionalInformation
```

Uploaded files are sent using:

```text
projectFile
```

---

# 📎 File Uploads

**Multer** handles project file uploads.

### Supported MIME Types

```text
image/jpeg
image/png
application/pdf
```

### Maximum File Size

```text
10 MB
```

Files are temporarily stored inside:

```text
server/uploads/
```

Uploaded filenames are sanitized and prefixed with a timestamp to reduce filename conflicts.

---

# 📧 Email Workflow

The intended production workflow is:

```text
┌──────────────────────┐
│       Client         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ React Contact Form   │
└──────────┬───────────┘
           │
           ▼
┌────────────────────────────┐
│ POST /api/project-submission│
└──────────┬─────────────────┘
           │
           ▼
┌──────────────────────┐
│ Express + Multer     │
└──────────┬───────────┘
           │
           ├──────── Form Information
           │
           └──────── Uploaded Files
           │
           ▼
┌──────────────────────┐
│     Nodemailer       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────────────┐
│ Bayt Customs Email Account   │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│ mabrruka@gmail.com           │
└──────────────────────────────┘
```

Nodemailer is already installed in the backend.

SMTP credentials should be stored in:

```text
server/.env
```

> ⚠️ **Never commit SMTP credentials or other secrets to GitHub.**

The exact SMTP configuration depends on the provider hosting:

```text
contactus@baytcustoms.com
```

Possible providers include:

* Google Workspace
* Microsoft 365
* Zoho
* cPanel hosting
* Other SMTP providers

---

# 🔐 Environment Variables

Create:

```text
server/.env
```

Example structure:

```env
PORT=5001

SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=false
SMTP_USER=contactus@baytcustoms.com
SMTP_PASSWORD=

EMAIL_FROM=contactus@baytcustoms.com
EMAIL_TO=mabrruka@gmail.com
```

> 🔒 **Do not commit the actual `.env` file to GitHub.**

---

# 🌍 CORS

During local development, the backend allows requests from the Vite development server:

```text
http://localhost:5173
```

If Vite starts on another port, such as:

```text
http://localhost:5174
```

the backend CORS configuration needs to allow that origin as well.

### Production

For production, CORS should be changed to the real **Bayt Customs website domain**.

---

# 🔄 Development Workflow

Run the frontend and backend in **separate terminals**.

## Terminal 1 — Frontend

```bash
cd /Users/mabrukataher/WebstormProjects/bayt-customs/bayt-customs
npm run dev
```

## Terminal 2 — Backend

```bash
cd /Users/mabrukataher/WebstormProjects/bayt-customs/bayt-customs/server
npm run dev
```

Then open the frontend URL shown by Vite.

For example:

```text
http://localhost:5173
```

---

# 🧪 Testing the Backend

Check whether the backend is running:

```bash
curl http://localhost:5001/
```

Expected response:

```json
{
  "message": "Bayt Customs backend is running."
}
```

A successful project submission currently appears in the backend terminal as:

```text
New project submission received.
```

The submitted form fields are logged for development testing.

---

# 🔒 Security

The following files and folders should **not** be committed to GitHub:

```text
.env
node_modules/
uploads/
```

### Recommended `server/.gitignore`

```gitignore
node_modules/
.env
uploads/*
```

### Root Project Should Also Ignore

```text
node_modules/
.env
dist/
```

> 🚨 **Never place SMTP passwords, API keys, or other private credentials inside React frontend code.**

---

# 📊 Current Development Status

## ✅ Completed

* [x] React + Vite frontend
* [x] React Router
* [x] Bayt Customs navigation
* [x] Footer
* [x] Home page
* [x] Showcase page
* [x] Materials page
* [x] Contact page
* [x] Responsive styling
* [x] Project specification form
* [x] File upload UI
* [x] Express backend
* [x] CORS configuration
* [x] Multer file handling
* [x] 10 MB upload limit
* [x] JPG / PNG / PDF validation
* [x] React → Express form submission
* [x] Backend project submission endpoint

---

## 🚧 In Progress

* [ ] Configure Nodemailer SMTP
* [ ] Send project submissions to `mabrruka@gmail.com`
* [ ] Attach uploaded project files to emails
* [ ] Add production email configuration
* [ ] Add production CORS domain
* [ ] Add deployment configuration
* [ ] Add production file-storage strategy
* [ ] Add database for project submissions
* [ ] Add admin / project management system

---

# 🔮 Future Improvements

Potential future features include:

### 📊 Project Management

* Online project dashboard
* Customer project tracking
* Admin dashboard
* Project status management
* Quote management
* Production tracking
* Delivery tracking

### 👤 Customer Experience

* Customer accounts
* Saved showcase projects
* Automated proposal emails
* Automated site-visit confirmations
* Appointment management
* WhatsApp integration

### 🗄️ Infrastructure

* Database-backed project submissions
* Cloud file storage
* Image optimization
* Production deployment
* Improved SEO

### 🌍 Localization

* **Arabic language support**
* Multilingual content

---

# 🏷️ Brand

## **Bayt Customs**

> **Premium handcrafted custom furniture and architectural woodworking.**

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| 📍 **Location** | Tripoli, Libya                                                |
| 📧 **Email**    | [contactus@baytcustoms.com](mailto:contactus@baytcustoms.com) |
| 📞 **Phone**    | +218 91 123 4567                                              |
| 🪚 **Workshop** | Alandalus District, Woodworking Zone Street 4                 |

---

# 📄 License

> **Proprietary Project**

This project is proprietary and intended for **Bayt Customs**.

All website designs, branding, photography selections, content, and custom development are property of **Bayt Customs** unless otherwise stated.

---

<div align="center">

**Bayt Customs**
*Handcrafted furniture. Architectural woodworking. Built to last.*

**Tripoli, Libya**

</div>
