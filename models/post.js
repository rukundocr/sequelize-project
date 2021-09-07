//importing sequelize for model creation
const Sequelize = require('sequelize');
//imprting DB config
const db = require('../config/database')
//creating the post model with 2 attributes : title and body
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

//exporting the Post model to be accessed anywhere in the app
module.exports = Post;