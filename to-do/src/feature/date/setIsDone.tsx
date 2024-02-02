import api from "../../api/api";

const setIsDone = async (id: string, isDone: boolean) => {
  console.log(id);
  console.log(isDone);
  try {
    const res = await api.patch(`todo/${id}`, { isDone:!isDone });
    if ((res.statusText = "ok")) {
      return res.statusText
    }
  } catch (error) {
    console.log(error);
  }
};

export default setIsDone;
