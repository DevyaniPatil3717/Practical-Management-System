import {
  createAdmin,
  createStudent,
  createTeacher,
  getAllUsers,
  getAllAdmins,
  getAllTeachers,
  getAllStudents,
} from "../controllers/userController.js";
import {
  createSubject,
  getsubjects,
} from "../controllers/subjectController.js";
import {
  createPractical,
  getPracticals,
  
} from "../controllers/practicalController.js";

import { enrollPractical, getEnrolls } from "../controllers/enrollController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";
import { isTeacher } from "../middleware/Middleware.js";
import { isStudent } from "../middleware/Middleware.js";
import { isAdminORteacher } from "../middleware/Middleware.js";
const router = express.Router();

//user Creation
router.post("/admin/create", createAdmin);
router.post("/teacher/create", createTeacher);
router.post("/student/create", createStudent);

//get all users
router.post("/user/get",isAdmin, getAllUsers);

//get all admins
router.post("/admins/get",isAdmin, getAllAdmins);

//get all teachers
router.post("/teachers/get",isAdmin, getAllTeachers);

//get all students
router.post("/students/get",isAdminORteacher, getAllStudents);

//create subject
router.post("/subject/create",isAdmin, createSubject);

//get all subjects
router.get("/subject/get", getsubjects);

//create practical
router.post("/practical/create",isTeacher,createPractical);

//get practical
router.get("/practical/get", getPracticals);


//practical enroll
router.post("/enroll/practical",isStudent, enrollPractical);


router.post("/enroll/get",isAdminORteacher, getEnrolls);


export default router;
