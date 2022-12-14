import { Box, Grid, Typography } from '@mui/material'
import { productDetails } from '../data'
import { ProductContainer } from '../styled-components/Box';
import { ProductTitle } from '../styled-components/Typography';
import Product from './Product';

export default function Products() {
    return (
        <ProductContainer sx={{ padding: "100px 180px" }}>
            <ProductTitle variant="h4" sx={{ fontSize: "36px" }}>Try our other free products</ProductTitle>
            <Grid container sx={{ margin: "50px auto" }} spacing={0} rowSpacing={3}>
                {
                    productDetails.map(({ id, title, description, image }) => (
                        <Product productInfo={{ id, title, description, image }} />
                    ))
                }
            </Grid>
        </ProductContainer>
    )
}