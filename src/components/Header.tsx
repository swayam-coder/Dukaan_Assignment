import { Box, Button, ButtonGroup, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react';
import Logo from "../assets/logo/white.svg";
import { HeaderButtons } from '../styled-components/Box';
import { DownloadBtn, SignInBtn } from '../styled-components/Buttons';
import { HeaderContainer, HeaderWrapper } from '../styled-components/Header';

export default function Header() { 
  return ( 
    <HeaderWrapper>
      <HeaderContainer>
        <img src={Logo} alt="dukaan_logo" />
        <HeaderButtons>
          <SignInBtn variant="text">Sign In</SignInBtn>
          <DownloadBtn variant="contained" size='large'>Dukaan for PC</DownloadBtn>
        </HeaderButtons>
      </HeaderContainer>
    </HeaderWrapper>
  )
}