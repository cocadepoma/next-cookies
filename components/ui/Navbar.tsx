import React from 'react'
import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { MenuOutlined as MenuOutlinedIcon } from '@mui/icons-material';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>

        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Typography variant="h6" color="white">CookieMaster</Typography>
          </Link>
        </NextLink>

        <div style={{ flex: 1 }} />
        <NextLink href="theme-changer" passHref legacyBehavior>
          <Link>
            <Typography variant="h6" color="white">Change theme</Typography>
          </Link>
        </NextLink>

      </Toolbar>
    </AppBar>
  )
}
