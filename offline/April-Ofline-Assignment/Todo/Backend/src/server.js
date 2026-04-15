import authRoutes from './routes/auth.route.js';
import todoRoutes from './routes/todo.route.js';
import express from 'express';

import session from 'express-session';
import {v4} from 'uuid';

const app = express();


app.use(express.static('public'));
app.use(express.json());

app.use(
  session({
    secret: "Evariki Cheppaku",
    resave: false,
    saveUninitialized: true,
    genid: () => {
      return v4();
    },
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }),
);


app.use('/api/auth', authRoutes);
app.use('/api/todo', todoRoutes);

app.get('/', (req, res) => {res.send('working')})

app.listen( 3000, () => {
  console.log(`Backend Server Running on http://localhost:3000`);
});