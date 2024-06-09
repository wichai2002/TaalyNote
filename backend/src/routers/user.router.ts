import express from 'express';
import userController from '../controllers/user.controller';
import authenMiddleware from '../middleware/authen.middleware';

const router = express.Router();


router.get("/", authenMiddleware.authentication, userController.fetchAll);
router.get("/:id",authenMiddleware.authentication, userController.fetchById);
router.patch("/:id", authenMiddleware.authentication, userController.updateUser)
router.delete("/:id", authenMiddleware.authentication, userController.deleteUser)

// login
router.post("/authen", userController.authen)
// register
router.post("/", userController.createUser);

export default router