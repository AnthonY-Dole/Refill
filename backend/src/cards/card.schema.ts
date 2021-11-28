import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  name: String,
  date: String,
  activationCode: Number,
  color: String,
  credit: String,
});
