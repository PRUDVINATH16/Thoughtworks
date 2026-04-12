import express from 'express';
const router = express.Router();

import { addTodo, editTodo, deleteTodo, getAllTodos } from '../controllers/todo.controller.js';

router.post('/add', addTodo);
router.post('/edit', editTodo);
router.post('/delete', deleteTodo);
router.get('/todos', getAllTodos);

export default router;