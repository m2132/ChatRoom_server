import express from 'express';
import messageController from "../Controllers/messageController.js";

const router = express.Router();

router.get('/', messageController.getList);

router.get('/:id', messageController.getById);

router.put('/:id', messageController.update);

router.post('/', messageController.addMessage);

router.delete('/:id', messageController.delete);

export default router;