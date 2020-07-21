const path = require('path');
const { Model, DataTypes } = require('Sequelize');
const sequelize = require(path.join(__dirname, '../config/db.js'));
class User extends Model {}
User.init({
    member:{
        type: DataTypes.STRING
    }

},{
    sequelize,
    tableName: "User"
});

User.sequelize = sequelize;

module.exports = User;