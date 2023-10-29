import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from "./LayOut/MainLayOut";
import Home from "./Pages/Home/Home/Home";
import Blog from "./Pages/Home/Blog/Blog";
import Login from "./Pages/Home/Login/Login";
import SignUp from "./Pages/Home/SignUp/SignUp";
import AuthProvider from "./Pages/Shared/AuthProvider/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
},{
  path:"/blog",
  element:<Blog></Blog>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:"/Signup",
  element:<SignUp/>
}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />  
    </AuthProvider>
    </React.StrictMode>,
)
