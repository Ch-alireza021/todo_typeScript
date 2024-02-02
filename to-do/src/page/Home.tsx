import { useQuery } from "@tanstack/react-query";
import Card from "../components/widget/card/Card";
import api from "../api/api";
import { FlexColumn } from "../styles/creatStyle";
import Paginate from "../components/pagination/paginate";
import { useState } from "react";
import setIsDone from "../feature/date/setIsDone";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  dueDate: string;
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
  const sortingData = () => {
    let expireDate: TodoType[] = [];
    let unExpireDate: TodoType[] = [];
    todos?.forEach((el: TodoType) => {
      const checkDate = new Date(el.dueDate);
      checkDate.setHours(23);
      checkDate.setMinutes(59);
      if (checkDate.getTime() < Date.now() || el.isDone === true) {
        if (el.isDone !== true) {
          // If the time has passed, its status changes to the state of completion
          setIsDone(el.id, false);
          el.isDone = true;
        }
        expireDate.push(el);
      } else {
        unExpireDate.push(el);
      }
    });

    const data = [
      ...unExpireDate?.sort(
        (a: TodoType, b: TodoType) =>
          new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      ),
      ...expireDate?.sort(
        (a: TodoType, b: TodoType) =>
          new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
      ),
    ];
    return data;
  };
  //  -------------------------------------
  //            Displayed todo data
  const data = sortingData();
  const dataOfpage = (todos: TodoType[], page: number) => {
    const data = todos?.slice((page - 1) * 5, page * 5);
    return data;
  };

  return (
    <FlexColumn>
      {dataOfpage(data, page)?.map((todo: TodoType) => (
        <Card data={todo} key={todo.id} />
      ))}
      <Paginate length={todos?.length} page={{ page, handlePage }} />
    </FlexColumn>
  );
};

export default Home;
