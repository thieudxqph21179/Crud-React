import { createBrowserRouter } from "react-router-dom";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import ListProduct from "./pages/ListProduct";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

export const routes = createBrowserRouter([
    {path:"/",element:<LayoutAdmin/>,children:[
        {path:"",element:<ListProduct/>},
        {path:"add",element:<AddProduct/>},
        {path:"edit/:id",element:<UpdateProduct/>},
    ]}
])