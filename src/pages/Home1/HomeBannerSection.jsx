//
// import { Text, Img, Slider } from "../../components";
// import React, { useState, useEffect } from "react";
//
// export default function HomeBannerSection() {
//     const [sliderState, setSliderState] = React.useState(0);
//     const sliderRef = React.useRef(null);
//
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 620);
//
//     useEffect(() => {
//         // Обновляем состояние при изменении ширины экрана
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 620);
//         };
//
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);
//
//     return (
//         <>
//             {/* home banner section */}
//             <div className={`relative content-center self-stretch ${isMobile ? 'h-[400px]' : 'h-[36.25rem]'}`}>
//                 <div className="MainSlider container-xs mx-auto flex w-full md:px-[1.25rem] relative z-10">
//                     <Slider
//                         autoPlay
//                         autoPlayInterval={2000}
//                         responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
//                         renderDotsItem={(props) => {
//                             const isMobile = window.innerWidth < 620; // Проверка ширины экрана
//
//                             return (
//                                 <div
//                                     className={`inline-block h-[4px] ${
//                                         isMobile ? "w-[80px]" : "w-[100px]"
//                                     } rounded-full cursor-pointer mr-2 ${
//                                         props.isActive ? "bg-white" : "bg-gray-400"
//                                     }`}
//                                 />
//                             );
//                         }}
//                         activeIndex={sliderState}
//                         onSlideChanged={(e) => {
//                             setSliderState(e?.item);
//                         }}
//                         ref={sliderRef}
//                         items={[...Array(3)].map((_, index) => (
//                             <div
//                                 key={index}
//                                 className={`relative flex flex-col items-center rounded-[20px] overflow-hidden ${isMobile ? 'h-[400px]' : 'h-[36.25rem]'}`}
//                             >
//                                 {/* Фоновое изображение с обрезкой по ширине и масштабированием по высоте */}
//                                 <div className="absolute inset-0 bg-[url('/images/img_banner_slider.png')] bg-cover bg-center z-0" />
//
//                                 {/* Градиентный слой поверх изображения */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-[#5A4A43] to-transparent opacity-90 rounded-b-[20px] z-10 pointer-events-none max-w-[1212px] mx-auto" />
//
//                                 {/* Контент слайдера */}
//                                 <div className={`relative z-20 flex flex-col items-center text-center w-full ${isMobile ? 'mt-10 gap-6' : 'mt-[6.13rem] gap-[11.25rem]'}`}>
//                                     <Text
//                                         size="1280_h1"
//                                         as="p"
//                                         className={`font-roundsblack mt-[28%] text-white ${isMobile ? 'text-2xl leading-snug text-left' : 'text-[2.75rem]'} font-normal tracking-[0.06rem] px-4`}
//                                     >
//                                         Создай свой уютный момент
//                                     </Text>
//                                 </div>
//
//
//                             </div>
//                         ))}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }
//
import { Text, Slider } from "../../components";
import React, { useState, useEffect } from "react";

export default function HomeBannerSection() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 620);

    useEffect(() => {
        // Обновляем состояние при изменении ширины экрана
        const handleResize = () => {
            setIsMobile(window.innerWidth < 620);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* home banner section */}
            <div className={`relative content-center self-stretch ${isMobile ? 'h-[400px]' : 'h-[36.25rem]'}`}>
                <div className="MainSlider container-xs mx-auto flex w-full md:px-[1.25rem] relative z-10">
                    <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                        renderDotsItem={(props) => {
                            const isMobile = window.innerWidth < 620; // Проверка ширины экрана

                            return (
                                <div
                                    className={`inline-block h-[4px] ${
                                        isMobile ? "w-[80px]" : "w-[100px]"
                                    } rounded-full cursor-pointer mr-2 ${
                                        props.isActive ? "bg-white" : "bg-gray-400"
                                    }`}
                                />
                            );
                        }}
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                            setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-center rounded-[20px] overflow-hidden ${isMobile ? 'h-[400px]' : 'h-[36.25rem]'}`}
                            >
                                {/* Фоновое изображение с contain и центрированием */}
                                <div className="absolute inset-0 bg-[url('/images/img_banner_slider.png')] bg-contain bg-center bg-no-repeat z-0" />

                                {/* Градиентный слой поверх изображения */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#5A4A43] max-h-[70%] mt-[40%] to-transparent opacity-90 rounded-b-[20px] z-10 pointer-events-none max-w-[1212px] mx-auto" />

                                {/* Контент слайдера */}
                                <div className={`relative z-20 flex flex-col items-center text-center w-full ${isMobile ? 'mt-10 gap-6' : 'mt-[6.13rem] gap-[11.25rem]'}`}>
                                    <Text
                                        size="1280_h1"
                                        as="p"
                                        className={`font-roundsblack  text-white ${isMobile ? 'text-2xl leading-snug text-left mt-[40%]' : 'mt-[28%] text-[2.75rem]'} font-normal tracking-[0.06rem] px-4`}
                                    >
                                        Создай свой уютный момент
                                    </Text>
                                </div>
                            </div>
                        ))}
                    />
                </div>
            </div>
        </>
    );
}
