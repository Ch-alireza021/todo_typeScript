import { useQuery } from "@tanstack/react-query";
import Card from "../components/widget/card/Card";
import api from "../api/api";
import { FlexColumn } from "../styles/creatStyle";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  duedate: string;
  isDone:boolean;
  edited:string|undefined
}

const Home = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await api.get("todo");
      return data.data;
    },
  });
  console.log(todos);
  return (
    <FlexColumn>
      {todos?.map((todo:TodoType) => (
        <Card data={todo} key={todo.id} />
      ))}
    </FlexColumn>
  );
};

export default Home;
