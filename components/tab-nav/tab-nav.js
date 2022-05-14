import { Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';

export const TabNav = ({ initValue }) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(initValue);
  }, [initValue])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <Tabs value={value} onChange={() => handleChange} centered>
        <Tab label="Home" href="/home" />
        <Tab label="Our Story" href="/story" />
        <Tab label="Photos" href="/photos" />
    </Tabs>
  );
}

export default TabNav;

TabNav.displayName = 'TabNav';