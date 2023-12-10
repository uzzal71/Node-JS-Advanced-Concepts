const express = require('express');
const { Worker, isMainThread } = require('worker_threads');
const app = express();

if (isMainThread) {
  app.get('/', (req, res) => {
    const worker = new Worker(__filename);

    worker.on('message', (myCounter) => {
      console.log(myCounter);
      res.send(`Counter: ${myCounter}`);
    });

    worker.postMessage('start');
  });

  app.get('/fast', (req, res) => {
    res.send('This was fast!');
  });

  app.listen(3000);
} else {
  let counter = 0;
  while (counter < 1e9) {
    counter++;
  }

  parentPort.postMessage(counter);
}
