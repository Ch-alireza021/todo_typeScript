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
// import React from "react";

const CustomBox = styled(Box)`
  display: flex;
  gap: 5px;
  font-size: 10px;
  align-items: center;
`;

interface CardHeadertype {
  data: TodoType;
  isDone: boolean;
  onChangeIsDone: (id: string) => void;
  onDelete: (id: string) => void;
  onEdite: (id: string) => void;
}

const CardHeader: FC<CardHeadertype> = ({
  data,
  onChangeIsDone,
  isDone,
  onDelete,
  onEdite,
}) => {
  console.log(data);
  const { title, dueDate, edited, id } = data;
  const date = showDate(dueDate);

  return (
    <Flexrow>
      <CustomBox>
        <FormControlLabel
          value="start"
          control={
            <Checkbox
              size="small"
              checked={isDone}
              onChange={() => onChangeIsDone(id)}
            />
          }
          label={title}
          labelPlacement="start"
        />
        {edited && <Typography>Edited</Typography>}

        <CustomIconButton onClick={() => onEdite(id)}>
          <EditIcon sx={{ fontSize: "15px" }} />
        </CustomIconButton>
        <CustomIconButton onClick={() => onDelete(id)}>
          <DeleteIcon sx={{ fontSize: "15px" }} />
        </CustomIconButton>
      </CustomBox>
      <Typography>{date}</Typography>
    </Flexrow>
  );
};

export default CardHeader;
