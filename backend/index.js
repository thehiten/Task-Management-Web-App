import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser"; // Import body-parser
import cors from "cors"; // Import cors
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// Connect to MongoDB
try {
  await mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error(err);
}

// Body-parser middleware
app.use(bodyParser.json());

// CORS middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Cookie-parser middleware
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
