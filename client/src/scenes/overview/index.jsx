import React, { useState } from 'react';
import { FormControl, InputLabel, Box, Select, MenuItem } from '@mui/material';
import Header from 'components/Header';
import OverviewChart from 'components/OverviewChart';

const Overview = () => {
  const [view, setView] = useState('units');

  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='OVERVIEW' subtitle='Overview of revenue and profit' />
      <Box height='75vh'>
        <FormControl sx={{ mt: '1.rem' }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label='View'
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value='sales'>Sales</MenuItem>
            <MenuItem value='units'>Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
