const Request = require('request');

// Get Request
// Request.get('https://jsonplaceholder.typicode.com/users',(err, res, body) => {
//     if(err) {
//         return console.log(err);
//     }
//     console.dir(JSON.parse(body));
// })

// Post Request
Request.post({
    "headers": {"content-type": "application/json"},
    "url": "http://httpbin.org/post",
    "body": JSON.stringify({
        "firstname": "Nic",
        "lastname": "Raboy"
    })
}, (err, res, body) => {
    if (err) {
        return console.dir(err);
    }
    console.dir(JSON.parse(body));
});
