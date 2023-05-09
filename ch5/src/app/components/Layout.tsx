import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
const Layout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Content Area */}
      <Box>
        {/* Navigation bar */}

        {/* Maain */}
      </Box>
    </Box>
  );
};

export default Layout;
