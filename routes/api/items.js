const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public

router.get('/', (req, res) => {
    Item
    .find()
    .sort({ date: -1 })
    .then(items => res.status(200).json(items))
    .catch(err => res.status(500).json({ Error: err }))
});

// @route   POST api/items
// @desc    Create Item
// @access  Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    
    newItem
    .save()
    .then(item => {
        res.status(201).json(item)
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
});

module.exports = router;
