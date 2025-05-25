import mongoose from 'mongoose';

const quickNoteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('QuickNote', quickNoteSchema);

