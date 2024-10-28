import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import Item from "pages/Item";
import Card from "pages/Card";
import NotFound1 from "pages/NotFound1";
import Cart from "pages/Cart";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        { path: "home1", element: <Home1 /> },
        { path: "item", element: <Item /> },
        { path: "card", element: <Card /> },
        { path: "notfound1", element: <NotFound1 /> },
        { path: "cart", element: <Cart /> },
    ]);

    return element;
};

export default ProjectRoutes;
