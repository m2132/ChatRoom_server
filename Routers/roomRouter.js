import express from 'express';
import roomController from "../Controllers/roomController.js";

const router = express.Router();

router.get('/', roomController.getList);

router.get('/:id', roomController.getById);

router.put('/:id', roomController.update);

router.post('/', roomController.addRoom);

router.delete('/:id', roomController.delete);

export default router;