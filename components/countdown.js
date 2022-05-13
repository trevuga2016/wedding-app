import { Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './countdown.module.scss';

const MS = 1000;
const ONE_HOUR = (60 * 60); // minutes * secs
const ONE_DAY = 24 * ONE_HOUR;

export const Countdown = () => {

  const [countdownTime, setCountdownTime] = useState(null);

  const convertTimeStamp = useCallback(({ timestamp }) => {
    const start = new Date(2023, 4, 21, 17, 0, 0);
    const today = new Date().getTime();
    if (start < today) {
      setCountdownTime({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        timestamp,
      });
      return;
    }
    const secondsRemaining = Math.abs(start - today) / MS;
    let secondsUntilEvent = secondsRemaining;
    // calculate (and subtract) whole days
    const days = Math.floor(secondsUntilEvent / ONE_DAY);
    secondsUntilEvent -= days * ONE_DAY;
    const hours = Math.floor(secondsUntilEvent / ONE_HOUR) % 24;
    secondsUntilEvent -= hours * ONE_HOUR;
    // calculate (and subtract) whole minutes
    const minutes = Math.floor(secondsUntilEvent / 60) % 60;
    secondsUntilEvent -= minutes * 60;
    const seconds = Math.floor(secondsUntilEvent % 60);
    setCountdownTime({
      days: zeroPrefixed({ value: days }),
      hours: zeroPrefixed({ value: hours }),
      minutes: zeroPrefixed({ value: minutes }),
      seconds: zeroPrefixed({ value: seconds }),
      timestamp
    });
  }, []);

  const countdown = useCallback(() => {
    const { timestamp } = countdownTime || {};
    convertTimeStamp({ timestamp })
  }, [convertTimeStamp, countdownTime]);

  useEffect(() => {
    if (!countdownTime) {
      return;
    }

    let interval = setInterval(countdown, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [countdown, countdownTime]);

  useEffect(() => {
    convertTimeStamp({ timestamp: 1684702800 });
  }, [convertTimeStamp]);

  const zeroPrefixed = ({ value }) => {
    return +value > 9 ? value : `0${value}`;
  };

  const { days, hours, minutes, seconds } = countdownTime || {};

  return (
      <Grid container direction="row" className={styles['countdown']} mt={2}>
        <Grid item xs={3} container direction="column" className={styles['countdown__digits']}>
          <Grid item>
            <Typography variant="subtitle">Days</Typography>
          </Grid>
          <Grid item>
            {days}
          </Grid>
        </Grid>
        <Grid item xs={3} container direction="column" className={styles['countdown__digits']}>
          <Grid item>
            <Typography variant="subtitle">Hours</Typography>
          </Grid>
          <Grid item>
            {hours}
          </Grid>
        </Grid>
        <Grid item xs={3} container direction="column" className={styles['countdown__digits']}>
          <Grid item>
            <Typography variant="subtitle">Minutes</Typography>
          </Grid>
          <Grid item>
            {minutes}
          </Grid>
        </Grid>
        <Grid item xs={3} container direction="column" className={styles['countdown__digits']}>
          <Grid item>
            <Typography variant="subtitle">Seconds</Typography>
          </Grid>
          <Grid item>
            {seconds}
          </Grid>
        </Grid>
      </Grid>
  );
};

Countdown.displayName = 'Countdown';
