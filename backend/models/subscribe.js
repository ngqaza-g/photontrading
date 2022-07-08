const mongoose=require('mongoose')

const subscriberSchema=mongoose.Schema({

    userEmail:{
        type:String,
        validate: [validator.isEmail, 'Please enter valid email address']

    }

})
module.exports = mongoose.model('Subsciber', subscriberSchema);