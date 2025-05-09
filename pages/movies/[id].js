import { Container, Typography, Paper } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';

export default function MovieDetails({ movie }) {
  const { darkMode } = useTheme();

  if (!movie) {
    return <Typography variant="h6">Movie not found</Typography>;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4">{movie.title}</Typography>
        <Typography variant="subtitle1">Year: {movie.year}</Typography>
        <Typography variant="subtitle1">Genre: {movie.genre}</Typography>
        <Typography variant="subtitle1">Director: {movie.director}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {movie.description}
        </Typography>
      </Paper>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/movies/${params.id}`);
  const movie = await res.json();
  return { props: { movie, darkMode: false } };
}