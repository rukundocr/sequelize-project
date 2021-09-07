//importing sequelize for model creation
const Sequelize = require('sequelize');
//creating the User  model with 2 attributes : firstname,lastname,email
const db = require('../config/database')

const User = db.define('user', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
//exporting the model to be accessed anywhere
module.exports = User;