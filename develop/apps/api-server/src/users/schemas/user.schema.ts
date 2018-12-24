import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    fullName: {
      required: false,
      type: String,
    },
    displayName: {
      required: false,
      type: String,
    },
    acceptedTerms: {
      required: true,
      type: Boolean,
    },
    acceptedTermsAt: {
      required: false,
      type: String,
    },
    firstName: {
      required: false,
      type: String,
    },
    lastName: {
      required: false,
      type: String,
    },
    roles: {
      required: false,
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
