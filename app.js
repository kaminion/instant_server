const path = require('path');
const app = require(path.join(__dirname,'config/server'));
const {sequelize} = require(path.join(__dirname, 'config/db.js'));

app.all("*", async (req, res, next)=>{

    // ORM 연결
    await sequelize.sync();
    next();
})

app.get('/', (req, res) =>
{
    res.send('hello');
});

