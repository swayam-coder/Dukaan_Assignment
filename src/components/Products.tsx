import { Box, Grid, Typography } from '@mui/material'
import { productDetails } from '../data'
import Product from './Product';

export default function Products() {
    return (
        <Box sx={{ padding: "100px 180px" }}>
            <Typography variant="h4" sx={{ fontSize: "36px" }}>Try our other free products</Typography>
            <Grid container sx={{ margin: "50px auto" }} spacing={3}>
                {
                    productDetails.map(({ id, title, description, image }) => (
                        <Product productInfo={{ id, title, description, image }} />
                    ))
                }
            </Grid>
        </Box>
    )
}