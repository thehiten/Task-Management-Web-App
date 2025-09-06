# Task Manager

A simple web app to manage your daily tasks. Create, edit, and organize your tasks with a clean interface.

## What it does

- Create new tasks with title and description
- Mark tasks as done or pending
- Search through your tasks
- Filter tasks by status
- Edit and delete tasks
- User accounts with secure login

## How to run

### Backend
1. Go to backend folder
2. Run `npm install`
3. Create `.env` file with your MongoDB connection
4. Run `npm start`

### Frontend
1. Go to frontend folder
2. Run `npm install`
3. Run `npm run dev`

## Environment setup

Backend `.env` file:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```

Frontend `.env` file:
```
VITE_API_URL=http://localhost:3000/api
```

## Tech used

- React for frontend
- Node.js and Express for backend
- MongoDB for database
- JWT for authentication
- TailwindCSS for styling

## Features

- User registration and login
- Create, read, update, delete tasks
- Search and filter functionality
- Responsive design
- Secure authentication

That's it. Simple task management app.
