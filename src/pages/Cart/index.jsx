import { Helmet } from "react-helmet";
import { Button, Heading, Text, SelectBox, Img } from "../../components";
import Header from "../../components/Header";
import ProductDetails1 from "../../components/ProductDetails1";
import React, { Suspense } from "react";

const productDetailsList = [
    {
        productImage: "images/img_frame_140x100.png",
        productName: "Плюшевое оверсайз худи на взрослого",
        colorDescription: "Нежно-персиковый",
        sizeDescription: "Универсальный RU ",
        quantity: "2",
        currentPrice: "6 600 ₽",
        discount: "–25%",
        originalPrice: "8 800 ₽",
    },
    {
        productImage: "images/img_frame_140x100.png",
        productName: "Плюшевое оверсайз худи на взрослого",
        colorDescription: "Нежно-персиковый",
        sizeDescription: "Универсальный RU ",
        quantity: "2",
        currentPrice: "6 600 ₽",
        discount: "–25%",
        originalPrice: "8 800 ₽",
    },
    {
        productImage: "images/img_frame_44x100.png",
        productName: "Плюшевое оверсайз худи на взрослого",
        colorDescription: "Нежно-персиковый",
        sizeDescription: "Универсальный RU ",
        quantity: "2",
        currentPrice: "6 600 ₽",
        discount: "–25%",
        originalPrice: "8 800 ₽",
    },
];
const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function CartPage() {
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
                                    2 товара
                                </Heading>
                            </div>
                        </div>
                        <div className="flex items-start gap-[2.50rem] md:flex-col">
                            <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {productDetailsList.map((d, index) => (
                                        <ProductDetails1 {...d} key={"toysList" + index} />
                                    ))}
                                </Suspense>
                            </div>
                            <div className="flex w-[30%] justify-center md:w-full">
                                <div className="flex w-full flex-col gap-[1.25rem] rounded-[20px] bg-white px-[1.75rem] py-[2.50rem] sm:p-[1.25rem]">
                                    <div className="flex flex-col gap-[0.88rem]">
                                        <div className="flex flex-col gap-[1.00rem]">
                                            <div className="flex items-center gap-[0.38rem]">
                                                <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
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
                                                        Товары, 6 шт
                                                    </Text>
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        19 800 ₽
                                                    </Text>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-[1.25rem]">
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        Моя скидка
                                                    </Text>
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        6 600 ₽
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
                                                19 800 ₽
                                            </Heading>
                                        </div>
                                    </div>
                                    <Button
                                        size="sm"
                                        shape="round"
                                        color="orange_50_deep_orange_200"
                                        className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem]"
                                    >
                                        Заказать
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

