
import MegaMenu1 from "../MegaMenu1";
import { Heading, Img, Text } from "./..";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header({ isAnimating }) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total count

    const handleClick = () => {
        navigate('/');
    };
    const handleClickCart = () => {
        navigate('/cart');
    };
    const handleClickCard = () => {
        navigate('/card');
    };
    const handleClickRefund = () => {
        navigate('/refund');
    };
    const handleClickContacts = () => {
        navigate('/contscts ');
    };
    const handleClickAccount = () => {
        navigate('/account');
    };

    return (
        <header  className={` flex sm:flex-col justify-between items-center gap-[1.25rem]`}>
            <Img onClick={handleClick} src="images/img_header_logo.svg" alt="Header Logo" className="h-[2.50rem] w-[5.63rem] object-contain" />
            <div className="flex w-[44%] items-center justify-between gap-[1.25rem] md:w-full sm:flex-col">
                <ul className="flex gap-[0.50rem] sm:flex-col">
                    <li
                        onMouseLeave={() => setMenuOpen(false)}
                        onMouseEnter={() => setMenuOpen(true)}
                    >
                        <div className="flex cursor-pointer items-center gap-[0.25rem]">
                            <Text
                                size="1280_h4"
                                as="p"
                                className="text-[1.13rem] font-normal text-black transition-colors duration-300 hover:text-[#CF7A48]"
                            >
                                Худи
                            </Text>
                            <Img src="images/img_arrow_down_black.svg" alt="Dropdown Arrow" className="h-[0.75rem] w-[0.75rem]" />
                        </div>
                        {menuOpen ? <MegaMenu1 /> : null}
                    </li>
                    <li onClick={handleClickCard} className="cursor-pointer">
                        <Text
                            size="1280_h4"
                            as="p"
                            className="text-[1.13rem] font-normal text-black transition-colors duration-300 hover:text-[#CF7A48]"
                        >
                            Доставка
                        </Text>
                    </li>
                    <li onClick={handleClickRefund} className="cursor-pointer">
                        <Text
                            size="1280_h4"
                            as="p"
                            className="text-[1.13rem] font-normal text-black transition-colors duration-300 hover:text-[#CF7A48]"
                        >
                            Возврат и обмен
                        </Text>
                    </li>
                    <li onClick={handleClickContacts} className="cursor-pointer">
                        <Text
                            size="1280_h4"
                            as="p"
                            className="text-[1.13rem] font-normal text-black transition-colors duration-300 hover:text-[#CF7A48]"
                        >
                            Контакты
                        </Text>
                    </li>
                </ul>
                <div className="flex w-[12%] justify-center gap-[0.63rem] sm:w-full">
                    <div onClick={handleClickAccount} className="cursor-pointer">
                        <Img src="images/img_fluent_person_16_regular.svg" alt="Profile Icon"
                             className="h-[1.75rem] w-[1.75rem]"/>
                    </div>
                    <div
                        onClick={handleClickCart}
                        className={`relative flex h-[1.75rem] w-[1.75rem] flex-col items-center justify-center bg-[url(/public/images/img_f7_bag.svg)] bg-cover bg-no-repeat md:h-auto cursor-pointer ${isAnimating ? "cart-bounce" : ""}`}
                    >

                        {cartItemCount > 0 && ( // Only display if cart is not empty
                            <Heading
                                size="headingxs"
                                as="p"
                                className="flex h-[1.13rem] w-[1.13rem] items-center justify-center rounded-lg bg-sale_red text-center text-[0.50rem] font-semibold text-white"
                            >
                                {cartItemCount}
                            </Heading>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
