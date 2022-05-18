const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId, //Use Mongoose's ObjectId data type
      default: () => new Types.ObjectId //Default value is set to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      //280 character maximum
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema(
  {
    thougthText: {
      type: String,
      required: true,
      //Must be between 1 and 280 characters
    },
    username : {
      type: String,
      required: true
    },
    reactions: [ReactionSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;