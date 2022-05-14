import { Typography } from '@mui/material';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

export const Header = ({ title }) => {

  const router = useRouter();

  return(
    <Typography className={styles["header"]} onClick={() => router.push('/')}>{title}</Typography>
  );
}

export default Header;

Header.displayName = 'Header';