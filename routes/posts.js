const express = require('express')
const router = express.Router();
const Post = require('../models/post')
//const db = require('../config/database')

// save post to db 
router.post('/', (req, res) => {
    let { title, body } = req.body;
    Post.create({
        title,
        body
    })
        .then((post) => {
            res.status(201).json(post)
        })
        .catch((err) => {
            console.log(err)
        }
        )
});


//fetching all posts from database 
router.get('/all', (req, res) => {
    Post.findAll()
        .then((posts) => {
            return res.status(200).json(posts)
        })
        .catch((err) => console.log(err))
})

//get singl post 
router.get("/:id", (req, res) => {
    let id = req.params.id
    Post.findOne({
        where: {
            id: id
        }
    })
        .then((post) => {
            if (!post) {
                return res.status(404).json({ message: `post with ID: ${id} not exixts in database`, error: "404" })
            }
            res.status(200).json(post)
        })
        .catch((err) => {
            console.log(err)
        })
})

//update single post 
router.put("/:id", (req, res) => {
    let { title, body } = req.body;
    let id = req.params.id
    Post.findOne({
        where: {
            id: id
        }
    })
        .then((post) => {
            if (!post) {
                return res.status(404).json({ message: `no post with ID :${id} found on server `, error: "404" })
            }
            Post.update(
                { title: title, body: body },
                { where: { id: id } }
            )
                .then((post) => {
                    return res.status(200).json({ message: "post updated successfully", post })
                })
                .catch((err) => {
                    console.log(err)
                })

        })
        .catch((err) => {
            console.log(err)
        })
})

//delete the post 

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    Post.findOne({
        where: {
            id: id
        }
    })
        .then((post) => {
            if (!post) {
                return res.status(404).json({ message: `the post with id : ${id} not exist in database`, error: "404" })
            }
            Post.destroy({
                where: {
                    id: id
                }
            })
                .then((post) => {
                    return res.status(200).json({ message: `post  with ID :${id} is deleted successfully` })
                })
        })
        .catch((err) => {
            console.log(err)
        })



})







module.exports = router;