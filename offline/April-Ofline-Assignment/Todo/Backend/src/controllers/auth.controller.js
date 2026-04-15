import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path'
import { respond } from '../utils/responseFormat.js';


/* 

Request Format:

{
  "username": "Prudvi"
}

Response Format:

{
  "OK": true,
  "status": 200 / 201,
  "body": {
    "username": "Prudvi"
  },
  "error": "Nothing Serious" / "User Created"
}

*/
export const loginUser = (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, '../data/user.json');

  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
      return respond(res, false, 404, {}, 'Server issue try again!');
    }

    const usersObject = JSON.parse(data) || {};

    let user = usersObject.users.find(user => (user.username == username && user.password == password));
    if (user) {
      console.log(req.sessionID);
      res.cookie('session_id', req.sessionID, {
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });
      res.cookie('username', username, {
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });
      req.session.user = user;
      return respond(res, true, 200, user, 'Nothing serious');
    }
    else
      return respond(res, false, 401, {}, 'Enter valid user details')

    // const newUser = { username }

    // usersObject.users.push(newUser);

    // fs.writeFile(filePath, JSON.stringify(usersObject, null, 2), error => {
    //   if (error) {
    //     console.log(error);
    //     return respond(res, false, 500, {}, 'Error saving user');
    //   }
    //   return respond(res, true, 201, newUser, 'User created');
    // });
  });
}

/* 

Request Format:

{
  "username": "Prudvi"
}

Response Format:

{
  "OK": true,
  "status": 200,
  "body": {},
  "error": "Server issue, try again" / "Error deleting user"
}

*/

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
        return respond(res, false, 500, {}, 'Error deleting user');
      }
      return respond(res, true, 200, {}, 'User deleted');
    });
  });

}