const mongoose = require('mongoose');

/*
 * KEY
 *
 * host:          The user who created the event.
 * attendee:      The confirmed user who has been chosen to attend the event.
 * interested:    An array of users who are interested in attending the event
                  but have not been confirmed by the host .
 * notInterested: An array of users who are not interested in attending.
 */

const eventSchema = new mongoose.Schema({
  startTime: { type: Date },
  endTime: { type: Date },
  category: { type: String, trim: true, required: true },
  subCategory: { type: String, trim: true, required: true },
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  notes: { type: String, trim: true, required: true },
  media: { type: String, trim: true, required: true },
  tags: { type: Array, trim: true, required: true }
},{
  timestamps: true
});


module.exports = mongoose.model('Tick', tickSchema);
