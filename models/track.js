const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    artist: {
      type: String,   
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },  
    active: {
      type: Boolean,
      required: true,  
    }, 
  },
  { timestamps: true }  
);

module.exports = mongoose.model("Track", trackSchema);
  