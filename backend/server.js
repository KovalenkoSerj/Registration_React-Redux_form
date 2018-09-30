const express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 5000;

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
    res.send({response: 'Authenticated'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));