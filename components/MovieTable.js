import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import Link from 'next/link';

export default function MovieTable({ movies }) {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie._id}>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>{movie.genre}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>
                <Link href={`/movies/${movie._id}`}>View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}