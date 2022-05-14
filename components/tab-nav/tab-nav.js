import { Tab } from '@mui/material';
import { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WeddingDetails from '../wedding-details/wedding-details';
import OurStory from '../our-story/our-story';
import Photos from '../photos/photos';

export const TabNav = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <>
      <TabContext value={value}>
        <TabList onChange={handleChange} centered>
          <Tab label="Home" value="1" />
          <Tab label="Our Story" value="2" />
          <Tab label="Photos" value="3" />
        </TabList>
        <TabPanel value="1">
          <WeddingDetails />
        </TabPanel>
        <TabPanel value="2">
          <OurStory />
        </TabPanel>
        <TabPanel value="3">
          <Photos />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabNav;

TabNav.displayName = 'TabNav';