import express from 'express';

// import app router
import router_user from "./user.router"
import router_note from "./note.router"

// import middleware
import authenMiddleware from '../middleware/authen.middleware';


const router = express.Router();

router.use("/user", router_user)
router.use("/note", authenMiddleware.authentication, router_note)

export default router