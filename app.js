const app = require('./config/server');

app.get('/', (req, res) =>
{
    res.send('hello');
});