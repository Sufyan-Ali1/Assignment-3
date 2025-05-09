import { Container, Typography } from '@mui/material';
import MovieTable from '../components/MovieTable';
import { useTheme } from '../context/ThemeContext';

export default function Directors({ directors }) {
  const { darkMode } = useTheme();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Directors
      </Typography>
      {directors.map((director) => (
        <div key={director._id}>
          <Typography variant="h5" sx={{ mt: 3 }}>
            {director.name}
          </Typography>
          <MovieTable movies={director.movies} />
        </div>
      ))}
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/directors');
  const directors = await res.json();
  return { props: { directors, darkMode: false } };
}