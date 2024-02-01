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
  // ---------------------------------------------
  //                HANDLEPAGE
  const handlePage = (page: number) => {
    setPage(page);
  };
  // ---------------------------------------------
  // Separate data based on each page
  const dataOfpage = (todos: TodoType[], page: number) => {
    const sortData=todos?.sort((a,b)=>+(a.duedate) - +(b.duedate))
    console.log(sortData);
    const data = todos?.slice((page - 1) * 5, page * 5);
    return data;
  };

  return (
    <FlexColumn>
      {dataOfpage(todos, page)?.map((todo: TodoType) => (
        <Card data={todo} key={todo.id} />
      ))}
      <Paginate length={todos?.length} page={{ page, handlePage }} />
    </FlexColumn>
  );
};

export default Home;
