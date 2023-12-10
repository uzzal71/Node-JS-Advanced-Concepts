const cluster = require('cluster');

// Is the file being executed in master node?
if(cluster.isMaster) {
    // Cause index.js to be executed *again` but
    // in child mode
    cluster.fork();
} else {
    // I'm a child, i'm going to act like a server
    // and do nothing else
    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while(Date.now() - start < duration) {}
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi there');
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast!');
    })

    app.listen(3000);
}