const Item = require('../models/items.model');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all items
// @route   GET /api/items
// @access  Public
exports.getItems = asyncHandler(async (req, res, next) => {
    const items = await Item.find();
    res.status(200).json({
        success: true,
        count: items.length,
        data: items
    });
});

// @desc   Post an item
// @route  POST /api/items
// @access Public
exports.addItem = asyncHandler(async (req, res, next) => {
    const item = await Item.create(req.body);
    res.status(201).json({
        success: true,
        data: item
    });
});

// @desc   Delete an item
// @route  DELETE /api/items/:id
// @access Public
exports.deleteItem = asyncHandler(async (req, res, next) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`, 404));
    }
    await item.deleteOne();
    res.status(200).json({
        success: true,
        data: {}
    });
});

// @desc   Update an item
// @route  PUT /api/items/:id
// @access Public
exports.updateItem = asyncHandler(async (req, res, next) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!item) {
        return next(new ErrorResponse(`Item not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: item
    });
});