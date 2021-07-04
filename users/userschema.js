const express = require('express');
const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    uuid:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User',userschema);