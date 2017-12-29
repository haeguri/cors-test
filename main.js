const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('use callback');
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type withCredentials");

    next();
});

app.post('/test/', (req, res) => {
    console.log('in comming post req');
    res.send('hello world!');
});

app.listen(3333, () => console.log('test server started on port 3333'));