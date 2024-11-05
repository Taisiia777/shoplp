
import React, { useState, useEffect } from "react";
import MegaMenu1 from "../MegaMenu1";
import { Heading, Img, Text } from "./..";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuComponent from "components/Menu/MenuComponent";

export default function Header({ isAnimating }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 620); // Проверка текущей ширины экрана
    const [menuOpen, setMenuOpen] = useState(false); // Состояние для мобильного меню

    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Обновление состояния при изменении ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1070);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            {/* Хедер, который всегда должен быть поверх бокового меню */}
            <header className="header flex max-w-[1211px] mx-auto justify-center items-center p-4 sm:px-6 fixed top-0 left-1/2 transform -translate-x-1/2 w-full bg-white z-50">


                {/* Логотип */}
                <Img
                    onClick={() => navigate('/')}
                    src="images/img_header_logo.svg"
                    alt="Header Logo"
                    className="logo h-[2.50rem] w-[5.63rem] object-contain cursor-pointer"
                />




            </header>

        </>
    );
}

