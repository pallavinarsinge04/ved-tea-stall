import ReactDom from "react-dom/client"
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
const root = ReactDom.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/About",
        element:<About/>,
    }
]);

root.render(<RouterProvider router={router}/>);
