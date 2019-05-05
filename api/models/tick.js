const mongoose = require('mongoose');

const tickSchema = new mongoose.Schema({
  startTime: { type: Date },
  endTime: { type: Date },
  category: { type: String, trim: true, required: true },
  subCategory: { type: String, trim: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  notes: { type: String, trim: true },
  media: { type: String, trim: true },
  tags: { type: Array, trim: true }
},{
  timestamps: true
});


module.exports = mongoose.model('Tick', tickSchema);
