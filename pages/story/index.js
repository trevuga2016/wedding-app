import { Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Header from '../../components/header/header';
import styles from '../../styles/home.module.scss';
import TabNav from '../../components/tab-nav/tab-nav';

export const Story = () => {
  return(
    <>
      <Head>
        <title>Rebecca & Trevor | Our Story</title>
        <link rel="icon" href="/marriage.ico" />
      </Head>
      <Grid container direction="column" className={styles["container"]} top="25% !important">
        <Grid item>
          <Header title="Rebecca & Trevor" />
        </Grid>
        <Grid item>
          <TabNav initValue={1} />
        </Grid>
        <Grid item py={2}>
          <Typography variant="h4">Our Story</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Story;

Story.displayName = 'Story';