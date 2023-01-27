import React, {useState} from 'react'
import {Stack, Box, Typography, Alert, AlertTitle} from '@mui/material'
import Sidebar from '../components/Sidebar'
import Videos from '../components/Videos';
import { useFetchVideoData } from '../hooks/UseFetchedVideosData';
import Loader from '../components/Loader';
import { LocalDiningRounded } from '@mui/icons-material';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const {isLoading, data, isError, error} = useFetchVideoData(['videos', selectedCategory],`search?part=snippet&q=${selectedCategory}`)

  // if(isLoading){
  //   return <Loader />
  // }

  if(isError){
    return (
      <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error.message}
    </Alert>
    )
  }
  
  return (
    <Stack sx={{flexDirection: {sx:"column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#1976D2", }}>
          Copyright &#169; 2023 MyTube
        </Typography>
      </Box>
      <Box sx={{overflowY: 'auto', height: '92vh', pt: "1rem", width:"100%"}}>
      {isLoading? 
      <Box sx={{height: '92vh', width:"100%", display:'flex', justifyContent:"center", alignItems:"center"}}>
      <Loader />
      </Box>
      :
      <>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{mr:'1rem'}}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={data} />
        </>
        }
      </Box>
    </Stack>
  )
}

export default Home