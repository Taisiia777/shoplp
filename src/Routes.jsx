import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home.jsx";
import NotFound from "pages/NotFound.jsx";
import Home1 from "pages/Home1";
import Item from "pages/Item";
import Card from "pages/Card";
import NotFound1 from "pages/NotFound1";
import Cart from "pages/Cart";
import Refund from "pages/Refund";
import Contscts from "pages/Contscts";
import Registratin from "pages/Registratin";
import Order from "pages/Order";
import OrderOne from "pages/OrderOne";
import Account from "pages/Account";
import History from "pages/History";
import AccountOne from "pages/AccountOne";
const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        { path: "home1", element: <Home1 /> },
        { path: "item", element: <Item /> },
        { path: "card", element: <Card /> },
        { path: "notfound1", element: <NotFound1 /> },
        { path: "cart", element: <Cart /> },
        {
            path: "refund",
            element: <Refund />,
        },
        {
            path: "contscts",
            element: <Contscts />,
        },
        {
            path: "registratin",
            element: <Registratin />,
        },
        {
            path: "order",
            element: <Order />,
        },
        {
            path: "orderone",
            element: <OrderOne />,
        },
        {
            path: "account",
            element: <Account />,
        },
        {
            path: "history",
            element: <History />,
        },
        {
            path: "accountone",
            element: <AccountOne />,
        },
    ]);

    return element;
};

export default ProjectRoutes;

