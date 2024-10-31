import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>

            <ul style={{listStyle: "none", padding: "0"}}>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/home1" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Home1
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/item" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Item
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/card" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Card
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/notfound1" style={{color: "#87CEFA", textDecoration: "none"}}>
                        NotFound1
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/cart" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Cart
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/refund" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Refund
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/contscts" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Contscts
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/registratin" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Registratin
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/order" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Order
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/orderone" style={{color: "#87CEFA", textDecoration: "none"}}>
                        OrderOne
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/account" style={{color: "#87CEFA", textDecoration: "none"}}>
                        Account
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/history" style={{color: "#87CEFA", textDecoration: "none"}}>
                        History
                    </Link>
                </li>
                <li style={{marginBottom: "10px"}}>
                    <Link to="/accountone" style={{color: "#87CEFA", textDecoration: "none"}}>
                        AccountOne
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;


