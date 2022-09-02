import { Box, useTheme } from '@mui/material'
import React from 'react'
import UsageCard from './UsageCard';
import { UsageContainer } from '../styled-components/Usage';
import { cardInfo } from '../data';

export default function Usage() {
    const { palette: { secondary } } = useTheme()
    return (
        <Box sx={{ height: "400px", backgroundColor: secondary.light }}>
            <UsageContainer>
                {cardInfo.map(({ id, path, alt, headingText, content }) => (
                    <UsageCard 
                        key={id}
                        image={path} 
                        alt={alt} 
                        headingText={headingText} 
                        content={content}
                    />
                ))}
            </UsageContainer>
        </Box>
    )
}