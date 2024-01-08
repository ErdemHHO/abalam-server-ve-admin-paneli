
const mongoose=require('mongoose')

const adminModel = mongoose.model('admin',{
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
});

module.exports = adminModel;