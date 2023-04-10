const mongoose = require('mongoose');

const SpotifyTokenSchema = new mongoose.Schema({
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  expiresIn: {
    type: Number,
    required: true
  },
  tokenType: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// const SpotifyToken = models.spotifytoken || model('SpotifyToken', SpotifyTokenSchema);



module.exports = mongoose.model('SpotifyToken', SpotifyTokenSchema);
