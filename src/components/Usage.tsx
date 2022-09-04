import { Box, useTheme } from '@mui/material'
import React from 'react'
import UsageCard from './UsageCard';
import { UsageContainer } from '../styled-components/Usage';
import { cardInfo } from '../data';

export default function Usage() {
    const { palette: { secondary } } = useTheme()
    return (
        <Box sx={{ backgroundColor: secondary.light }}>
            <UsageContainer container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4  }}>
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