import { Text, Heading, Img } from "./..";
import React, {useEffect, useState} from "react";

export default function ProductDetails({
                                           prop = "Хит",
                                           currentPrice = "3 300 ₽",
                                           discount = "–25%",
                                           oldPrice = "4 400 ₽",
                                           productDescription = "Комплект для детей и подростков",
                                           colorDescriptionOne = "Нежно-персиковый",
                                           colorDescriptionTwo = "Темно-синий",
                                           ru = "Универсальный RU ",
                                           // onClick,
                                            img="images/1.png",
                                            url="https://www.wildberries.ru/catalog/273375403/detail.aspx?targetUrl=GP",
                                           ...props
                                       }) {
    const handleClick = () => {
        // Переход на ссылку
        window.location.href = url;
    };
    const [isMobile, setIsMobile] = useState(window.innerWidth < 620);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 620);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const backgroundImageUrl = isMobile ? img.replace(/(\.[\w\d_-]+)$/i, '_mob$1') : img;

    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full gap-[1.00rem]`}
             onClick={handleClick} // Добавляем обработчик клика
        >
            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                maxHeight: "540px",
                borderRadius: "20px",
                zIndex: "0",
                width: '100%',
                height: '100%',
                background: "#F1F1F1"
            }}>

            </div>
            <div
                className={`flex h-[33.75rem] flex-col items-start self-stretch rounded-[20px]  bg-contain bg-center bg-no-repeat px-[0.88rem] py-[0.63rem] sm:h-auto`}
                style={{backgroundImage: `url(${backgroundImageUrl})`, minHeight: "540px", zIndex: "2"}}
            >

                <div className="flex gap-[0.38rem] self-stretch">
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-white"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                    <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders"/>
                </div>
                <div
                    className="mr-[0.88rem] mt-[0.88rem] flex min-h-[30px] max-w-[90px] h-[30px] w-[90px] items-center justify-center self-end bg-[url(/public/images/img_group.svg)] bg-cover bg-center bg-no-repeat sm:mr-0 sm:h-auto sm:w-full sm:px-[1.25rem]">
                    <Heading as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem] text-white">
                        {prop}
                    </Heading>
                </div>

            </div>
            <div className="flex flex-col items-start gap-[0.50rem] self-stretch px-[1.25rem] sm:gap-[0.50rem]">

                <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black sm:text-[0.94rem]">
                    {productDescription}
                </Text>
                <div className="flex gap-[0.94rem] self-stretch flex-wrap">
                    {/* Первый элемент с фиксированной минимальной шириной */}
                    <div className="flex w-auto gap-[0.63rem] flex-shrink-0">
                        <div className="flex items-center gap-[0.25rem]">
                            <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-light_peach"/>
                            <Text
                                size="1280_b2"
                                as="p"
                                className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
                            >
                                {colorDescriptionOne}
                            </Text>
                        </div>

                        {/* Второй элемент с фиксированной минимальной шириной */}
                        <div className="flex items-center gap-[0.13rem] flex-shrink-0">
                            <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-navy"/>
                            <Text
                                size="1280_b2"
                                as="p"
                                className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
                            >
                                {colorDescriptionTwo}
                            </Text>
                        </div>
                    </div>

                    {/* Третий элемент */}
                    <Text
                        size="1280_b2"
                        as="p"
                        className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent w-full sm:w-auto"
                    >
                        {ru}
                    </Text>
                </div>

            </div>
        </div>
    );
}

