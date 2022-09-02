import { Box, Button, ButtonGroup, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react';
import Logo from "../assets/logo/white.svg";
import { DownloadBtn, SignInBtn } from '../styled-components/Buttons';
import { HeaderContainer, LogoImage } from '../styled-components/Header';

export default function Header() {
  const { palette: { primary } } = useTheme();

  return (
    <Box sx={{ backgroundColor: '#146EB4', height: 328 }}>
      <HeaderContainer>
        <LogoImage src={Logo} alt="dukaan_logo" />
        <Box sx={{ transform: "translate(-85%, 100%)" }}>
          <SignInBtn variant="text">Sign In</SignInBtn>
          <DownloadBtn variant="contained" size='large'>Dukaan for PC</DownloadBtn>
        </Box>
      </HeaderContainer>
    </Box>
  )
}
