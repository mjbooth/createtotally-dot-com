'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';

interface WaveDividerProps {
    backgroundImage: string;
    heightBase: string;
    heightMd: string;
    rotation: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
    backgroundImage,
    heightBase,
    heightMd,
    rotation,
}) => {
    return (

        <Box
            width="100%"
            height={{ base: heightBase, md: heightMd }}
            backgroundImage={`url(${backgroundImage})`}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            transform={`rotate(${rotation})`}
        />

    );
};
