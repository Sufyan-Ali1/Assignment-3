import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  try {
    const { db } = await connectToDatabase();
    const movies = await db.collection('movies').find({ genreId: new ObjectId(id) }).toArray();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}