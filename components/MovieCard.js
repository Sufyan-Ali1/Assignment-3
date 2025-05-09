import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.poster || '/placeholder.jpg'}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
        <Button size="small" component={Link} href={`/movies/${movie._id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}