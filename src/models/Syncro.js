import mongoose from 'mongoose';

const syncroSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  state: { type: Boolean, required: true },
});

export default mongoose.model('Syncro', syncroSchema);
