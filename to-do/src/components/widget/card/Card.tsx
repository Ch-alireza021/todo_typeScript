import React, { FC, useState } from "react";

import { Box, styled } from "@mui/material";
import { ThemeContext } from "@emotion/react";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import { TodoType } from "../../../page/Home";

const CustomBox = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding: 5px 10px;
`;

interface CardProps {
  data: TodoType;
}

const Card: FC<CardProps> = ({ data }) => {
  const mode = React.useContext(ThemeContext).palette.mode;
  const [isDone, setIsDone] = useState(data?.isDone);
  const handleChangeIsDone = () => {
    setIsDone((prev) => !prev);
  };
  console.log(isDone);

  return (
    <CustomBox sx={{ background: mode === "dark" ? "#197f754f" : "#0300024f" }}>
      <CardHeader
        data={data}
        onChangeIsDone={handleChangeIsDone}
        isDone={isDone}
      />
      <CardContent data={{ description: data?.description, isDone: isDone }} />
    </CustomBox>
  );
};

export default Card;
