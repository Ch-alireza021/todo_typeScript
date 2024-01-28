import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import { PATH } from "../config/router/routerConfig";
import AddTodo from "../page/AddTodo";

const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {index:true,element:<Home/>},
        {path:PATH.TODO,element:<AddTodo/>}
    ]
}])

export default router;