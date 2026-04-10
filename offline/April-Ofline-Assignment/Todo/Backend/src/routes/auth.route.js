import express from 'express';
const router = express.Router();

import { loginUser, deleteUser } from '../controllers/auth.controller.js';

router.post('/login', loginUser);
router.post('/delete', deleteUser);

export default router;