const mongoose = require('mongoose');

const vendorprofileSchema = new mongoose.Schema({
    vendorId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    companyName: {
        type: String,
    },
    profile: {
        type: Object,
        default: {

            image: "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png",
            coverImage: "https://www.chirripeppers.com/sitepad-data/uploads//2020/08/wild-triad2.jpg",
            social: {},
            home: {
                coverVideo: ["https://diypbx.com/wp-content/uploads/2016/02/video-placeholder.jpg"],
                mainImages: ["https://i.stack.imgur.com/y9DpT.jpg"],
                allImageAndVideos: {
                    images: ["https://i.stack.imgur.com/y9DpT.jpg"],
                    videos: ["https://diypbx.com/wp-content/uploads/2016/02/video-placeholder.jpg"]
                },
                products: [],
            },
            followers: [],
            level: 3,
            Rating: [],
        },
        image: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        social: {
            type: Object,
            facebook: String,
            instagram: String,
            whatsApp: Number,
        },
        home: {
            type: Object,
            coverVideo: {
                type: Array,
                default: []
            },
            mainImages: {
                type: Array,
                default: []
            },
            allImageAndVideos: {
                type: Object,
                images: {
                    type: Array,
                    default: []
                },
                videos: {
                    type: Array,
                    default: []
                }
            },
            products: {
                type: Array,
                default: []
            },

        },
        followers: {
            type: Array,
            default: []
        },
        level: { type: Number },
        Rating: {
            type: Array,
            default: []
        },

    }
})

mongoose.models = {};

const vendorprofile = mongoose.model("vendorprofile", vendorprofileSchema)

module.exports = vendorprofile;