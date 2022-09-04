import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductGrid } from '../styled-components/Grid'

export default function Product({ productInfo: { id, title, description, image } }: any) {
    return (
        <ProductGrid item lg={4} md={6} sm={12} xs={12} key={id}>  
            <Card sx={{ maxWidth: 345 }} elevation={0}> 
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ProductGrid>
    )
}