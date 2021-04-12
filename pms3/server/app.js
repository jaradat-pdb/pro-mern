const port = 3000;
const express = require('express');
const app = express();
const fileServerMiddleware = express.static('public');

app.use('/', fileServerMiddleware);
app.listen(port, () => {
    console.log(`Server started and listening on port ${port}`);
});
