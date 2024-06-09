import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginations = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={5} color="primary"  sx={{color: 'white'}}/>
    </Stack>
  );
}

export { Paginations }