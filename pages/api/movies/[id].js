import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  try {
    const { db } = await connectToDatabase();
    const movie = await db.collection('movies').findOne({ _id: new ObjectId(id) });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}