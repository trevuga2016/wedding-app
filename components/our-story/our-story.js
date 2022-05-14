import { Grid, Typography } from '@mui/material';
import Head from 'next/head';

export const OurStory = () => {
  return(
    <>
    <Head>
      <title>Rebecca & Trevor | Our Story</title>
      <link rel="icon" href="/marriage.ico" />
    </Head>
    <Grid container direction="column" alignItems="center">
      <Grid item pb={2}>
        <Typography variant="h6">Our Story</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">Coming Soon!</Typography>
      </Grid>
    </Grid>
    </>
  );
}

export default OurStory;

OurStory.displayName = 'OurStory';