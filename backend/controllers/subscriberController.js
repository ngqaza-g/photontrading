const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Subsciber = require('../models/subscribe')


exports.newSubscriber = catchAsyncErrors(async (req, res, next) => {

    const userEmail=req.body
    const subscriber=await Subscriber.create(userEmail)

    res.status(201).json({
        success: true,
        subscriber
    })

})