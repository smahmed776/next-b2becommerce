const mongoose = require('mongoose');

const MarchentSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Email is required."]
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    name: {
        type: Object,
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        required: true
    },
    country: {
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    companyName: {
        type: String,
    },
    businessType: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    clearance: {
        type: String,
        default: "marchent"
    },
    
})

mongoose.models = {};

const Marchent = mongoose.model("Marchent", MarchentSchema)

module.exports = Marchent;