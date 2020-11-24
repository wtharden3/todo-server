const express = require('express');
const router = express.Router();
const {List} = require('../models');
const validateSession = require('../middleware/validateSession');


router.get('/taskmaster'), (req, res) => res.send('Did this work???');

router.get('/getalltasks', validateSession, (req, res) => {
    List.findAll()
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json({
            error:err
        }))
})

router.get('/:date', (req, res) => {
    List.findone({ where: { date: req.params.flavor }})
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json({ error: err }))
})

router.post("/createlist", validateSession, async (req, res) => {
    console.log("Listcontroller =>", req.user);
    try{
        const {date, listname, duration, timedue, description, isChecked} = req.body;

        let newList = await List.create({
            date, listname, duration, timedue, description, isChecked
        });
        res.status(200).json({
            pie: newPie,
            message: "You've made a new list! Look at you!"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry bub, we weren't able to do that right now :("
        });
    }
})