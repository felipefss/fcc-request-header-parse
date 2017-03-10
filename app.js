const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const parseHeader = (header) => {
    const obj = {
        ipaddress: header['x-forwarded-for']
    };
    const firstIndex = header['user-agent'].indexOf('(') + 1;
    const lastIndex = header['user-agent'].indexOf(')');
    const software = header['user-agent'].substring(firstIndex, lastIndex);
    const language = header['accept-language'].split(',')[0];

    obj.software = software;
    obj.language = language;

    return obj;
};

app.get('/api/whoami', (req, res) => {
    const parsedHeader = parseHeader(req.headers);
    res.send(parsedHeader) ;
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
