import { Box, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/logo.png';
import sideNavToggle from '../assets/icons/sideNavToggle.svg';
import overviewIcon from '../assets/icons/overview.svg';
import cheronRight from '../assets/icons/cheronRight.svg';

interface SidebarItemProps {
  icon: string;
  label: string;
  path: string;
  isActive: boolean;
  notification?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  path,
  isActive,
  notification,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        cursor: 'pointer',
        borderLeft: isActive ? '3px solid #ffffff' : '3px solid #363740',
        background: isActive ? '#DBDADE08' : '#363740',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box component="img" src={icon} />
        <Typography>{label}</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        {notification && (
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#7367F0',
              borderRadius: '100%',
              padding: '4px',
              height: '14px',
              width: '14px',
              fontSize: '12px',
            }}
          >
            {notification}
          </Typography>
        )}
        <Box component="img" src={cheronRight} />
      </Box>
    </Box>
  );
};
const Sidebar = () => {
  const navItems = [
    {
      icon: overviewIcon,
      label: 'Overview',
      path: '/',
      isActive: true,
    },
    {
      icon: overviewIcon,
      label: 'Products',
      path: '/',
      isActive: false,
    },
    {
      icon: overviewIcon,
      label: 'Orders',
      path: '/',
      isActive: false,
      notification: 20,
    },
    {
      icon: overviewIcon,
      label: 'Reports',
      path: '/',
      isActive: false,
    },
    {
      icon: overviewIcon,
      label: 'Settings',
      path: '/',
      isActive: false,
    },
    {
      icon: overviewIcon,
      label: 'Administration',
      path: '/',
      isActive: false,
    },
    {
      icon: overviewIcon,
      label: 'Maintenance',
      path: '/',
      isActive: false,
    },
    {
      icon: overviewIcon,
      label: 'Help',
      path: '/',
      isActive: false,
    },
  ];
  return (
    <Box
      sx={{
        height: '100vh',
        width: 255,
        backgroundColor: '#363740',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0',
        color: '#ffffff',
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          gap: '20px',
        }}
      >
        <Box
          component="img"
          sx={{
            width: '24px',
          }}
          alt="Logo"
          src={sideNavToggle}
        />
        <Box
          component="img"
          sx={{
            width: '100%',
          }}
          alt="Logo"
          src={Logo}
        />
      </Box>

      {/* Sidebar Navs */}
      <Box
        sx={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {navItems.map((item: Record<string, any>) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isActive={item.isActive}
            notification={item?.notification}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
