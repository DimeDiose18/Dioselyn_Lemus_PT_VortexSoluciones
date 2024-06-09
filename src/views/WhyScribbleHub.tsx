import { Grid } from '@mui/material';
import { Why } from '../components/Why'
import Slide from '../components/Slide';

const WhyScribbleHub = () => {
  return (
    <div className="h-[100%] w-[100%] flex">
      <Grid container spacing={1} className='my-20'>
        <Grid item xs={12} md={12} lg={12} xl={12}>
           <Why />
        </Grid>
      </Grid>
      <Slide />
    </div>
  )
}

export { WhyScribbleHub }