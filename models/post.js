
const Sequelize = require('sequelize');
const db = require('../config/database')

const Post = db.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Post;