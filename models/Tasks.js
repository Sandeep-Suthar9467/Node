const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, 'must provide name'], 
        trim: true,
        minlenght: [0, 'name should have minimum lenght of 1'],
        maxlength: [20, 'name can not be more than 20 charachters']
    },
        completed:{
            type: Boolean,
            default: false,

        }
})

module.exports = mongoose.model('Task',TaskSchema)