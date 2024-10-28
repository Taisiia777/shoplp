import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
           
            <ul style={{ listStyle: "none", padding: "0" }}>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/home1" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        Home1
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/item" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        Item
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/card" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        Card
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/notfound1" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        NotFound1
                    </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                    <Link to="/cart" style={{ color: "#87CEFA", textDecoration: "none" }}>
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
