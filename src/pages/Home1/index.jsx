// import { Helmet } from "react-helmet";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import ProductDetails from "../../components/ProductDetails";
// import HomeBannerSection from "./HomeBannerSection";
// import React, { Suspense } from "react";
// import { useNavigate } from 'react-router-dom';
//
// const productHighlightsGrid = [
//     {
//         prop: "Хит",
//         currentPrice: "3 300 ₽",
//         discount: "–25%",
//         oldPrice: "4 400 ₽",
//         productDescription: "Комплект для детей и подростков",
//         colorDescriptionOne: "Нежно-персиковый",
//         colorDescriptionTwo: "Темно-синий",
//         ru: "Универсальный RU ",
//     },
//     {
//         prop: "Хит",
//         currentPrice: "3 300 ₽",
//         discount: "–25%",
//         oldPrice: "4 400 ₽",
//         productDescription: "Плюшевое оверсайз худи на ребенка и подростка",
//         colorDescriptionOne: "Нежно-персиковый",
//         colorDescriptionTwo: "Темно-синий",
//         ru: "Универсальный RU",
//     },
//     {
//         prop: "Хит",
//         currentPrice: "3 300 ₽",
//         discount: "–25%",
//         oldPrice: "4 400 ₽",
//         productDescription: "Комплект для детей и подростков",
//         colorDescriptionOne: "Нежно-персиковый",
//         colorDescriptionTwo: "Темно-синий",
//         ru: "Универсальный RU ",
//     },
//     {
//         prop: "Хит",
//         currentPrice: "3 300 ₽",
//         discount: "–25%",
//         oldPrice: "4 400 ₽",
//         productDescription: "Комплект на всю семью",
//         colorDescriptionOne: "Нежно-персиковый",
//         colorDescriptionTwo: "Темно-синий",
//         ru: "Универсальный RU",
//     },
//     {
//         prop: "Хит",
//         currentPrice: "3 300 ₽",
//         discount: "–25%",
//         oldPrice: "4 400 ₽",
//         productDescription: "Плюшевое оверсайз худи на взрослого",
//         colorDescriptionOne: "Нежно-персиковый",
//         colorDescriptionTwo: "Темно-синий",
//         ru: "Универсальный RU",
//     },
//     {
//         prop: "Хит",
//         currentPrice: "3 300 ₽",
//         discount: "–25%",
//         oldPrice: "4 400 ₽",
//         productDescription: "Плюшевое оверсайз худи на взрослого",
//         colorDescriptionOne: "Нежно-персиковый",
//         colorDescriptionTwo: "Темно-синий",
//         ru: "Универсальный RU",
//     },
//     {
//         prop: "Хит",
//         currentPrice: "3 300 ₽",
//         discount: "–25%",
//         oldPrice: "4 400 ₽",
//         productDescription: "Комплект для взрослых",
//         colorDescriptionOne: "Нежно-персиковый",
//         colorDescriptionTwo: "Темно-синий",
//         ru: "Универсальный RU",
//     },
// ];
//
// export default function Home1Page() {
//     const navigate = useNavigate();
//
//     const handleProductClick = () => {
//         navigate('/item');
//     };
//     return (
//         <>
//             <Helmet>
//                 <title>Home - Cozy Hoodies for the Whole Family</title>
//                 <meta
//                     name="description"
//                     content="Discover our collection of plush oversized hoodies for children, teens, and adults. Enjoy special discounts and create your cozy moment with our family sets."
//                 />
//             </Helmet>
//             <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
//                 <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
//                     <Header />
//                 </div>
//                 <div className="flex flex-col gap-[5.50rem] self-stretch md:gap-[4.13rem] sm:gap-[2.75rem]">
//                     <div className="flex flex-col items-center gap-[5.63rem] md:gap-[4.19rem] sm:gap-[2.81rem]">
//                         {/* home banner section */}
//                         <HomeBannerSection />
//                         <div className="container-xs md:px-[1.25rem]">
//                             <div className="grid grid-cols-2 justify-center gap-[1.88rem] md:grid-cols-1">
//                                 <Suspense fallback={<div>Loading feed...</div>}>
//                                     {productHighlightsGrid.map((d, index) => (
//                                         <ProductDetails {...d} key={"homeGrid" + index} onClick={handleProductClick}/>
//                                     ))}
//                                 </Suspense>
//                             </div>
//                         </div>
//                     </div>
//                     <Footer />
//                 </div>
//             </div>
//         </>
//     );
// }
//
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetails from "../../components/ProductDetails";
import HomeBannerSection from "./HomeBannerSection";
import { Suspense } from "react";
import { useNavigate } from 'react-router-dom';

const productHighlightsGrid = [
    {
        prop: "Хит",
        currentPrice: "3 300 ₽",
        discount: "–25%",
        oldPrice: "4 400 ₽",
        productDescription: "Комплект для детей и подростков",
        colorDescriptionOne: "Нежно-персиковый",
        colorDescriptionTwo: "Темно-синий",
        ru: "Универсальный RU ",
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
    },
    // Other products...
];

export default function Home1Page() {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate('/item');
    };

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
                        <HomeBannerSection />
                        <div className="container-xs md:px-[1.25rem]">
                            <div className="grid grid-cols-2 justify-center gap-[1.88rem] md:grid-cols-1">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {productHighlightsGrid.map((d, index) => (
                                        <ProductDetails
                                            {...d}
                                            key={"homeGrid" + index}
                                            onClick={handleProductClick}
                                            className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                                        />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
