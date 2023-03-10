import { Stack, Box } from "@mui/material";
import React from "react";
import ChannelCard from './ChannelCard'
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({ videos ,direction}) => {
  if (!videos?.length) return <Loader/>;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      alignItems="space-evenly"
      gap={1}
      rowGap={3}
      sx={{ justifyContent: { xs: "center", md: "space-evenly" } }}
      
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
