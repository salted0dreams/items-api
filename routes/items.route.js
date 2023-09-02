const express = require('express');
const router = express.Router();
const {
    getItems,
    addItem,
    deleteItem,
    updateItem
} = require('../controllers/item.controller');

router.route('/')
    .get(getItems)
    .post(addItem);

router.route('/:id')
    .delete(deleteItem)
    .put(updateItem);





module.exports = router;