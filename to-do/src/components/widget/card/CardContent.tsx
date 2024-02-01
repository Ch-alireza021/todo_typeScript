import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";
const CustomBlurBox = styled(Box)`
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(7.3px);
  width: 100%;
  position: absolute;
  font-weight: 900;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 55px;
  border-radius: 5px;
`;

interface Content {
  data: { description: string; isDone: boolean };
}

const CardContent: FC<Content> = ({ data }) => {
  return (
    <Box position={"relative"}>
      <Box sx={{ height: "55px" }}>{data.description}</Box>
      <CustomBlurBox sx={{display:data.isDone ? "flex" :"none"}}>Compeleted</CustomBlurBox>
    </Box>
  );
};

export default CardContent;
