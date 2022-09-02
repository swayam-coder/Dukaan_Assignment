import { Box, Button, Grid, Pagination, TextField, Typography } from '@mui/material'
import { FormContainer, FormDiv, ResultDiv, ResultHeader } from '../styled-components/Box'
import { GenerateSloganBtn } from '../styled-components/Buttons'
import { FormDivider } from '../styled-components/Divider'
import { ResultGrid } from '../styled-components/Grid'
import { ResultItem } from '../styled-components/Paper'
import { FormDesc, FormTitle } from '../styled-components/Typography'
import results from "../data";

export default function Form() {
  return (
    <Box sx={{ height: "1280px", paddingBottom: "100px" }}>
        <FormContainer>
          <FormDiv>
            <FormTitle variant="h3">Free slogan maker</FormTitle>
            <FormDesc>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</FormDesc>
  
            <TextField
              id="outlined-required"
              label="Word for your slogan"
              defaultValue="cozy"
              type="search"
              sx={{
                display: 'block',
              }}
            />
            <GenerateSloganBtn variant="contained" size="large">Generate slogans</GenerateSloganBtn>
          </FormDiv>
          <FormDivider top="120px"/>
          <ResultDiv>
            <ResultHeader>
              <Typography variant="h6">We have generated 1,023 slogans for “cozy”</Typography>
              <Button variant="outlined" size="medium">Download All</Button>
            </ResultHeader>
            <ResultGrid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3  }}>
              {
                results.map((res) => (
                  <Grid key={res.id} item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ResultItem elevation={0} sx={{ textAlign: "left" }}>{res.data}</ResultItem>
                  </Grid>
                ))
              }
            </ResultGrid>
          </ResultDiv>
          <FormDivider top="-150px"/>
          <Pagination count={10} color="primary" size="small" sx={{ position: 'relative', top: "-130px" }}/>
        </FormContainer>
      </Box>
  )
}
