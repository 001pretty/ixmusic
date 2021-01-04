var mongoose = require("mongoose");

const Track = require("../models/track");
 
exports.getTracks = async (req, res, next) => {
  try { 
    const tracks = await Track.find();
    res.status(200).json({   
      message: "Fetched tracks successfully.",
      tracks: tracks,   
    });
  } catch (err) { 
    if (!err.statusCode) {
      err.statusCode = 500; 
    } 
    next(err); 
  }
};  