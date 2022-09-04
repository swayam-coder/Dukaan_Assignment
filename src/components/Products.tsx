import { Box, Grid, Typography } from '@mui/material'
import { productDetails } from '../data'
import { ProductContainer } from '../styled-components/Box';
import Product from './Product';

export default function Products() {
    return (
        <ProductContainer sx={{ padding: "100px 180px" }}>
            <Typography variant="h4" sx={{ fontSize: "36px", padding: "24px 0 0 24px" }}>Try our other free products</Typography>
            <Grid container sx={{ margin: "50px auto" }} spacing={3}>
                {
                    productDetails.map(({ id, title, description, image }) => (
                        <Product productInfo={{ id, title, description, image }} />
                    ))
                }
            </Grid>
        </ProductContainer>
    )
}