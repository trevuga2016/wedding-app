import Head from 'next/head';
import Image from 'next/image';
import { Button, Grid } from '@mui/material';
import { Countdown } from '../components/countdown/countdown';
import styles from './../styles/home.module.scss';
import { useRouter } from 'next/router';
import Header from '../components/header/header';

export const Main = () => {

  const router = useRouter();

  return(
    <>
      <Head>
        <title>Rebecca & Trevor</title>
        <link rel="icon" href="/marriage.ico" />
      </Head>
      <Grid container direction="column" className={styles["container"]}>
        <Grid item>
          <Header title="Rebecca & Trevor" />
        </Grid>
        <Grid item className={styles["container__main-pic"]}>
          <Image src="/trebecca1.png" width={410} height={615} layout="responsive" />
        </Grid>
        <Grid item pt={2}>
          <Button variant="outlined" className={styles["container__button"]} onClick={() => router.push('/home')}>Enter Here</Button>
        </Grid>
        <Grid item>
          <Countdown />
        </Grid>
      </Grid>
    </>
  );
}

export default Main;

Main.displayName = 'Main';
