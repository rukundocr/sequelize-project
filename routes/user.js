const express = require('express')
const router = express.Router();
const User = require('../models/user')
//onst db = require('../config/database')

// save post to db 
router.post('/', (req, res) => {
    let { firstname, lastname, email } = req.body;
    User.create({
        firstname,
        lastname,
        email
    })
        .then((user) => {
            res.status(201).json(user)
        })
        .catch((err) => {
            console.log(err)
        }
        )
});


//fetching all posts from database 
router.get('/all', (req, res) => {
    User.findAll()
        .then((users) => {
            return res.status(200).json(users)
        })
        .catch((err) => console.log(err))
})

//get singl post 
router.get("/:id", (req, res) => {
    let id = req.params.id
    User.findOne({
        where: {
            id: id
        }
    })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: `no user with ID :${id} found on server `, error: "404" })
            }
            res.status(200).json(user)
        })
        .catch((err) => {
            console.log(err)
        })
})

//update single post 
router.put("/:id", (req, res) => {
    let { firstname, lastname, email } = req.body;
    let id = req.params.id
    User.findOne({
        where: {
            id: id
        }
    })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: `no user with ID :${id} found on server `, error: "404" })
            }
            User.update(
                { firstname: firstname, lastname: lastname, email: email },
                { where: { id: id } }
            )
                .then((user) => {
                    return res.status(200).json({ message: "user  updated successfully" })
                })
                .catch((err) => {
                    console.log(err)
                })

        })
        .catch((err) => {
            console.log(err)
        })
})

//delete the user 

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    User.findOne({
        where: {
            id: id
        }
    })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: `the user with id : ${id} not exist in database`, error: "404" })
            }
            User.destroy({
                where: {
                    id: id
                }
            })
                .then((user) => {
                    return res.status(200).json({ message: `User  with ID :${id} is deleted successfully` })
                })
        })
        .catch((err) => {
            console.log(err)
        })



})



module.exports = router;