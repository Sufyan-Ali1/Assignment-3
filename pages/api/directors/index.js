import { connectToDatabase } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { db } = await connectToDatabase();
    const directors = await db
      .collection('directors')
      .aggregate([
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
    res.status(200).json(directors);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}