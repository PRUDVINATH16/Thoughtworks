const url = require('url');

const urlObj = new url.URL('https://api.example.com/users?name=John&age=26&city=Hyderabad');

// console.log(urlObj);
console.log('Age: ', urlObj.searchParams.get('age'));

const keys = urlObj.searchParams.keys();
// console.log(keys);

const reqObj = {};
keys.forEach( key => {
  reqObj[key] = urlObj.searchParams.get(key); 
});

console.log(reqObj);