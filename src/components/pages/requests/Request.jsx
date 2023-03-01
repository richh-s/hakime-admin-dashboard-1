import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WithdrawalRequests from './tabs/withdrawalRequests';
import RefundRequests from './tabs/refundRequests';
import Layout from '../Layout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function RequestTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs centered value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example" textColor='primary' indicatorColor='primary'
  >
          <Tab label="Withdrawal requests" {...a11yProps(1)} />
          <Tab label="Refund requests" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <WithdrawalRequests/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RefundRequests/>
      </TabPanel>
    </Box>
    </Layout>
  );
}