const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
module.exports = new Sequelize(
    process.env.DB,
    process.env.user, 
    process.env.password, {
    host:process.env.host,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },


});