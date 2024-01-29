import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomIconButton, Flexrow } from "../../../styles/creatStyle";
// import React from "react";

const CustomBox = styled(Box)`
  display: flex;
  gap: 5px;
  font-size: 10px;
  align-items: center;
`;


const CardHeader = () => {
  console.log("cardheader");
  const date = new Date().toISOString();
  console.log(date);
  return (
    <Flexrow >
      <CustomBox >
        <FormControlLabel
          value="start"
          control={<Checkbox size="small"/>}
          label="title"
          labelPlacement="start"
        />
        <Typography>Edited</Typography>

        <CustomIconButton >
          <EditIcon sx={{fontSize:"15px"}} />
        </CustomIconButton>
        <CustomIconButton >
          <DeleteIcon sx={{fontSize:"15px"}} />
        </CustomIconButton>
      </CustomBox>
      <Typography>{date}</Typography>
    </Flexrow>
  );
};

export default CardHeader;
