import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material"
import ReactTimeAgo from 'react-time-ago'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0, mb: '1rem' }}>
         <Link to={`/video/${videoId}`}>
        <CardMedia
        component="img"
        width="320"
        height="194"
        image={snippet?.thumbnails?.high?.url}
        alt="Paella dish"
        sx={{borderRadius: "10px", width: {sm:'100%'}}}
        />
        </Link>
        
        <CardContent>
            <Link to={`/video/${videoId}`}>
            <Typography variant="body2" color="text.secondary">
            {snippet?.title?.slice(0, 60)}
            </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary" sx={{fontSize: '18px',fontWeight: 600, color: '#000', mt: '0.5rem'}}>
            {snippet?.channelTitle?.slice(0, 30)}
            </Typography>
            <Box sx={{mt: '0.5rem'}}>
                <span className='time-ago'><ReactTimeAgo date={new Date(snippet.publishTime).getTime()} locale="en-US"/></span>
            </Box>
        </CardContent>
        
    </Card>
  )
}

export default VideoCard