
import { Text, Slider } from "../../components";
import React, { useState, useEffect } from "react";

export default function HomeBannerSection() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 620);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 620);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slides = [
        // {
        //     image: "/images/img_banner_slider.png",
        //     text: "Создай свой уютный момент",
        //     customTextStyles: "mb-[20vh] ml-auto mr-auto", // Без дополнительных стилей для первого слайда
        // },
        // {
        //     image: "/images/img_slider_2.png",
        //     text: "Худи на все\nслучаи жизни",
        //     customTextStyles: "text-left px-4 whitespace-pre-line mt-[20vh] ml-[1rem]", // Специальные стили для второго слайда
        // }
        {
            image: "/images/img_banner_slider.png",
            text: "Создай свой уютный момент",
            customTextStyles: `mb-[20vh] ml-auto mr-auto ${isMobile ? 'mt-[20vh] text-[2rem] ' : 'mt-[35vh] text-[3rem]'}`, // Условное применение отступа и размера текста
        },
        {
            image: "/images/img_slider_2.png",
            text: "Худи на все\nслучаи жизни",
            customTextStyles: `text-left px-4 whitespace-pre-line ml-[1rem] ${isMobile ? 'mt-[20vh] text-[2rem]' : 'mt-[30vh] text-[3rem]'}`, // Условные стили для второго слайда
        }
    ];

    return (
        <div className={`relative content-center self-stretch ${isMobile ? 'h-[400px] mt-[2rem]' : 'h-[36.25rem]'}`}>
            <div className="MainSlider container-xs mx-auto flex w-full md:px-[1.25rem] relative z-10">
                <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                    renderDotsItem={(props) => (
                        <div
                            className={`inline-block h-[4px] ${
                                isMobile ? "w-[80px]" : "w-[100px]"
                            } rounded-full cursor-pointer mr-2 ${
                                props.isActive ? "bg-white" : "bg-gray-400"
                            }`}
                        />
                    )}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => setSliderState(e?.item)}
                    ref={sliderRef}
                    items={slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center rounded-[20px] overflow-hidden ${isMobile ? 'h-[400px]' : 'h-[36.25rem]'}`}
                        >
                            {/* Фоновое изображение */}
                            <div
                                className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0`}
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />

                            {/* Градиентный слой поверх изображения */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5A4A43] max-h-[70%] mt-[40%] to-transparent opacity-90 rounded-b-[20px] z-10 pointer-events-none max-w-[1212px] mx-auto" />

                            {/* Контент слайдера */}
                            <div
                                className={`relative z-20 flex ${
                                    index === 0 ? 'items-center' : 'items-start'
                                } text-center w-full ${isMobile ? 'mt-10 gap-6' : 'mt-[6.13rem] gap-[11.25rem]'}`}
                            >
                                <Text
                                    size="1280_h1"
                                    as="p"
                                    className={`font-roundsblack text-white ${
                                        isMobile ? 'text-2xl leading-snug' : 'text-[2.75rem]'
                                    } font-normal tracking-[0.06rem] px-4 ${
                                        slide.customTextStyles
                                    }`}
                                >
                                    {slide.text}
                                </Text>
                            </div>
                        </div>
                    ))}
                />
            </div>
        </div>
    );
}
