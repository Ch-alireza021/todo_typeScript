import React, { FC, useState } from "react";

import { Box, styled } from "@mui/material";
import { ThemeContext } from "@emotion/react";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import { TodoType } from "../../../page/Home";
import api from "../../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../config/router/routerConfig";

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
  const queryClient = useQueryClient();
  const navigate=useNavigate()
  const mode = React.useContext(ThemeContext).palette.mode;
  const [isDone, setIsDone] = useState(data?.isDone);
  const handleChangeIsDone = async (id: string) => {
    setIsDone((prev) => !prev);
    try {
      console.log(isDone);
      const res = await api.patch(`todo/${id}`, { isDone: !isDone });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
// --------------------------------------------------------------
//                             DELETE
  const mutation = useMutation({
    mutationFn: (id: string) => api.delete(`todo/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      console.log("delete successfully");
    },
    onError: (error: any) => {
      console.error("delete error", error.message);
    },
  });

  const handleDelete = async (id: string) => {
    mutation.mutate(id);
  };
// --------------------------------------------------------------
//                              EDITE
const handleEdite=(id:string)=>{
navigate(`${PATH.TODO}?id=${id}`)
}
// --------------------------------------------------------------


  return (
    <CustomBox sx={{ background: mode === "dark" ? "#197f754f" : "#0300024f" }}>
      <CardHeader
        data={data}
        onChangeIsDone={handleChangeIsDone}
        isDone={isDone}
        onDelete={handleDelete}
        onEdite={handleEdite}
      />
      <CardContent data={{ description: data?.description, isDone: isDone }} />
    </CustomBox>
  );
};

export default Card;
