import { Box } from '@mui/material'
import { styled } from '@mui/system'
// import React from 'react'
const CustomBlurBox=styled(Box)`
backdrop-filter: blur(9px);
-webkit-backdrop-filter: blur(7.3px);
    width:100%;
    position: absolute;
    font-weight:900;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom:0;
    height:55px;
    border-radius:5px
`

const CardContent = () => {
  return (
    <Box position={"relative"}>
        <Box sx={{height:"55px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.;l,srthpmodetjh Quam adipisci, minima quaerat! Obcaecati?</Box>
        <CustomBlurBox>
            Compeleted
        </CustomBlurBox>
    </Box>
  )
}

export default CardContent