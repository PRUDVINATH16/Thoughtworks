import express from 'express';
const router = express.Router();

import { addTodo, editTodo, deleteTodo, getAllTodos } from '../controllers/todo.controller.js';

router.post('/add', addTodo);
router.post('/edit/:id', editTodo);
router.post('/delete/:id', deleteTodo);
router.get('/todos', getAllTodos);

export default router;