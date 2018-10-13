import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: Number,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
