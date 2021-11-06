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
    image: {
        type: String,
        default: "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
    },
    country: {
        type: String,
    },
    phone: {
        type: Number,
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