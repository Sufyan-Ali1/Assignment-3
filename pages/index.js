import { Container, Grid, Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { useTheme } from '../context/ThemeContext';

export default function Home({ movies }) {
  const { darkMode } = useTheme();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie._id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/movies');
  const movies = await res.json();
  return { props: { movies, darkMode: false } };
}