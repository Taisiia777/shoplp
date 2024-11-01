// import { Text, Img, Slider } from "../../components";
// import React from "react";
//
// export default function HomeBannerSection() {
//     const [sliderState, setSliderState] = React.useState(0);
//     const sliderRef = React.useRef(null);
//
//     return (
//         <>
//             {/* home banner section */}
//             <div className="relative h-[36.25rem] content-center self-stretch md:h-auto">
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1212px] h-[50%] bg-gradient-to-t from-[#5A4A43] to-transparent opacity-100 z-10"/>
//
//                 <div className="MainSlider container-xs mx-auto flex w-full md:px-[1.25rem]">
//                     <Slider
//                         autoPlay
//                         autoPlayInterval={2000}
//                         responsive={{0: {items: 1}, 551: {items: 1}, 1051: {items: 1}}}
//                         renderDotsItem={(props) => {
//                             return props?.isActive ? (
//                                 <div
//                                     className="mr-[0.63rem] inline-block h-[0.38rem] w-[6.25rem] cursor-pointer rounded-[3px] bg-white"/>
//                             ) : (
//                                 <div
//                                     className="mr-[0.63rem] inline-block h-[0.38rem] w-[6.25rem] cursor-pointer rounded-[3px] bg-60__white_for_sliders"/>
//                             );
//                         }}
//                         activeIndex={sliderState}
//                         onSlideChanged={(e) => {
//                             setSliderState(e?.item);
//                         }}
//                         ref={sliderRef}
//                         items={[...Array(3)].map(() => (
//                             <React.Fragment key={Math.random()}>
//                                 <div
//                                     className="flex h-[36.25rem] flex-col items-center rounded-[20px] bg-[url('/images/img_banner_slider.png')] bg-cover bg-no-repeat p-[2.50rem] md:h-auto sm:p-[1.25rem]">
//                                     <div
//                                         className="mt-[6.13rem] flex w-[72%] flex-col  gap-[11.25rem] md:w-full md:gap-[8.44rem] sm:gap-[5.63rem]">
//                                         <Img
//                                             src="images/img_heart.svg"
//                                             alt="Heart Image"
//                                             className="ml-[18.25rem] h-[6.00rem] w-[6.00rem] md:ml-0"
//                                         />
//                                         <div className="flex">
//                                             <Text
//                                                 size="1280_h1"
//                                                 as="p"
//                                                 className="mb-[3.88rem] font-roundsblack text-[2.75rem] font-normal tracking-[0.06rem] text-white md:text-[2.50rem] sm:text-[2.13rem]"
//                                             >
//                                                 Создай свой уютный момент
//                                             </Text>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }
//
import { Text, Img, Slider } from "../../components";
import React from "react";

export default function HomeBannerSection() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    return (
        <>
            {/* home banner section */}
            <div className="relative h-[36.25rem] content-center self-stretch md:h-auto">
                <div className="MainSlider container-xs mx-auto flex w-full md:px-[1.25rem] relative z-10">
                    <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                        renderDotsItem={(props) => {
                            return props?.isActive ? (
                                <div className="mr-[0.63rem] inline-block h-[0.38rem] w-[6.25rem] cursor-pointer rounded-[3px] bg-white" />
                            ) : (
                                <div className="mr-[0.63rem] inline-block h-[0.38rem] w-[6.25rem] cursor-pointer rounded-[3px] bg-60__white_for_sliders" />
                            );
                        }}
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                            setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(3)].map(() => (
                            <React.Fragment key={Math.random()}>
                                {/* Контейнер слайдера */}
                                <div className="relative flex h-[36.25rem] flex-col items-center rounded-[20px] overflow-hidden">
                                    {/* Фоновое изображение */}
                                    <div className="absolute inset-0 bg-[url('/images/img_banner_slider.png')] bg-cover bg-no-repeat z-0" />

                                    {/* Градиентный слой поверх изображения */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A4A43] to-transparent opacity-80 rounded-b-[20px] z-10 pointer-events-none max-w-[1212px] mx-auto" />

                                    {/* Контент слайдера */}
                                    <div className="relative z-20 mt-[6.13rem] flex w-[72%] flex-col gap-[11.25rem] md:w-full md:gap-[8.44rem] sm:gap-[5.63rem]">
                                        <Img
                                            src="images/img_heart.svg"
                                            alt="Heart Image"
                                            className="ml-[18.25rem] h-[6.00rem] w-[6.00rem] md:ml-0"
                                        />
                                        <div className="flex">
                                            <Text
                                                size="1280_h1"
                                                as="p"
                                                className="mb-[3.88rem] font-roundsblack text-[2.75rem] font-normal tracking-[0.06rem] text-white md:text-[2.50rem] sm:text-[2.13rem]"
                                            >
                                                Создай свой уютный момент
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    />
                </div>
            </div>
        </>
    );
}
