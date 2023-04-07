import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import CreateUser from "../pages/CreateUser";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import NotFound from "../pages/NotFound";
import Orden from "../pages/Orden";
import Pedidos from "../pages/Pedidos";
import Admin from "../pages/Admin";
import ListaUser from "../components/admincarpeta/ListaUser";
import ListaMenu from "../components/admincarpeta/ListaMenu";
import AddMenu from "../components/admincarpeta/AddMenu";
import ListaPedidos from "../components/admincarpeta/ListaPedidos";
import EditMenu from "../components/admincarpeta/EditMenu";




export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement : <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'orden',
                element: <Orden />
            },
            {
                path: 'usuario',
                element: <CreateUser />
            },
            {
                path: 'login',
                element: <LogIn />
            },
            {
                path: 'pedidos',
                element: <Pedidos />
            },
            {
                path: 'admin',
                element: <ListaUser />
            },
            {
                path: 'listuser',
                element: <ListaUser />
            },
            {
                path: 'listmenu',
                element: <ListaMenu />
            },
            {
                path: 'addmenu',
                element: <AddMenu />
            },
            {
                path: 'listpedido',
                element: <ListaPedidos />
            },
            {
                path: 'edit/:menuid',
                element: <EditMenu />
            }
        ]
    }
]);
