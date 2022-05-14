import { Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Header from '../../components/header/header';
import styles from '../../styles/home.module.scss';
import TabNav from '../../components/tab-nav/tab-nav';

export const Home = () => {
  return(
    <>
      <Head>
        <title>Rebecca & Trevor | Home</title>
        <link rel="icon" href="/marriage.ico" />
      </Head>
      <Grid container direction="column" className={styles["container"]} top="25% !important">
        <Grid item>
          <Header title="Rebecca & Trevor" />
        </Grid>
        <Grid item>
          <TabNav initValue={0} />
        </Grid>
        <Grid item py={2}>
          <Typography variant="h4">Wedding Details</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Home;

Home.displayName = 'Home';