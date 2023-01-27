import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Input, IconButton, Paper} from '@mui/material';
import {Search } from '@mui/icons-material';


const SearchBar = () => {
    const navigate = useNavigate()

    const [searchInput, setSearchInput] = useState('')

    const submitHandler = (e) => {
      e.preventDefault()
      if(searchInput) {
        navigate(`/search/${searchInput}`)
      }
    }

  return (
    <Paper
        component='form'
        onSubmit={submitHandler}
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