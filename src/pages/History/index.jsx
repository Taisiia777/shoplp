import { Helmet } from "react-helmet";
import Header from "components/Header";
import OrderSummary from "../../components/OrderSummary";
import HistoryColumn from "./HistoryColumn";
import React, { Suspense } from "react";

const data = [
    {
        orderDetails: "Заказ №37145194 от 24.10.2024",
        productImage: "images/img_frame.png",
        productName: "Плюшевое оверсайз худи на взрослого",
        colorDescription: "Нежно-персиковый",
        sizeDescription: "Универсальный RU ",
        itemCount: "Товары, 2 шт",
        totalPrice: "6 600 ₽",
        discountLabel: "Моя скидка",
        discountedPrice: "4 400 ₽",
        currentPrice: "6 600 ₽",
        discountPercentage: "–25%",
        originalPrice: "8 800 ₽",
        reviewButtonLabel: "Оставить отзыв",
    },
    {
        orderDetails: "Заказ №37145194 от 24.10.2024",
        productImage: "images/img_frame.png",
        productName: "Плюшевое оверсайз худи на взрослого",
        colorDescription: "Нежно-персиковый",
        sizeDescription: "Универсальный RU ",
        itemCount: "Товары, 2 шт",
        totalPrice: "6 600 ₽",
        discountLabel: "Моя скидка",
        discountedPrice: "4 400 ₽",
        currentPrice: "6 600 ₽",
        discountPercentage: "–25%",
        originalPrice: "8 800 ₽",
        reviewButtonLabel: "Отзыв оставлен",
    },
    {
        orderDetails: "Заказ №37145194 от 24.10.2024",
        productImage: "images/img_frame_124x100.png",
        productName: "Плюшевое оверсайз худи на взрослого",
        colorDescription: "Нежно-персиковый",
        sizeDescription: "Универсальный RU ",
        itemCount: "Товары, 2 шт",
        totalPrice: "6 600 ₽",
        discountLabel: "Моя скидка",
        discountedPrice: "4 400 ₽",
        currentPrice: "6 600 ₽",
        discountPercentage: "–25%",
        originalPrice: "8 800 ₽",
        reviewButtonLabel: "Оставить отзыв",
    },
];

export default function HistoryPage() {
    return (
        <>
            <Helmet>
                <title>Savelii&#39;s Application17</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="flex flex-col items-center gap-[1.88rem] self-stretch bg-gray-50">
                    <HistoryColumn />
                    <div className="container-xs flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
                        <div className="flex w-[80%] flex-col gap-[1.25rem] md:w-full">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                    <OrderSummary {...d} key={"history" + index} />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

