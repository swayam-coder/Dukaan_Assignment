import { Typography, useTheme } from '@mui/material'
import React from 'react'
import { UsageCardDesc } from '../styled-components/Typography';
import { UsageCardContainer } from '../styled-components/Usage';

export default function UsageCard({ id, image, alt, headingText, content }: any) {
    const { palette: { secondary } } = useTheme()
    return (
        <UsageCardContainer key={id}>
            <img src={image} alt={alt} />
            <Typography variant="h6">{headingText}</Typography>
            <UsageCardDesc>{content}</UsageCardDesc>
        </UsageCardContainer>
    )
}
