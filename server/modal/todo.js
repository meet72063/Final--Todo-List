const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide todo name']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('TodoSchema2',todoSchema)