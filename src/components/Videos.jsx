import React from 'react'
import { Stack, Box } from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {
  return (
    <Stack direction="row" display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="start">
        {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos