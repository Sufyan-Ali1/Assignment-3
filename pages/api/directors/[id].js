import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  try {
    const { db } = await connectToDatabase();
    const director = await db
      .collection('directors')
      .aggregate([
        { $match: { _id: new ObjectId(id) } },
        {
          $lookup: {
            from: 'movies',
            localField: '_id',
            foreignField: 'directorId',
            as: 'movies',
          },
        },
      ])
      .toArray();
    if (!director.length) {
      return res.status(404).json({ message: 'Director not found' });
    }
    res.status(200).json(director[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}