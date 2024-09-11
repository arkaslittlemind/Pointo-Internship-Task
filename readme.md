# NoteWise

A full-stack notes-taking application built with React, Tailwind CSS, Vite, Node.js, Postgres (Neon DB), and Prisma.

![image](https://github.com/user-attachments/assets/3f322f23-dccc-4b21-af5c-089b3ea5f065)


## Project Overview

This project is a simple and efficient notes-taking app that allows users to create, read, update, and delete (CRUD) notes. The app has a clean and modern UI built with React and Tailwind CSS, and the backend is powered by Node.js, Postgres (using Neon DB), and Prisma ORM.

## Features

- **Create Notes:** Add new notes with titles and content.
- **Read Notes:** View a list of all your notes.
- **Update Notes:** Edit existing notes. (Needs fixing)
- **Delete Notes:** Remove notes you no longer need.
- **Responsive Design:** Mobile-friendly interface using Tailwind CSS.

## Tech Stack

### Frontend

- **React:** JavaScript library for building user interfaces.
- **Vite:** Frontend build tool that provides a fast and lean development experience.
- **Tailwind CSS:** Utility-first CSS framework for styling.

### Backend

- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Web framework for Node.js to handle routing and middleware.
- **Postgres (Neon DB):** Relational database to store notes.
- **Prisma:** ORM to interact with the database.


## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **Postgres** (Neon DB is used in this project)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arkaslittlemind/Pointo-Internship-Task.git
   cd Pointo-Internship-Task
   ```

2. **Install dependencies:**

   For the backend:

   ```bash
   cd backend
   npm install
   ```

   For the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Backend:**

   Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

   This will start the backend server on `http://localhost:3000`.

2. **Frontend:**

   Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

   This will start the frontend on `http://localhost:5173`.

## API Endpoints

Here are the main API endpoints available:

- **GET /api/notes**: Fetch all notes
- **POST /api/notes**: Create a new note
- **PUT /api/notes/:id**: Update an existing note by ID
- **DELETE /api/notes/:id**: Delete a note by ID

## Environment Variables

Create a `.env` file in the `backend` directory to store environment variables:

```plaintext
DATABASE_URL=your-neon-db-url
```

## Additional Notes

Database Migrations: If you're using Prisma, ensure that you have run the necessary database migrations (e.g., `npx prisma migrate dev`).

## Future Improvements

 1. Fix the update note functionality. (currently not working)
 2. Add user authentication.
 3. The landing page is already created, but it is not linked to the main page. Need to add routing to the landing page.

## Screen Share Link-
[https://www.loom.com/share/d8df914c389c4309a283fab9ec58f149?sid=8bcf7aa0-b8e0-4490-8176-4936a5599270](https://www.loom.com/share/d8df914c389c4309a283fab9ec58f149)


