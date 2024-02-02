import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";
import { Flexrow } from "../../../styles/creatStyle";
const CustomBlurBox = styled(Box)`
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 5px;
`;

interface Content {
  data: { description: string; isDone: boolean };
}

const CardContent: FC<Content> = ({ data }) => {
  return (
    <Box>
      {data.isDone ? (
        <CustomBlurBox>
          Compeleted
        </CustomBlurBox>
      ) : (
        <Flexrow sx={{ height: "55px" }}>{data.description}</Flexrow>
      )}
    </Box>
  );
};

export default CardContent;
