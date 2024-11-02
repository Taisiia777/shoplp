// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./styles/tailwind.css";
// import "./styles/index.css";
// import "./styles/font.css";
//
// const container = document.getElementById("root");
// const root = createRoot(container);
//
// root.render(<App />);
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";  // Import Provider
import { store } from "./store";         // Import the Redux store
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>            {/* Wrap App with Provider */}
        <App />
    </Provider>
);
