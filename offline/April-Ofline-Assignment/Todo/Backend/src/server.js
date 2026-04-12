import authRoutes from './routes/auth.route.js';
import todoRoutes from './routes/todo.route.js';
import express from 'express';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todo', todoRoutes);

app.listen( 3000, () => {
  console.log(`Backend Server Running on http://localhost:3000`);
});