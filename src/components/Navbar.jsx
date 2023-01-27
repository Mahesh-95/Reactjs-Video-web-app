import React, {useState} from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Link} from '@mui/material';
import {Menu, SlowMotionVideoRounded, WbSunnyOutlined, DarkModeOutlined } from '@mui/icons-material';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [theme, setTheme] = useState(true)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky'>
        <Toolbar> 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Link href='/' color="inherit">
          <SlowMotionVideoRounded />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} ml="0.2rem" 
          > <Link href='/' color="inherit">
             MyTube
            </Link>
          </Typography>
          
          <SearchBar />
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>setTheme(prev => !prev)}
          >
            {theme? <WbSunnyOutlined /> : <DarkModeOutlined/>}
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}