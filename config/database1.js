const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
module.exports = new Sequelize(
    'Students_DB',
     'postgres',
      '505050jr', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },


});