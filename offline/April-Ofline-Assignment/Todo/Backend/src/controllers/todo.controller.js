import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path'
import { respond } from '../utils/responseFormat.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../data/todo.json');

export async function addTodo(req, res) {
  const username = req.body.username;
  const todo = req.body.task;

  const newTodo = {
    "id": Date.now(),
    "task": todo,
    "completed": false
  }

  try {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
        return respond(res, false, 404, {}, 'Server issue try again');
      }

      const {allTodos} = JSON.parse(data) || [];
      let user = allTodos.find((user) => user.username == username);
      let todos;
      if (user) {
        user.todos.push(newTodo);
        todos = user.todos;
      } else {
        const newUserTodo = {
          "username": username,
          "todos": []
        }
        newUserTodo.todos.push(newTodo);
        allTodos.push(newUserTodo);
        todos = newUserTodo.todos;
      }

      fs.writeFile(filePath, JSON.stringify({"allTodos": allTodos}, null, 2), error => {
        if (error) {
          console.log(error);
          return respond(res, false, 500, {}, 'Error saving todo');
        }
        return respond(res, true, 201, todos, 'Todo successfully added.');
      });
    });
  } catch(e) {
    console.log(e);
    return respond(res, false, {}, 'Server issue, try again.');
  }

}

export async function editTodo() {
  console.log('editTodo');
}

export async function deleteTodo() {
  console.log('deleteTodo');
}

export async function getAllTodos() {
  console.log('getAllTodos');
}