import express from 'express';
import authenMiddleware from '../middleware/authen.middleware';
import noteController from '../controllers/note.controller';

const router = express.Router()

router.get("/", noteController.fetchAll)
router.get("/:id", noteController.fetchById)
router.post("/", noteController.createNote)
router.patch("/:id", noteController.updateNote)
router.delete("/id", noteController.deleteNote)

export default router