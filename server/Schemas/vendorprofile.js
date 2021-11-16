const mongoose = require("mongoose");

const vendorprofileSchema = new mongoose.Schema({
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
    type: String
  },
  phone: {
    type: Number,
    required: true
  },
  companyName: {
    type: String
  },
  businessType: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  clearance: {
    type: String,
    default: "marchent"
  },
  profile: {
    type: Object,
    default: {
      image:
        "https://png.pngitem.com/pimgs/s/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png",
      coverImage:
        "https://www.chirripeppers.com/sitepad-data/uploads//2020/08/wild-triad2.jpg",
      social: {},
      home: {
        coverVideo: {
          video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
          thumbnail:
            "https://diypbx.com/wp-content/uploads/2016/02/video-placeholder.jpg"
        },
        mainImages: ["https://i.stack.imgur.com/y9DpT.jpg"],
        allImageAndVideos: {
          images: ["https://i.stack.imgur.com/y9DpT.jpg"],
          videos: [
            "https://diypbx.com/wp-content/uploads/2016/02/video-placeholder.jpg"
          ]
        },
        products: []
      },
      followers: [],
      level: 3,
      Rating: []
    },
    image: {
      type: String
    },
    coverImage: {
      type: String
    },
    social: {
      type: Object,
      facebook: String,
      instagram: String,
      whatsApp: Number
    },
    home: {
      type: Object,
      coverVideo: {
        type: Object,
        video: { type: String },
        thumbnail: { type: String }
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
      }
    },
    followers: {
      type: Array,
      default: []
    },
    level: { type: Number },
    Rating: {
      type: Array,
      default: []
    }
  }
});

mongoose.models = {};

const vendorprofile = mongoose.model("vendorprofile", vendorprofileSchema);

module.exports = vendorprofile;
