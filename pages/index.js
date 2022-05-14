import Head from 'next/head';
import Image from 'next/image';
import { Button, Grid, Typography } from "@mui/material";
import { Countdown } from "../components/countdown";
import styles from './../styles/home.module.scss';

export const Home = () => {

  return(
    <>
      <Head>
        <title>Rebecca & Trevor</title>
        <link rel="icon" href="/marriage.ico" />
      </Head>
      <Grid container direction="column" className={styles["container"]}>
        <Grid item>
          <Typography className={styles["container__header"]}>Rebecca & Trevor</Typography>
        </Grid>
        <Grid item className={styles["container__main-pic"]}>
          <Image src="/trebecca1.png" width={410} height={615} layout="responsive" />
        </Grid>
        <Grid item pt={2}>
          <Button variant="outlined">Enter Here</Button>
        </Grid>
          <Countdown />
      </Grid>
    </>
  );
}

export default Home;

Home.displayName = 'Home';
