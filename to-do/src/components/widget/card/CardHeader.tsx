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
import { showDate } from "../../../feature/date/date";
import { TodoType } from "../../../page/Home";
import { FC } from "react";
import { Check } from "@mui/icons-material";
// import React from "react";

const CustomBox = styled(Box)`
  display: flex;
  gap: 5px;
  font-size: 10px;
  align-items: center;
`;

interface CardHeadertype {
  data: TodoType;
  onChangeIsDone:()=>void;
  isDone:boolean
}

const CardHeader: FC<CardHeadertype> = ({ data ,onChangeIsDone,isDone}) => {
  const { title, duedate, edited } = data;
  const date = showDate(duedate);
 

  return (
    <Flexrow>
      <CustomBox>
        <FormControlLabel
          value="start"
          control={<Checkbox size="small" checked={isDone} onChange={onChangeIsDone} />}
          label={title}
          labelPlacement="start"
        
        />
        {edited && <Typography>Edited</Typography>}

        <CustomIconButton>
          <EditIcon sx={{ fontSize: "15px" }} />
        </CustomIconButton>
        <CustomIconButton>
          <DeleteIcon sx={{ fontSize: "15px" }} />
        </CustomIconButton>
      </CustomBox>
      <Typography>{date}</Typography>
    </Flexrow>
  );
};

export default CardHeader;
