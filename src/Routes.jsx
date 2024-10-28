import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home/index.jsx";
import NotFound from "pages/NotFound/index.jsx";
import Home1 from "pages/Home1/index.jsx";
import Item from "pages/Item/index.jsx";
import Card from "pages/Card/index.jsx";
import NotFound1 from "pages/NotFound1/index.jsx";
import Cart from "pages/Cart/index.jsx";

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
