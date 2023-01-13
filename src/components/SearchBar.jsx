import React, {useState} from 'react';
import {Input, IconButton, Paper} from '@mui/material';
import {Search } from '@mui/icons-material';


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const onhandleSubmit = () => {

    }

  return (
    <Paper
        component='form'
        onSubmit={onhandleSubmit}
        sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
        <Input type='text' placeholder='Search...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        <IconButton type='submit' sx={{ p: '10px', color: '#1976D2' }} aria-label='search'>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar