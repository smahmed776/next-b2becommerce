const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Email is required."]
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
    joined: {
        type: Date,
        default: Date.now
    },
    clearance: {
        type: String,
        default: "customer"
    }
})
mongoose.models = {};
const Customer = mongoose.model("Customer", customerSchema);

module.exports= Customer;