import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path'
import { respond } from '../utils/responseFormat.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../data/todo.json');

/* 

Request & Response format for addTodo

Request: {
  "username": "string",
  "task": "string"
}

Response: {
  "success": true,
  "status": 201,
  "message": "Todo successfully added.",
  "data": []
}

*/

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

      const { allTodos } = JSON.parse(data) || [];
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

      fs.writeFile(filePath, JSON.stringify({ "allTodos": allTodos }, null, 2), error => {
        if (error) {
          console.log(error);
          return respond(res, false, 500, {}, 'Error saving todo');
        }
        return respond(res, true, 201, todos, 'Todo successfully added.');
      });
    });
  } catch (e) {
    console.log(e);
    return respond(res, false, {}, 'Server issue, try again.');
  }

}

/* 

Request & Response format for editTodo

Request: {
  "username": "string",
  "todo": {
    "id": "number",
    "task": "string",
    "completed": "boolean"
  }
}

Response: {
  "success": true,
  "status": 200,
  "message": "Todo successfully updated.",
  "data": []
}

*/

export async function editTodo(req, res) {
  const username = req.body.username;
  const editedTodo = req.body.todo;


  try {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
        return respond(res, false, 404, {}, 'Server issue, try again');
      }

      const { allTodos } = JSON.parse(data) || [];
      let user = allTodos.find(user => user.username == username);
      let todo = user.todos.find(todo => editedTodo.id == todo.id);
      if (todo) {
        todo.task = editedTodo.task;
        todo.completed = editedTodo.completed;
      }

      fs.writeFile(filePath, JSON.stringify({ "allTodos": allTodos }, null, 2), error => {
        if (error) {
          console.log(error);
          return respond(res, false, 500, {}, 'Error in updating Todo.');
        }
        return respond(res, true, 200, {}, 'Todo updated successfully.');
      })
    });
  } catch (e) {
    console.log(e);
    return respond(res, false, {}, 'Server issue, try again.')
  }
}

/* 

Request & Response format for deleteTodo

Request: {
  "username": "string",
  "todoId": "number"
}

Response: {
  "success": true,
  "status": 200,
  "message": "Todo deleted successfully.",
  "data": []
}

*/

export async function deleteTodo(req, res) {
  const username = req.body.username;
  const todoId = req.body.todoId;

  try {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
        return respond(res, false, 404, {}, 'Server issue, try again');
      }
      const { allTodos } = JSON.parse(data) || [];
      let user = allTodos.find(user => user.username == username);
      if (user) {
        user.todos = user.todos.filter(todo => todo.id != todoId);
      }

      fs.writeFile(filePath, JSON.stringify({ "allTodos": allTodos }, null, 2), error => {
        if (error) {
          console.log(error);
          return respond(res, false, 500, {}, 'Error in deleting Todo.');
        }
        return respond(res, true, 200, {}, 'Todo deleted successfully.');
      });
    });
  } catch (e) {
    console.log(e);
    return respond(res, false, {}, 'Server issue, try again.')
  }
}

/* 

Request & Response format for getAllTodos

Request: GET /todos?username=string

Response: {
  "success": true,
  "status": 200,
  "message": "Todos retrieved successfully.",
  "data": []
}

*/

export async function getAllTodos(req, res) {
  const username = req.query.username;

  try {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        console.log(error);
        return respond(res, false, 404, {}, 'Server issue, try again');
      }
      const { allTodos } = JSON.parse(data) || [];
      let user = allTodos.find(user => user.username == username);
      console.log(user)
      if (user) {
        console.log(user)
        return respond(res, true, 200, user.todos, 'Todos retrieved successfully.');
      }
      return respond(res, true, 200, [], 'No todos found for the user.');
    });
  } catch (e) {
    console.log(e);
    return respond(res, false, {}, 'Server issue, try again.')
  }
}