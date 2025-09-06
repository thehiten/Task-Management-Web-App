import express from 'express';
const router = express.Router();


// Importing course controller functions
import { courseCreate, courseUpdate,courseDelete, courseGet } from "../controller/course.controller.js";
// Importing authentication and authorization middleware
import authentication from "../middleware/authentication.middleware.js";
import authorization from "../middleware/authorization.middleware.js";


// Create a course
// Update the course
// Delete the course
// Get all courses
router.post('/create', authentication, authorization,courseCreate);


router.put('/update/:id', courseUpdate);
router.delete('/delete/:id', courseDelete);
router.get('/get',courseGet);

export default router;