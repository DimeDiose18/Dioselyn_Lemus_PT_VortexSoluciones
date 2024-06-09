import { Hero } from '../components/Hero';
import { Slider } from '../components/Slider';
import { Grid } from '@mui/material';
import { Info } from '../components/Info';
import { Membership } from '../components/Membership';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <section className='m-0 h-[100%]'>
      <Hero />
      <Grid container spacing={1} className='my-20'>
        <Grid item xs={12} md={12} lg={12} xl={12}>
           <Slider />
        </Grid>
      </Grid>
      <Info />
      <Membership />
      <Newsletter />
    </section>
  );
};

export { Home }
