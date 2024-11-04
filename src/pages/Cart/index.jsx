
import { Helmet } from "react-helmet";
import { Button, Heading, Text, SelectBox, Img } from "../../components";
import Header from "../../components/Header";
import ProductDetails1 from "../../components/ProductDetails1";
import React, { Suspense, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice'; // Ensure remove action is defined in Redux

const dropDownOptions = [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Казань", value: "kazan" },
];

export default function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // Fetch cart items from Redux
    const [itemsToRemove, setItemsToRemove] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

    // Calculations for total items, subtotal, discount, and final price
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalDiscount = cartItems.reduce((total, item) => total + ((item.originalPrice || item.price) - item.price) * item.quantity, 0);
    const totalPrice = subtotal - totalDiscount;

    const handleCheckoutClick = () => {
        navigate('/orderone');
    };

    const handleRemoveItem = (itemId) => {
        setItemsToRemove((prev) => [...prev, itemId]); // Trigger fade-out animation
        setTimeout(() => {
            dispatch(removeFromCart(itemId)); // Dispatch action to remove item
            setItemsToRemove((prev) => prev.filter((id) => id !== itemId));
        }, 500); // Animation delay
    };


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <Helmet>
                <title>Your Shopping Cart - Check Out Our Deals</title>
                <meta
                    name="description"
                    content="Review your Shopping Cart with selected items. Plush oversized hoodies at a discount. Complete your purchase and enjoy our special offers."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="flex flex-col items-center self-stretch bg-gray-50_01">
                    <div className="container-xs mt-[1.75rem] flex flex-col gap-[2.00rem] md:px-[1.25rem]">
                        <div className="mx-[0.38rem] flex items-start justify-center md:mx-0">
                            <Img src="images/img_stash_arrow_up.svg" alt="Arrow Image" className="h-[1.75rem] w-[1.75rem]" />
                            <div className="flex flex-1 flex-wrap items-center justify-center gap-[0.63rem] self-center px-[3.50rem] md:px-[1.25rem]">
                                <Heading size="headingmd" as="h1" className="text-[1.38rem] font-semibold text-black">
                                    Корзина
                                </Heading>
                                <Heading
                                    size="b2_for_mob"
                                    as="h2"
                                    className="text-[0.88rem] font-medium tracking-[0.00rem] text-gray-600"
                                >
                                    {totalItems} товаров
                                </Heading>
                            </div>
                        </div>
                        <div className="flex items-start gap-[2.50rem] md:flex-col">
                            <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`transition-opacity duration-500 ${itemsToRemove.includes(item.id) ? 'opacity-0' : 'opacity-100'}`}
                                        >
                                            <ProductDetails1
                                                {...item}
                                                onRemove={() => handleRemoveItem(item.id)} // Pass remove handler to child
                                            />
                                        </div>
                                    ))}
                                </Suspense>
                            </div>










                            {isMobile ? (
                                <div
                                    className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200 shadow-lg flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex items-center space-x-2">
                                            <Text as="p" className="text-xl font-semibold text-black">
                                                {totalPrice.toLocaleString('ru-RU')} ₽
                                            </Text>
                                            {totalDiscount > 0 && (
                                                <div className="flex items-center text-gray-500 text-sm">
                                                    <Img src="images/discount_icon.svg" alt="Discount Icon"
                                                         className="h-4 w-4 mr-1"/>
                                                    <span>{totalDiscount.toLocaleString('ru-RU')} ₽</span>
                                                </div>
                                            )}
                                        </div>
                                        <Text as="p" className="text-sm text-gray-500 mt-1">
                                            {totalItems} товара
                                        </Text>
                                    </div>
                                    <Button
                                        size="sm"
                                        shape="round"
                                        color="orange_50_deep_orange_200"
                                        className="rounded-[10px] px-8 py-2 font-medium text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
                        hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
                                        onClick={handleCheckoutClick}
                                    >
                                        Заказать
                                    </Button>
                                </div>
                            ) : (


                                <div className="flex w-[30%] justify-center md:w-full">
                                    <div
                                        className="flex w-full flex-col gap-[1.25rem] rounded-[20px] bg-white px-[1.75rem] py-[2.50rem] sm:p-[1.25rem]">
                                        <div className="flex flex-col gap-[0.88rem]">
                                            <div className="flex flex-col gap-[1.00rem]">
                                                <div className="flex items-center gap-[0.38rem]">
                                                    <Text size="1280_h4" as="p"
                                                          className="text-[1.13rem] font-normal text-black">
                                                        Доставка в
                                                    </Text>
                                                    <SelectBox
                                                        shape="square"
                                                        indicator={
                                                            <Img
                                                                src="images/img_arrow_down_black.svg"
                                                                alt="Arrow Down"
                                                                className="h-[0.75rem] w-[0.75rem]"
                                                            />
                                                    }
                                                    name="City Dropdown"
                                                    placeholder={`Москва`}
                                                    options={dropDownOptions}
                                                    className="w-[26%] gap-[0.25rem] !border-b px-[0.75rem]"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-[0.25rem]">
                                                <div className="flex flex-wrap justify-between gap-[1.25rem]">
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        Товары, {totalItems} шт
                                                    </Text>
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        {subtotal.toLocaleString('ru-RU')} ₽
                                                    </Text>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-[1.25rem]">
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        Моя скидка
                                                    </Text>
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        {totalDiscount.toLocaleString('ru-RU')} ₽
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap justify-between gap-[1.25rem]">
                                            <Heading
                                                size="headinglg"
                                                as="h3"
                                                className="text-[1.50rem] font-extrabold tracking-[0.00rem] text-black md:text-[1.38rem]"
                                            >
                                                Итого
                                            </Heading>
                                            <Heading
                                                size="headinglg"
                                                as="h4"
                                                className="text-[1.50rem] font-extrabold tracking-[0.00rem] text-black md:text-[1.38rem]"
                                            >
                                                {totalPrice.toLocaleString('ru-RU')} ₽
                                            </Heading>
                                        </div>
                                    </div>
                                    <Button
                                        size="sm"
                                        shape="round"
                                        color="orange_50_deep_orange_200"
                                        className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
                                           hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
                                        onClick={handleCheckoutClick}
                                    >
                                        Заказать
                                    </Button>
                                </div>
                            </div>
)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
