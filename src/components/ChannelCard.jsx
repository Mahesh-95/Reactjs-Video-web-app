import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia, CardActions, IconButton } from "@mui/material"
import { Favorite, Share } from "@mui/icons-material"

const ChannelCard = ({channelDetail: {snippet}}) => {
  return (
    <Card>
        <CardMedia
        component="img"
        height="194"
        image={snippet?.thumbnails?.high?.url}
        alt="Paella dish"
        />
        <CardContent sx={{display: 'flex', justifyContent: 'between', alignItems: 'center'}}>
                <CardMedia
                component="img"
                sx={{ width: 100, borderRadius: '50%' }}
                image={snippet?.thumbnails?.high?.url}
                alt="Live from space album cover"
            />
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ChannelCard