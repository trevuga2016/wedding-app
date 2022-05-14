import { Grid, Typography } from '@mui/material';
import LocationMap from '../location-map/location-map';

export const WeddingDetails = () => {
  return(
    <Grid container direction="column" alignItems="center">
      <Grid item pb={2}>
        <Typography variant="h6">Wedding Details</Typography>
      </Grid>
      <Grid item>
        <LocationMap />
      </Grid>
    </Grid>
  );
}

export default WeddingDetails;

WeddingDetails.displayName = 'Wedding Details';