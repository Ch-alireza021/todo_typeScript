import React  from 'react'

import {  Box, styled } from "@mui/material"
import { ThemeContext } from '@emotion/react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
const CustomBox=styled(Box)`
box-sizing: border-box;
width: 100%;
height: 100px;
border-radius: 10px;
padding: 5px 10px;
`

const Card = () => {
    const mode=React.useContext(ThemeContext).palette.mode
    console.log(mode);
  return (
    <CustomBox sx={{background:mode==="dark"? "#197f754f":"#0300024f"}}>
        <CardHeader/>
        <CardContent/>
    </CustomBox>
  )
}

export default Card