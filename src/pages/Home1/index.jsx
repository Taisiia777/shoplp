
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetails from "../../components/ProductDetails";
import HomeBannerSection from "./HomeBannerSection";
import { Suspense } from "react";
// import { useNavigate } from 'react-router-dom';

const productHighlightsGrid = [
    {
        prop: "Хит",
        currentPrice: "3 300 ₽",
        discount: "–25%",
        oldPrice: "4 400 ₽",
        productDescription: "Плюшевое оверсайз худи на ребенка и подростка",
        colorDescriptionOne: "Нежно-персиковый",
        colorDescriptionTwo: "Темно-синий",
        ru: "Универсальный RU ",
        img: "/images/1.png",
        url: "https://www.wildberries.ru/catalog/273363041/detail.aspx?targetUrl=GP",

    },
    {
        prop: "Хит",
        currentPrice: "3 300 ₽",
        discount: "–25%",
        oldPrice: "4 400 ₽",
        productDescription: "Плюшевое оверсайз худи на ребенка и подростка",
        colorDescriptionOne: "Нежно-персиковый",
        colorDescriptionTwo: "Темно-синий",
        ru: "Универсальный RU",
        img: "/images/2.png",
        url: "https://www.wildberries.ru/catalog/273363042/detail.aspx?targetUrl=GP",

    },
    {
        prop: "Хит",
        currentPrice: "3 300 ₽",
        discount: "–25%",
        oldPrice: "4 400 ₽",
        productDescription: "Плюшевое оверсайз худи на взрослого",
        colorDescriptionOne: "Нежно-персиковый",
        colorDescriptionTwo: "Темно-синий",
        ru: "Универсальный RU",
        img: "/images/3.png",
        url: "https://www.wildberries.ru/catalog/273374254/detail.aspx?targetUrl=GP",

    },
    {
        prop: "Хит",
        currentPrice: "3 300 ₽",
        discount: "–25%",
        oldPrice: "4 400 ₽",
        productDescription: "Плюшевое оверсайз худи на взрослого",
        colorDescriptionOne: "Нежно-персиковый",
        colorDescriptionTwo: "Темно-синий",
        ru: "Универсальный RU",
        img: "/images/4.png",
        url: "https://www.wildberries.ru/catalog/273375403/detail.aspx?targetUrl=GP",

    },
    // Other products...
];

export default function Home1Page() {
    // const navigate = useNavigate();
    //
    // const handleProductClick = () => {
    //     navigate('/item');
    // };

    return (
        <>
            <Helmet>
                <title>Home - Cozy Hoodies for the Whole Family</title>
                <meta
                    name="description"
                    content="Discover our collection of plush oversized hoodies for children, teens, and adults. Enjoy special discounts and create your cozy moment with our family sets."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="flex flex-col gap-[5.50rem] self-stretch md:gap-[4.13rem] sm:gap-[2.75rem]">
                    <div className="flex flex-col items-center gap-[5.63rem] md:gap-[4.19rem] sm:gap-[2.81rem]">
                        {/* home banner section */}
                        <HomeBannerSection/>
                        <div className="container-xs md:px-[1.25rem]">
                            <div className="grid grid-cols-2 justify-center gap-[1.88rem] md:grid-cols-1">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {productHighlightsGrid.map((d, index) => (
                                        <ProductDetails
                                            {...d}
                                            key={"homeGrid" + index}
                                            // onClick={handleProductClick}
                                            className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"

                                        />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                        <div className="mapContainer" style={{
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "10",
                            maxWidth: "1211px",
                            width: "100%", // Устанавливаем ширину карты в 100% родительского контейнера
                            height: "auto", // Высота будет авто-адаптироваться, но медиазапросы помогут уточнить
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
                                width="100%" // Устанавливаем ширину фрейма в 100%
                                height="400" // Высоту можно изменить для адаптивности
                                frameBorder="1"
                                allowFullScreen
                                style={{
                                    position: "relative",
                                    zIndex: "11",
                                    border: "none",
                                    maxWidth: "100%"
                                }}
                                title="Wildberries Pickup Points in Moscow"
                            ></iframe>
                        </div>

                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
}
