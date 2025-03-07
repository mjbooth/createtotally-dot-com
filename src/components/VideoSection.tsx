// src/components/VideoSection.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

// Dynamically import the Vimeo component
const VimeoPlayer = dynamic(() => import('@u-wave/react-vimeo'), {
  ssr: false,
});

interface VideoSectionProps {
  videoUrl: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl }) => {
  return (
    <Box
      w="full"
      maxW="6xl"
      mx="auto"
      overflow="hidden"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.900/10"
      position="relative"
      aspectRatio="16/9"
    >
      <VimeoPlayer
        video={videoUrl}
        responsive
        autoplay={false}
        loop
        controls
        muted
      />
    </Box>
  );
};
