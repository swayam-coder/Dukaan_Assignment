import { Box } from '@mui/system'
import React from 'react'
import { FooterContainer } from '../styled-components/Box'
import { IndianFlagImg, LogoImageForFooter } from '../styled-components/Footer'
import Logo from "../assets/logo/white.svg";
import { Badge, Grid, Link, Typography, useTheme } from '@mui/material';
import { FooterBadge } from '../styled-components/Buttons';
import { FooterLinks } from '../data';
import { FooterDivider } from '../styled-components/Divider';
import IndianFlag from "../assets/Group.png"

export default function Footer() {
    return (
        <Box sx={{ height: "350px" }}>
            <FooterContainer container>
                <Grid item xs={3}>
                    <LogoImageForFooter src={Logo} alt="dukaan_logo" />
                </Grid>
                <Grid item xs={9} sx={{ padding: '5% 5% 0.5% 5%' }}>
                    <Grid container spacing={2} columns={15}>
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
                </Grid>
                <Grid item xs={12}>
                    <FooterDivider top='-10px'/>
                    <Box sx={{ margin: "auto", width: "80%", display: "flex", justifyContent: 'space-between' }}>
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>Dukaan 2020, All rights reserved.</Typography>
                        <Typography variant="subtitle2" sx={{ color: 'white' }}>Made in <IndianFlagImg src={IndianFlag} alt="indian-flag"></IndianFlagImg></Typography>
                    </Box>
                </Grid>
            </FooterContainer>
        </Box> 
    )
}