import { useQuery } from "@tanstack/react-query";
import Card from "../components/widget/card/Card";
import api from "../api/api";
import { FlexColumn } from "../styles/creatStyle";
import Paginate from "../components/pagination/paginate";
import { useState } from "react";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  duedate: string;
  isDone: boolean;
  edited: string | undefined;
}

const Home = () => {
  const [page, setPage] = useState(1);
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await api.get("todo");
      return data.data;
    },
  });
  const handlePage = (page: number) => {
    setPage(page);
  };

  return (
    <FlexColumn>
      {todos?.map((todo: TodoType) => (
        <Card data={todo} key={todo.id} />
      ))}
      <Paginate length={todos?.length} page={{ page, handlePage }} />
    </FlexColumn>
  );
};

export default Home;
