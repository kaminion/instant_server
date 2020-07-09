const { Sequelize } = require('sequelize');
const path = require('path');
const {    
    hostname,
    dbname,
    id,
    pw,
    dialect
} = require(path.join(__dirname, 'constant'));


const sequelize = new Sequelize(dbname, id, pw, {
    hostname,
    dialect
});


module.exports = sequelize;