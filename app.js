const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/whoami', (req, res) => {
    console.log(req.ip);
    res.send('Hello') ;
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
