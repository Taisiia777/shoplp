import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, Input, GoogleMap, SelectBox } from "components";
import DeliveryInfoRow from "../../components/DeliveryInfoRow";
import Header from "components/Header";
import OrderoneColumn from "./OrderoneColumn";
import metadata from "libphonenumber-js/metadata.full.json";
import React, {Suspense, useEffect} from "react";
import { useState } from "react";
import ProductDetails1 from "components/ProductDetails1"; // Add this at the top with other imports
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice'; // Ensure remove action is defined in Redux
const dropDownOptions = [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Казань", value: "kazan" },
];
export default function OrderOnePage() {
    const [selectedDelivery, setSelectedDelivery] = useState("pickup"); // Add inside the component
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // Fetch cart items from Redux
    const [itemsToRemove, setItemsToRemove] = useState([]);
    // Calculations for total items, subtotal, discount, and final price
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalDiscount = cartItems.reduce((total, item) => total + ((item.originalPrice || item.price) - item.price) * item.quantity, 0);
    const totalPrice = subtotal - totalDiscount;

    const countryOptions = React.useMemo(() => {
        return Object.entries(metadata.countries).map(([code, data]) => {
            const callingCode = `${data[0]}`;

            const display = {
                code,
                callingCode: `+${callingCode}`,
                imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
            };

            return {
                value: code,
                label: (
                    <>
                        <Img src={display.imgSrc} alt="Television" className="h-[1.13rem]" />
                    </>
                ),
            };
        });
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleRemoveItem = (itemId) => {
        setItemsToRemove((prev) => [...prev, itemId]); // Trigger fade-out animation
        setTimeout(() => {
            dispatch(removeFromCart(itemId)); // Dispatch action to remove item
            setItemsToRemove((prev) => prev.filter((id) => id !== itemId));
        }, 500); // Animation delay
    };
    return (
        <>
            {isMobile ? (

                <>

                    <Helmet>
                        <title>Savelii&#39;s Application17</title>
                        <meta name="description" content="Web site created using create-react-app" />
                    </Helmet>
                    <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                        <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                            <Header />
                        </div>
                        <div className="flex flex-col items-center gap-[2.50rem] self-stretch bg-gray-50 py-[1.75rem] sm:py-[1.25rem]">
                            <OrderoneColumn />

                            <div className="container-xs mb-[4.25rem] md:px-[1.25rem]">

                                <div
                                    className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200 shadow-lg flex items-center justify-between z-100">
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
                                    >
                                        Оформить заказ
                                    </Button>
                                </div>


                                <div className="flex items-start gap-[2.38rem] md:flex-col">
                                    <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
                                        <div className="flex flex-col gap-[1.25rem]">
                                            <div
                                                className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
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
                                            <div
                                                className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                    Введите личные данные
                                                </Text>
                                                <div className="flex flex-col gap-[1.25rem] self-stretch">
                                                    <div className="flex gap-[0.63rem] md:flex-col">
                                                        <Input
                                                            shape="round"
                                                            name="имя"
                                                            placeholder="Имя"
                                                            className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                        />
                                                        <Input
                                                            shape="round"
                                                            name="фамилия"
                                                            placeholder="Фамилия"
                                                            className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                        />
                                                    </div>
                                                    <div className="flex gap-[0.63rem] md:flex-col">
                                                        <div
                                                            className="flex h-[2.75rem] w-full items-center rounded-[10px] bg-gray-100 px-[1.50rem] sm:px-[1.25rem]">
                                                            <SelectBox
                                                                options={countryOptions}
                                                                defaultValue={countryOptions.find((option) => option.value === "RU")}
                                                                className="flex max-h-[2.13rem] items-center bg-transparent text-gray-500 border-none focus:outline-none focus:ring-0"
                                                                indicator={
                                                                    <Img
                                                                        src="images/img_arrow_down.svg"
                                                                        alt="Arrowdown"
                                                                        className="h-[0.50rem] w-[0.50rem]"
                                                                    />
                                                                }
                                                            />
                                                            <input
                                                                name="phone"
                                                                placeholder="+7 (000) 000 00 00"
                                                                type="tel"
                                                                className="ml-[0.63rem] w-full bg-transparent text-[1.13rem] text-gray-500 placeholder-gray-400 outline-none border-none focus:outline-none focus:ring-0"
                                                            />
                                                        </div>
                                                        <Input
                                                            shape="round"
                                                            name="элпочта"
                                                            placeholder="Эл. почта"
                                                            className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div
                                                    className="flex flex-col items-start gap-[1.13rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                    <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                        Выберите удобный способ доставки
                                                    </Text>
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
                                                    <div className="flex gap-[0.63rem] self-stretch md:flex-col">
                                                        {/*<DeliveryInfoRow*/}
                                                        {/*    pickupPointText="В пункт выдачи "*/}
                                                        {/*    pickupPointImage="images/img_stash_check_light_green_400.svg"*/}
                                                        {/*    deliveryTimeText="До 3х рабочих дней"*/}
                                                        {/*    freeDeliveryText="Бесплатно от 7 т р."*/}
                                                        {/*    className="border border-solid border-[#EBA47B] bg-white"*/}
                                                        {/*/>*/}
                                                        {/*<DeliveryInfoRow*/}
                                                        {/*    pickupPointText="Доставка курьером"*/}
                                                        {/*    pickupPointImage="images/img_stash_check_light_secondary_accent.svg"*/}
                                                        {/*    deliveryTimeText="До 3х рабочих дней"*/}
                                                        {/*    freeDeliveryText="Бесплатно от 10 т р."*/}
                                                        {/*    className="bg-gray-100"*/}
                                                        {/*/>*/}
                                                        <DeliveryInfoRow
                                                            onClick={() => setSelectedDelivery("pickup")}
                                                            pickupPointText="В пункт выдачи"
                                                            pickupPointImage="images/img_stash_check_light_green_400.svg"
                                                            deliveryTimeText="До 3х рабочих дней"
                                                            freeDeliveryText="Бесплатно от 7 т р."
                                                            className={`${selectedDelivery === "pickup" ? "border border-solid border-[#EBA47B] bg-white" : "bg-gray-100"}`}
                                                        />
                                                        <DeliveryInfoRow
                                                            onClick={() => setSelectedDelivery("courier")}
                                                            pickupPointText="Доставка курьером"
                                                            pickupPointImage="images/img_stash_check_light_secondary_accent.svg"
                                                            deliveryTimeText="До 3х рабочих дней"
                                                            freeDeliveryText="Бесплатно от 10 т р."
                                                            className={`${selectedDelivery === "courier" ? "border border-solid border-[#EBA47B] bg-white" : "bg-gray-100"}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {selectedDelivery === "pickup" && (

                                                <div
                                                    style={{overflow: "hidden"}}
                                                    className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                    <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                        Адрес пункта выдачи
                                                    </Text>
                                                    {/*<div*/}
                                                    {/*    className="flex flex-col items-center gap-[1.88rem] bg-white mt-[2rem] w-full">*/}
                                                    {/*    <iframe*/}
                                                    {/*        src="https://yandex.ru/map-widget/v1/?um=constructor%3A392377820fbb9a8276f7900181524617e1cee5164386903ab0b9faf0b6158e27&amp;source=constructor"*/}
                                                    {/*        width="758" height="396" frameBorder="0"></iframe>*/}
                                                    {/*</div>*/}
                                                    <div style={{
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        zIndex: "10"
                                                    }}>
                                                        <a
                                                            href="https://yandex.ru/maps/213/moscow/search/Wildberries/?utm_medium=mapframe&utm_source=maps"
                                                            style={{
                                                                color: "#eee",
                                                                fontSize: "12px",
                                                                position: "absolute",
                                                                top: "0px"
                                                            }}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Wildberries в Москве
                                                        </a>
                                                        <a
                                                            href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                                                            style={{
                                                                color: "#eee",
                                                                fontSize: "12px",
                                                                position: "absolute",
                                                                top: "14px"
                                                            }}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Москва
                                                        </a>
                                                        <iframe
                                                            src="https://yandex.ru/map-widget/v1/?display-text=Wildberries&ll=37.616985%2C55.734152&mode=search&sll=37.616985%2C55.734113&text=chain_id%3A%282129228517%29&z=12"
                                                            width="758px"
                                                            height="396"
                                                            frameBorder="1"
                                                            allowFullScreen
                                                            style={{position: "relative", zIndex: "11"}}
                                                            title="Wildberries Pickup Points in Moscow"
                                                        ></iframe>
                                                    </div>
                                                </div>

                                            )}


                                        </div>
                                        <div>
                                            <div
                                                className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                    Оставьте комментарии к заказку
                                                </Text>
                                                <Input
                                                    size="md"
                                                    shape="round"
                                                    name="frame_two"
                                                    placeholder={`Комментарии к заказу`}
                                                    className="self-stretch rounded-[10px] px-[1.50rem] sm:px-[1.25rem]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*<Suspense fallback={<div>Loading feed...</div>}>*/}
                                    {/*    {cartItems.map((item) => (*/}
                                    {/*        <div*/}
                                    {/*            key={item.id}*/}
                                    {/*            className={`transition-opacity duration-500 ${itemsToRemove.includes(item.id) ? 'opacity-0' : 'opacity-100'}`}*/}
                                    {/*        >*/}
                                    {/*            <ProductDetails1*/}
                                    {/*                {...item}*/}
                                    {/*                onRemove={() => handleRemoveItem(item.id)} // Pass remove handler to child*/}
                                    {/*            />*/}
                                    {/*        </div>*/}
                                    {/*    ))}*/}
                                    {/*</Suspense>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                <>

                    <Helmet>
                        <title>Savelii&#39;s Application17</title>
                        <meta name="description" content="Web site created using create-react-app"/>
                    </Helmet>
                    <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                        <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                            <Header/>
                        </div>
                        <div
                            className="flex flex-col items-center gap-[2.50rem] self-stretch bg-gray-50 py-[1.75rem] sm:py-[1.25rem]">
                            <OrderoneColumn/>
                            <div className="container-xs mb-[4.25rem] md:px-[1.25rem]">
                                <div className="flex items-start gap-[2.38rem] md:flex-col">
                                    <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
                                        <div className="flex flex-col gap-[1.25rem]">
                                            <div
                                                className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                    Введите личные данные
                                                </Text>
                                                <div className="flex flex-col gap-[1.25rem] self-stretch">
                                                    <div className="flex gap-[0.63rem] md:flex-col">
                                                        <Input
                                                            shape="round"
                                                            name="имя"
                                                            placeholder="Имя"
                                                                className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                            />
                                                            <Input
                                                                shape="round"
                                                                name="фамилия"
                                                                placeholder="Фамилия"
                                                                className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                            />
                                                        </div>
                                                        <div className="flex gap-[0.63rem] md:flex-col">
                                                            <div
                                                                className="flex h-[2.75rem] w-full items-center rounded-[10px] bg-gray-100 px-[1.50rem] sm:px-[1.25rem]">
                                                                <SelectBox
                                                                    options={countryOptions}
                                                                    defaultValue={countryOptions.find((option) => option.value === "RU")}
                                                                    className="flex max-h-[2.13rem] items-center bg-transparent text-gray-500 border-none focus:outline-none focus:ring-0"
                                                                    indicator={
                                                                        <Img
                                                                            src="images/img_arrow_down.svg"
                                                                            alt="Arrowdown"
                                                                            className="h-[0.50rem] w-[0.50rem]"
                                                                        />
                                                                    }
                                                                />
                                                                <input
                                                                    name="phone"
                                                                    placeholder="+7 (000) 000 00 00"
                                                                    type="tel"
                                                                    className="ml-[0.63rem] w-full bg-transparent text-[1.13rem] text-gray-500 placeholder-gray-400 outline-none border-none focus:outline-none focus:ring-0"
                                                                />
                                                            </div>
                                                            <Input
                                                                shape="round"
                                                                name="элпочта"
                                                                placeholder="Эл. почта"
                                                                className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div
                                                        className="flex flex-col items-start gap-[1.13rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                            Выберите удобный способ доставки
                                                        </Text>
                                                        <div className="flex items-center self-stretch">
                                                            <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                                Доставка в
                                                            </Text>
                                                            <div className="flex flex-1 items-center px-[0.38rem]">
                                                                <div className="flex w-[10%] flex-col items-center">
                                                                    <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                                        Москва
                                                                    </Text>
                                                                    <div className="h-[0.06rem] w-full self-stretch bg-black"/>
                                                                </div>
                                                                <Img
                                                                    src="images/img_arrow_down_black.svg"
                                                                    alt="Arrowdown"
                                                                    className="h-[0.75rem] w-[0.75rem]"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-[0.63rem] self-stretch md:flex-col">
                                                            {/*<DeliveryInfoRow*/}
                                                            {/*    pickupPointText="В пункт выдачи "*/}
                                                            {/*    pickupPointImage="images/img_stash_check_light_green_400.svg"*/}
                                                            {/*    deliveryTimeText="До 3х рабочих дней"*/}
                                                            {/*    freeDeliveryText="Бесплатно от 7 т р."*/}
                                                            {/*    className="border border-solid border-[#EBA47B] bg-white"*/}
                                                            {/*/>*/}
                                                            {/*<DeliveryInfoRow*/}
                                                            {/*    pickupPointText="Доставка курьером"*/}
                                                            {/*    pickupPointImage="images/img_stash_check_light_secondary_accent.svg"*/}
                                                            {/*    deliveryTimeText="До 3х рабочих дней"*/}
                                                            {/*    freeDeliveryText="Бесплатно от 10 т р."*/}
                                                            {/*    className="bg-gray-100"*/}
                                                            {/*/>*/}
                                                            <DeliveryInfoRow
                                                                onClick={() => setSelectedDelivery("pickup")}
                                                                pickupPointText="В пункт выдачи"
                                                                pickupPointImage="images/img_stash_check_light_green_400.svg"
                                                                deliveryTimeText="До 3х рабочих дней"
                                                                freeDeliveryText="Бесплатно от 7 т р."
                                                                className={`${selectedDelivery === "pickup" ? "border border-solid border-[#EBA47B] bg-white" : "bg-gray-100"}`}
                                                            />
                                                            <DeliveryInfoRow
                                                                onClick={() => setSelectedDelivery("courier")}
                                                                pickupPointText="Доставка курьером"
                                                                pickupPointImage="images/img_stash_check_light_secondary_accent.svg"
                                                                deliveryTimeText="До 3х рабочих дней"
                                                                freeDeliveryText="Бесплатно от 10 т р."
                                                                className={`${selectedDelivery === "courier" ? "border border-solid border-[#EBA47B] bg-white" : "bg-gray-100"}`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {selectedDelivery === "pickup" && (

                                                    <div
                                                        className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                            Адрес пункта выдачи
                                                        </Text>
                                                        {/*<div*/}
                                                        {/*    className="flex flex-col items-center gap-[1.88rem] bg-white mt-[2rem] w-full">*/}
                                                        {/*    <iframe*/}
                                                        {/*        src="https://yandex.ru/map-widget/v1/?um=constructor%3A392377820fbb9a8276f7900181524617e1cee5164386903ab0b9faf0b6158e27&amp;source=constructor"*/}
                                                        {/*        width="758" height="396" frameBorder="0"></iframe>*/}
                                                        {/*</div>*/}
                                                        <div style={{position: "relative", overflow: "hidden"}}>
                                                            <a
                                                                href="https://yandex.ru/maps/213/moscow/search/Wildberries/?utm_medium=mapframe&utm_source=maps"
                                                                style={{
                                                                    color: "#eee",
                                                                    fontSize: "12px",
                                                                    position: "absolute",
                                                                    top: "0px"
                                                                }}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Wildberries в Москве
                                                            </a>
                                                            <a
                                                                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                                                                style={{
                                                                    color: "#eee",
                                                                    fontSize: "12px",
                                                                    position: "absolute",
                                                                    top: "14px"
                                                                }}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Москва
                                                            </a>
                                                            <iframe
                                                                src="https://yandex.ru/map-widget/v1/?display-text=Wildberries&ll=37.616985%2C55.734152&mode=search&sll=37.616985%2C55.734113&text=chain_id%3A%282129228517%29&z=12"
                                                                width="758"
                                                                height="396"
                                                                frameBorder="1"
                                                                allowFullScreen
                                                                style={{position: "relative"}}
                                                                title="Wildberries Pickup Points in Moscow"
                                                            ></iframe>
                                                        </div>
                                                    </div>

                                                )}


                                            </div>
                                            <div>
                                                <div
                                                    className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                                    <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                        Оставьте комментарии к заказку
                                                    </Text>
                                                    <Input
                                                        size="md"
                                                        shape="round"
                                                        name="frame_two"
                                                        placeholder={`Комментарии к заказу`}
                                                        className="self-stretch rounded-[10px] px-[1.50rem] sm:px-[1.25rem]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex w-[30%] flex-col gap-[1.13rem] rounded-[20px] bg-white px-[1.75rem] py-[2.38rem] md:w-full sm:p-[1.25rem]">
                                            <div className="flex items-center gap-[1.25rem]">
                                                <Img
                                                    src="images/img_frame.png"
                                                    alt="Image"
                                                    className="h-[8.75rem] w-[36%] rounded-[10px] object-contain"
                                                />
                                                <div className="flex flex-1 flex-col gap-[0.50rem]">
                                                    <Text as="p" className="text-[1.13rem] font-normal leading-[2.13rem] text-black">
                                                        Плюшевое оверсайз худи на взрослого
                                                    </Text>
                                                    <div className="mb-[1.38rem] flex flex-col items-start gap-[0.13rem]">
                                                        <div className="flex items-center justify-center self-stretch">
                                                            <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-light_peach" />
                                                            <Heading
                                                                size="b2_for_mob"
                                                                as="h2"
                                                                className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                                                            >
                                                                Нежно-персиковый
                                                            </Heading>
                                                        </div>
                                                        <Heading
                                                            size="b2_for_mob"
                                                            as="h3"
                                                            className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                                                        >
                                                            Универсальный RU{" "}
                                                        </Heading>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[1.25rem]">
                                                <div className="flex flex-col gap-[0.88rem]">
                                                    <div className="flex flex-col gap-[0.25rem]">
                                                        <div className="flex flex-wrap justify-between gap-[1.25rem]">
                                                            <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                                Товары, {totalItems} шт
                                                            </Text>
                                                            <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                                {subtotal.toLocaleString('ru-RU')} ₽
                                                            </Text>
                                                        </div>
                                                        <div className="flex flex-wrap justify-between gap-[1.25rem]">
                                                            <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                                Моя скидка
                                                            </Text>
                                                            <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                                {totalDiscount.toLocaleString('ru-RU')} ₽
                                                            </Text>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap justify-between gap-[1.25rem]">
                                                        <Heading
                                                            size="headinglg"
                                                            as="h4"
                                                            className="text-[1.50rem] font-extrabold tracking-[0.00rem] text-black md:text-[1.38rem]"
                                                        >
                                                            Итого
                                                        </Heading>
                                                        <Heading
                                                            size="headinglg"
                                                            as="h5"
                                                            className="text-[1.50rem] font-extrabold tracking-[0.00rem] text-black md:text-[1.38rem]"
                                                        >
                                                            {totalPrice.toLocaleString('ru-RU')} ₽
                                                        </Heading>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[0.63rem]">
                                                    <Button
                                                        shape="round"
                                                        color="orange_50_deep_orange_200"
                                                        className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
                                           hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
                                                    >
                                                        Оформить заказ
                                                    </Button>
                                                    <div className="flex items-start justify-center gap-[0.25rem]">
                                                        <Img
                                                            src="images/img_stash_check_light.svg"
                                                            alt="Stashcheck"
                                                            className="h-[1.50rem] w-[1.50rem]"
                                                        />
                                                        <Text
                                                            size="textxs"
                                                            as="p"
                                                            className="w-[92%] self-center text-[0.75rem] font-normal leading-[1.63rem] text-secondary_accent"
                                                        >
                                                            <span>Я ознакомился и соглашаюсь с&nbsp;</span>
                                                            <a href="#" className="inline underline">
                                                                Политикой конфиденциальности
                                                            </a>
                                                        </Text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </>
                )}

                </>
);
}

