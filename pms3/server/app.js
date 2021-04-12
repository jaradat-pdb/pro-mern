const port = 3000;
const express = require('express');
const app = express();

app.use('/public', express.static('public'));
app.listen(port, () => {
    console.log(`Server started and listening on port ${port}`);
});
