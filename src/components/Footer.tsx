import { Box } from '@mui/system'
import React from 'react'
import { FooterContainer } from '../styled-components/Box'
import { IndianFlagImg } from '../styled-components/Footer'
import Logo from "../assets/logo/white.svg";
import { Badge, Grid, Link, Typography, useTheme } from '@mui/material';
import { FooterBadge } from '../styled-components/Buttons';
import { FooterLinks } from '../data';
import { FooterDivider } from '../styled-components/Divider';
import IndianFlag from "../assets/Group.png"
import { FooterLinksGrid, FooterLogoGrid } from '../styled-components/Grid';

export default function Footer() {
    const theme = useTheme();

    return (
        <Box sx={{ height: "350px", backgroundColor: theme.palette.primary.dark }}> 
            <FooterContainer container>
                <FooterLogoGrid item xl={4} xs={12} sx={{ margin: 'auto' }}>
                    <img src={Logo} alt="dukaan_logo" className='footer_logo'/>
                </FooterLogoGrid>
                <FooterLinksGrid item xl={8} xs={12} sx={{ padding: '5% 5% 0.5% 5%' }}>
                    <Grid container columnSpacing={12} rowSpacing={2}>
                        {
                            FooterLinks.map((val) => (
                                <Grid key={val.id} item xs={3}>
                                    <Link  
                                        href={val.href} 
                                        sx={{ color: 'white' }}
                                    >
                                        {val.name}
                                    </Link>
                                    {val.meta && <FooterBadge badgeContent={val.meta}></FooterBadge>}
                                </Grid>
                            ))
                        }
                    </Grid>
                </FooterLinksGrid>
            </FooterContainer>
            <Grid container>
                <Grid item xs={12} sx={{ paddingTop: "30px" }}>
                    <FooterDivider top='-10px'/>
                    <Box sx={{ margin: "auto", width: "90%", display: "flex", justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>Dukaan 2020, All rights reserved.</Typography>
                        <Typography variant="subtitle2" sx={{ color: 'white' }}>Made in <IndianFlagImg src={IndianFlag} alt="indian-flag"></IndianFlagImg></Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box> 
    )
}