import { Box, IconButton, styled } from "@mui/material";

export const CustomIconButton=styled(IconButton)`
    width: 20px;
    height: 20px;
`

export const Flexrow=styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const FlexColumn=styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:column;
    gap:1.5rem;
`