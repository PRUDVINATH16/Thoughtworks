import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path'
import { respond } from '../utils/responseFormat.js';

export const loginUser = (req, res) => {

  const username = req.body.username;

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, '../data/user.json');

  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      respond(res, false, 404, {}, 'Server issue try again!');
      return;
    }

    const usersObject = JSON.parse(data) || {};

    let user = usersObject.users.find(user => user.username == username);
    if (user)
      return respond(res, true, 200, user, 'Nothing serious');

    const newUser = { username }

    usersObject.users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(usersObject, null, 2), (error) => {
      if (error) {
        console.log(error);
        return respond(res, false, 500, {}, 'Error saving user');
      }
      return respond(res, true, 201, newUser, 'User created');
    });
  });
}

export const deleteUser = (req, res) => {

  const username = req.body.username;

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, '../data/user.json');

  fs.readFile(filePath, 'utf-8', (error, data) => {

    if (error) {
      return respond(res, false, 500, {}, 'Server issue, try again');
    }

    const usersObject = JSON.parse(data) || {};

    let users = usersObject.users.filter(user => user.username !== username);

    usersObject.users = users;

    fs.writeFile(filePath, JSON.stringify(usersObject, null, 2), (error) => {
      if (error) {
        console.log(error);
        return respond(res, false, 500, {}, 'Error saving user');
      }
      return respond(res, true, 200, {}, 'User deleted');
    });
  });

}