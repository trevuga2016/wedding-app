import '../styles/globals.css'
import { Grid, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
    <Grid container direction="row" position="fixed" top={0} bottom="auto">
      <Grid item xs={6} sx={{transform: 'scaleY(-1)'}}>
        <Image src="/hydrangeas.png" width={500} height={317}/>
      </Grid>
      <Grid item xs={6} justifyContent="right" sx={{transform: 'rotate(180deg)'}}>
        <Image src="/hydrangeas.png" width={500} height={317}/>
      </Grid>
    </Grid>
    <Component {...pageProps} />
    <Grid container direction="row" position="fixed" top="auto" bottom={0}>
      <Grid item xs={6}>
        <Image src="/hydrangeas.png" width={500} height={317}/>
      </Grid>
      <Grid item xs={6} justifyContent="right" sx={{transform: 'scaleX(-1)'}}>
        <Image src="/hydrangeas.png" width={500} height={317}/>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default MyApp
