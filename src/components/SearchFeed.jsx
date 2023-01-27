import {lazy} from 'react'
import { useParams } from 'react-router-dom'
import {Box, Typography, Alert, AlertTitle} from '@mui/material'
import { useFetchVideoData } from '../hooks/UseFetchedVideosData';
import Loader from '../components/Loader';

const Videos = lazy(()=> import('./Videos'))

const SearchFeed = () => {
    const {searchInput} = useParams()

    const {isLoading, data, isError, error} = useFetchVideoData(['videos', searchInput],`search?part=snippet&q=${searchInput}`)

    if(isLoading){
        return <Loader />
      }
    
      if(isError){
        return (
          <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error.message}
        </Alert>
        )
      }

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="#000" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchInput}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={data} />}
      </Box>
    </Box>
  )
}

export default SearchFeed