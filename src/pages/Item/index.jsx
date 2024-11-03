//
// import { Helmet } from "react-helmet";
// import { SelectBox, Img, Text, Button, Heading, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
// import ColorRowDisplay from "../../components/ColorRowDisplay";
// import DeliveryOptions from "../../components/DeliveryOptions";
// import Header from "../../components/Header";
// import React, { useState, Suspense, useRef  } from "react";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../store/cartSlice';
// const productImages = [
//     "images/img_photo_580x598.png",
//     "images/img_photo_580x598_alt1.png",
//     "images/img_photo_580x598_alt2.png",
//     "images/img_photo_580x598_alt3.png",
//     "images/img_photo_580x598_alt4.png",
// ];
//
// const deliveryOptionsList = [
//     {
//         shopImage: "images/img_solar_shop_linear.svg",
//         pickupPointText: "В пунктах выдачи – бесплатно",
//         showPickupPointsText: "Показать пункты выдачи",
//     },
//     {
//         shopImage: "images/img_hugeicons_shipping_truck_01.svg",
//         pickupPointText: "Курьером – ?",
//         showPickupPointsText: "Показать пункты выдачи",
//     },
//     {
//         shopImage: "images/img_heroicons_receipt_refund.svg",
//         pickupPointText: "Удобный возврат худи",
//         showPickupPointsText: "Показать пункты выдачи",
//     },
// ];
// const dropDownOptions = [
//     { label: "Option1", value: "option1" },
//     { label: "Option2", value: "option2" },
//     { label: "Option3", value: "option3" },
// ];
//
// export default function ItemPage() {
//     const dispatch = useDispatch();
//     const [activeImage, setActiveImage] = useState(productImages[0]); // Track the current image
//     const [fadeOut, setFadeOut] = useState(false); // Control fade effect
//     const [isAnimating, setIsAnimating] = useState(false); // Control cart animation
//     const animationRef = useRef(null);
//
//     const handleImageChange = (newImage) => {
//         if (newImage === activeImage) return; // Prevent change if the image is the same
//
//         setFadeOut(true); // Start fade-out
//         setTimeout(() => {
//             setActiveImage(newImage); // Change the image after fade-out
//             setFadeOut(false); // Fade back in
//         }, 300);
//     };
//
//     // const handleAddToCart = () => {
//     //     const item = {
//     //         id: "2564873",
//     //         name: "Комплект для всей семьи",
//     //         price: 3300,
//     //         quantity: 1,
//     //     };
//     //     dispatch(addToCart(item)); // Dispatch addToCart action
//     // };
//     const handleAddToCart = () => {
//         const item = {
//             id: "2564873",
//             name: "Комплект для всей семьи",
//             price: 3300,
//             quantity: 1,
//         };
//         dispatch(addToCart(item));
//
//         // Trigger animation in Header
//         setIsAnimating(true);
//         setTimeout(() => setIsAnimating(false), 700); // Reset animation after 0.7s
//     };
//
//     return (
//         <>
//             <Helmet>
//                 <title>Family Set - Comfortable Hoodies for Everyone</title>
//                 <meta
//                     name="description"
//                     content="Shop our complete family hoodie set, made in Russia with love. Perfect for family moments, available in various colors and sizes with easy returns."
//                 />
//             </Helmet>
//
//             <div className="flex w-full flex-col items-center bg-white py-[1.25rem]">
//                 <div className="container-xs mb-[0.25rem] flex flex-col gap-[1.75rem] md:px-[1.25rem]">
//                     <Header isAnimating={isAnimating} />
//                     <div className="flex md:flex-col">
//                         <Breadcrumb
//                             separator={<Text
//                                 className="h-[1.19rem] w-[0.38rem] text-[0.75rem] font-normal text-colors">/</Text>}
//                             className="flex flex-1 flex-wrap items-center gap-[4px] md:self-stretch"
//                         >
//                             <BreadcrumbItem>
//                                 <BreadcrumbLink href="#">
//                                     <Text size="b3" as="p"
//                                           className="text-[0.75rem] font-normal text-secondary_accent">
//                                         Главная
//                                     </Text>
//                                 </BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbItem>
//                                 <BreadcrumbLink href="#">
//                                     <Text size="b3" as="p"
//                                           className="text-[0.75rem] font-normal text-secondary_accent">
//                                         Все худи
//                                     </Text>
//                                 </BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbItem isCurrentPage>
//                                 <BreadcrumbLink href="#">
//                                     <Text size="b3" as="p"
//                                           className="text-[0.75rem] font-normal text-secondary_accent">
//                                         Комплект на всю семью
//                                     </Text>
//                                 </BreadcrumbLink>
//                             </BreadcrumbItem>
//                         </Breadcrumb>
//                         <div className="flex w-[42%] justify-center gap-[0.63rem] md:w-full">
//                             <div className="flex flex-1 items-center justify-end">
//                                 <Img
//                                     src="images/img_solar_copy_outline.svg"
//                                     alt="Product Image"
//                                     className="h-[1.00rem] w-[1.00rem]"
//                                 />
//                                 <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
//                                     Артикул: 2564873
//                                 </Text>
//                             </div>
//                             <div className="flex items-center">
//                                 <Img src="images/img_ph_share_fat.svg" alt="Share Icon"
//                                      className="h-[1.00rem] w-[1.00rem]"/>
//                                 <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
//                                     Поделиться{" "}
//                                 </Text>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col gap-[1.00rem] mt-[-2.13rem]">
//                         <div className="flex items-center gap-[1.13rem] md:flex-col">
//                             <div className="flex flex-1 gap-[1.25rem] md:flex-col md:self-stretch">
//                                 {/* Thumbnail images for selecting the main image */}
//                                 <div
//                                     className="flex mt-[2.25rem] w-[12%] flex-col gap-[1.25rem] opacity-90 md:w-full md:flex-row sm:flex-col">
//                                     {productImages.map((image, index) => (
//                                         <Img
//                                             key={index}
//                                             src={image}
//                                             alt={`Thumbnail ${index + 1}`}
//                                             className={`h-[5.00rem] w-[5.13rem] rounded-[14px] cursor-pointer ${activeImage === image ? "border-2 border-[#CF7A48]" : "border-none"}`}
//                                             onClick={() => handleImageChange(image)}
//                                         />
//                                     ))}
//                                 </div>
//
//                                 {/* Main product image with fade transition */}
//                                 <div className="relative w-full flex justify-center items-center">
//                                     <Img
//                                         src={activeImage}
//                                         alt="Product Photo"
//                                         className={`h-[36.25rem] w-[88%] rounded-[20px] object-contain transition-opacity duration-300 ease-in-out md:w-full ${fadeOut ? "opacity-0" : "opacity-100"}`}
//                                     />
//                                 </div>
//                             </div>
//                             {/* Product details column */}
//                             <div className="flex w-[42%] flex-col gap-[1.88rem] md:w-full">
//                                 <div className="flex flex-col gap-[1.50rem] ml-[10px]">
//                                     {/* Product information */}
//                                     <div className="flex flex-col items-start gap-[0.25rem]">
//                                         <Text size="textxl" as="p"
//                                               className="font-roundsblack text-[1.38rem] font-normal tracking-[0.00rem] text-black">
//                                             Комплект для всей семьи
//                                         </Text>
//                                         <div className="flex gap-[0.63rem] self-stretch">
//                                             <div className="flex w-[30%] gap-[0.38rem]">
//                                                 <div className="flex w-[32%] items-center">
//                                                     <Img src="images/img_star.svg" alt="Rating Star Image"
//                                                          className="h-[1.13rem] w-[1.13rem] rounded-[1px]"/>
//                                                     <Text as="p"
//                                                           className="text-[0.88rem] font-normal text-black">4,9</Text>
//                                                 </div>
//                                                 <Text as="p"
//                                                       className="text-[0.88rem] font-normal text-secondary_accent">
//                                                     357 отзывов
//                                                 </Text>
//                                             </div>
//                                             <div className="flex flex-1 items-center gap-[0.38rem] px-[0.63rem]">
//                                                 <Img src="images/img_noto_v1_flag_for_flag_russia.svg"
//                                                      alt="Country Flag" className="h-[1.13rem] w-[1.13rem]"/>
//                                                 <Text as="p" className="text-[0.88rem] font-normal text-black">Сделано в
//                                                     России</Text>
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     {/* Price and other product details */}
//                                     <div className="flex flex-col gap-[1.00rem]">
//                                         <div className="flex flex-wrap items-center gap-[0.63rem]">
//                                             <Heading size="headingxl" as="h1"
//                                                      className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-black md:text-[2.13rem] sm:text-[2.00rem]">
//                                                 3 300 ₽
//                                             </Heading>
//                                             <Heading as="h2"
//                                                      className="text-[0.88rem] font-semibold tracking-[0.00rem] text-sale_red">–25%</Heading>
//                                             <Heading size="crossed_out_priced" as="h3"
//                                                      className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent line-through">
//                                                 4 400 ₽
//                                             </Heading>
//                                         </div>
//                                         <div className="flex flex-col gap-[0.50rem]">
//                                             <ColorRowDisplay/>
//                                             <div className="flex flex-wrap gap-[0.63rem]">
//                                                 <Text size="1280_b2" as="p"
//                                                       className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent">
//                                                     Размер
//                                                 </Text>
//                                                 <Text size="1280_b2" as="p"
//                                                       className="text-[0.88rem] font-normal tracking-[0.00rem] text-black">
//                                                     Универсальный RU
//                                                 </Text>
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     {/* Add to Cart Button */}
//                                     <Button
//                                         size="md"
//                                         shape="round"
//                                         color="orange_50_deep_orange_200"
//                                         className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
//                             hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
//                                         onClick={handleAddToCart}
//                                     >
//                                         Добавить в корзину
//                                     </Button>
//                                                                          <div className="flex flex-row gap-[1.13rem]">
//                                                                              <div className="flex items-center gap-[0.38rem]">
//                                                                                  <Text size="1280_h4" as="p"
//                                                                                       className="text-[1.13rem] font-normal text-black">
//                                                                                     Доставка в
//                                                                                 </Text>
//                                                                             </div>
//                                                                             <SelectBox
//                                                                                 shape="square"
//                                                                                 indicator={
//                                                                                     <Img
//                                                                                         src="images/img_arrow_down_black.svg"
//                                                                                         alt="Arrow Down"
//                                                                                         className="h-[0.75rem] w-[0.75rem]"
//                                                                                     />
//                                                                                 }
//                                                                                 name="Delivery Dropdown"
//                                                                                 placeholder={'Москва'}
//                                                                                 options={dropDownOptions}
//                                                                                 className="w-[16%] gap-[0.25rem] !border-b px-[0.75rem]"
//                                                                             />
//                                                                         </div>
//                                     {/* Delivery Options */}
//                                     <div className="flex flex-col gap-[1.00rem]">
//                                         <Suspense fallback={<div>Loading feed...</div>}>
//                                             {deliveryOptionsList.map((d, index) => (
//                                                 <DeliveryOptions {...d} key={"pickupPointsList" + index}/>
//                                             ))}
//                                         </Suspense>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
import React, { useState, useEffect, Suspense, useRef  } from "react";
import { Helmet } from "react-helmet";
import { SelectBox, Img, Text, Button, Heading, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import ColorRowDisplay from "../../components/ColorRowDisplay";
import DeliveryOptions from "../../components/DeliveryOptions";
import Header from "../../components/Header";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const productImages = [
    "images/img_photo_580x598.png",
    "images/img_photo_580x598_alt1.png",
    "images/img_photo_580x598_alt2.png",
    "images/img_photo_580x598_alt3.png",
    "images/img_photo_580x598_alt4.png",
];

const deliveryOptionsList = [
    {
        shopImage: "images/img_solar_shop_linear.svg",
        pickupPointText: "В пунктах выдачи – бесплатно",
        showPickupPointsText: "Показать пункты выдачи",
    },
    {
        shopImage: "images/img_hugeicons_shipping_truck_01.svg",
        pickupPointText: "Курьером – ?",
        showPickupPointsText: "Показать пункты выдачи",
    },
    {
        shopImage: "images/img_heroicons_receipt_refund.svg",
        pickupPointText: "Удобный возврат худи",
        showPickupPointsText: "Показать пункты выдачи",
    },
];
const dropDownOptions = [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Казань", value: "kazan" },
];
export default function ItemPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
    const dispatch = useDispatch();
    const [activeImage, setActiveImage] = useState(productImages[0]); // Track the current image
    const [fadeOut, setFadeOut] = useState(false); // Control fade effect
    const [isAnimating, setIsAnimating] = useState(false); // Control cart animation
    const animationRef = useRef(null);

    const handleImageChange = (newImage) => {
        if (newImage === activeImage) return; // Prevent change if the image is the same

        setFadeOut(true); // Start fade-out
        setTimeout(() => {
            setActiveImage(newImage); // Change the image after fade-out
            setFadeOut(false); // Fade back in
        }, 300);
    };

    const handleAddToCart = () => {
        const item = {
            id: "2564873",
            name: "Комплект для всей семьи",
            price: 3300,
            quantity: 1,
        };
        dispatch(addToCart(item));

        // Trigger animation in Header
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 700); // Reset animation after 0.7s
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 550);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <div className="flex w-full flex-col items-center bg-white py-[1.25rem] mt-[60px]">
                    <div className="container-xs mb-[0.25rem] flex flex-col gap-[1.75rem] md:px-[1.25rem]">
                        <Header isAnimating={isAnimating}/>
                        <div className="flex flex-col items-start pl-5 w-full">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={-50} // Space between slides
                                slidesPerView={1} // Shows one slide at a time
                                centeredSlides={false} // Disables centering
                                loop={true}
                                style={{
                                    maxWidth: '350px', // Ensures the width doesn’t exceed the container on mobile
                                }}
                            >
                                {productImages.map((image, index) => (
                                    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <img
                                            src={image}
                                            alt={`Product Image ${index + 1}`}
                                            className="object-cover w-[290px] h-[450px] rounded-3xl"
                                            style={{
                                                minWidth: '290px', // Fixes the width of each image
                                                marginRight: '4px', // Adds spacing between slides
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/*<div data-layername="frame" className="flex gap-1 items-center self-stretch mt-2.5">*/}
                            {/*    <img*/}
                            {/*        loading="lazy"*/}
                            {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af65192e9121707e212a68f78dc55f20492584415c38c705ecc823bcec5dc0ed?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"*/}
                            {/*        alt="Product"*/}
                            {/*        className="object-contain self-stretch my-auto rounded-3xl aspect-[0.64] min-w-[240px] w-[290px]"*/}
                            {/*    />*/}
                            {/*    <img*/}
                            {/*        loading="lazy"*/}
                            {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99c711052b9e9c1d2e3cdbdc57d6c0d507ebcaf68a27b861ee498b054eaec088?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"*/}
                            {/*        alt=""*/}
                            {/*        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[0.14] w-[61px]"*/}
                            {/*    />*/}
                            {/*</div>*/}
                            <div data-layername="frame" className="flex flex-col mt-2.5">
                                <div data-layername="frame" className="flex flex-col w-full text-sm">
                                    <div data-layername="frame"
                                         className="flex flex-col justify-center items-start w-full">
                                        <div data-layername="frame" className="flex gap-5 items-start">
                                            <div data-layername="frame" className="flex gap-1.5 items-center">
                                                <div data-layername="frame"
                                                     className="flex gap-0.5 justify-center items-center self-stretch my-auto text-black whitespace-nowrap">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce6afa29233630bd7381e6db46f035701b9cfc7c9793612e0498101825b693f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                                                        alt=""
                                                        className="object-contain shrink-0 self-stretch my-auto rounded-sm aspect-square w-[18px]"
                                                    />
                                                    <div data-layername="49" className="self-stretch my-auto">4,9</div>
                                                </div>
                                                <div data-layername="327Отзывов"
                                                     className="self-stretch my-auto text-zinc-500">
                                                    327 отзывов
                                                </div>
                                            </div>
                                            <div data-layername="frame"
                                                 className="flex gap-1.5 justify-center items-center text-black">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2564ba381ca1a65f0562f14b1ddbe6ccbe145e9f28e40aed1ac3cdbe8e72c47f?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                                                    alt=""
                                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                                />
                                                <div data-layername="сделаноВРоссии" className="self-stretch my-auto">
                                                    Сделано в России
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1
                                        data-layername="плюшевоеОверсайзХудиНаРебенкаИПодростка"
                                        className="mt-2.5 text-lg tracking-wide leading-6 text-black"
                                    >
                                        Плюшевое оверсайз худи на ребенка и подростка
                                    </h1>
                                    <div data-layername="frame" className="flex flex-col mt-2.5 tracking-normal">
                                        <div data-layername="цена"
                                             className="flex gap-2.5 justify-center items-center self-start">
                                            <div
                                                data-layername="3300₽"
                                                className="self-stretch my-auto text-2xl font-extrabold tracking-wide text-black"
                                            >
                                                3 300 ₽
                                            </div>
                                            <div data-layername="25"
                                                 className="self-stretch my-auto font-semibold text-red-700">
                                                –25%
                                            </div>
                                            <div data-layername="4400₽"
                                                 className="self-stretch my-auto font-medium text-zinc-500">
                                                4 400 ₽
                                            </div>
                                        </div>
                                        <div data-layername="параметры" className="flex flex-col mt-2.5">
                                            <div data-layername="frame"
                                                 className="flex gap-2.5 items-start text-black whitespace-nowrap">
                                                <div data-layername="цвет" className="text-zinc-500">Цвет</div>
                                                <div data-layername="frame" className="flex gap-1.5 items-center">
                                                    <div
                                                        data-layername="color"
                                                        className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-amber-100 border-2 border-orange-300 border-solid rounded-[100px]"
                                                    />
                                                    <div data-layername="нежноПерсиковый"
                                                         className="self-stretch my-auto">
                                                        Нежно-персиковый
                                                    </div>
                                                </div>
                                                <div data-layername="frame" className="flex gap-1.5 items-center">
                                                    <div
                                                        data-layername="color"
                                                        className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-slate-600 rounded-[100px]"
                                                    />
                                                    <div data-layername="темноСиний" className="self-stretch my-auto">
                                                        Темно-синий
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-layername="frame"
                                                className="flex gap-2.5 justify-center items-center mt-2.5 text-zinc-500"
                                            >
                                                <div data-layername="размер" className="self-stretch my-auto">
                                                    Размер
                                                </div>
                                                <div data-layername="универсальныйRu"
                                                     className="self-stretch my-auto text-black">
                                                    Универсальный RU
                                                </div>
                                                <div
                                                    data-layername="модельРост134См"
                                                    className="self-stretch my-auto text-xs tracking-normal"
                                                >
                                                    Модель: рост 134 см
                                                </div>
                                            </div>

                                            <Button
                                                size="md"
                                                shape="round"
                                                color="orange_50_deep_orange_200"
                                                className="self-stretch mt-[20px] rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
                            hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
                                                onClick={handleAddToCart}
                                            >
                                                Добавить в корзину
                                            </Button>
                                            <div className="flex flex-col gap-4 mt-4">
                                                {/* Location Selection Row */}
                                                <div className="flex items-center gap-2">
                                                    <Text as="p" className="text-[1.13rem] font-normal text-black">
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
                                                        name="Delivery Dropdown"
                                                        placeholder="Москва"
                                                        options={dropDownOptions}
                                                        className="border-b border-dashed border-black px-2 text-[1.13rem]"
                                                    />
                                                </div>

                                                {/* Delivery Options */}
                                                <div className="flex flex-col gap-4">
                                                    {deliveryOptionsList.map((option, index) => (
                                                        <div key={index} className="flex items-start gap-3">
                                                            {/* Icon */}
                                                            <Img src={option.shopImage} alt="Delivery Icon"
                                                                 className="h-5 w-5 mt-1"/>

                                                            {/* Option Details */}
                                                            <div className="flex flex-col">
                                                                <Text as="p"
                                                                      className="text-[1rem] font-medium text-black">
                                                                    {option.pickupPointText}
                                                                </Text>
                                                                <Text as="p"
                                                                      className="text-[0.88rem] text-gray-500 underline">
                                                                    {option.showPickupPointsText}
                                                                </Text>
                                                            </div>

                                                            {/* Tooltip Icon */}
                                                            <div className="ml-auto">
                                                                <Img src="/public/images/img_el_question.svg" alt="Info Icon"
                                                                     className="h-4 w-4 mt-1"/>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Helmet>
                        <title>Family Set - Comfortable Hoodies for Everyone</title>
                        <meta
                            name="description"
                            content="Shop our complete family hoodie set, made in Russia with love. Perfect for family moments, available in various colors and sizes with easy returns."
                        />
                    </Helmet>

                    <div className="flex w-full flex-col items-center bg-white py-[1.25rem] mt-[60px]">
                        <div className="container-xs mb-[0.25rem] flex flex-col gap-[1.75rem] md:px-[1.25rem]">
                            <Header isAnimating={isAnimating}/>
                            <div className="flex md:flex-col">
                                <Breadcrumb
                                    separator={<Text
                                        className="h-[1.19rem] w-[0.38rem] text-[0.75rem] font-normal text-colors">/</Text>}
                                    className="flex flex-1 flex-wrap items-center gap-[4px] md:self-stretch"
                                >
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="#">
                                            <Text size="b3" as="p"
                                                  className="text-[0.75rem] font-normal text-secondary_accent">
                                                Главная
                                            </Text>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="#">
                                                    <Text size="b3" as="p"
                                                          className="text-[0.75rem] font-normal text-secondary_accent">
                                                        Все худи
                                                    </Text>
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbItem isCurrentPage>
                                                <BreadcrumbLink href="#">
                                                    <Text size="b3" as="p"
                                                          className="text-[0.75rem] font-normal text-secondary_accent">
                                                        Комплект на всю семью
                                                    </Text>
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </Breadcrumb>
                                        <div className="flex w-[42%] justify-center gap-[0.63rem] md:w-full">
                                            <div className="flex flex-1 items-center justify-end">
                                                <Img
                                                    src="images/img_solar_copy_outline.svg"
                                                    alt="Product Image"
                                                    className="h-[1.00rem] w-[1.00rem]"
                                                />
                                                <Text size="b3" as="p"
                                                      className="text-[0.75rem] font-normal text-secondary_accent">
                                                    Артикул: 2564873
                                                </Text>
                                            </div>
                                            <div className="flex items-center">
                                                <Img src="images/img_ph_share_fat.svg" alt="Share Icon"
                                                     className="h-[1.00rem] w-[1.00rem]"/>
                                                <Text size="b3" as="p"
                                                      className="text-[0.75rem] font-normal text-secondary_accent">
                                                    Поделиться{" "}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[1.00rem] mt-[-2.13rem]">
                                        <div className="flex items-center gap-[1.13rem] md:flex-col">
                                            <div className="flex flex-1 gap-[1.25rem] md:flex-col md:self-stretch">
                                                {/* Thumbnail images for selecting the main image */}
                                                <div
                                                    className="flex mt-[2.25rem] w-[12%] flex-col gap-[1.25rem] opacity-90 md:w-full md:flex-row sm:flex-col">
                                                    {productImages.map((image, index) => (
                                                        <Img
                                                            key={index}
                                                            src={image}
                                                            alt={`Thumbnail ${index + 1}`}
                                                            className={`h-[5.00rem] w-[5.13rem] rounded-[14px] cursor-pointer ${activeImage === image ? "border-2 border-[#CF7A48]" : "border-none"}`}
                                                            onClick={() => handleImageChange(image)}
                                                        />
                                                    ))}
                                                </div>

                                                {/* Main product image with fade transition */}
                                                <div className="relative w-full flex justify-center items-center">
                                                    <Img
                                                        src={activeImage}
                                                        alt="Product Photo"
                                                        className={`h-[36.25rem] w-[88%] rounded-[20px] object-contain transition-opacity duration-300 ease-in-out md:w-full ${fadeOut ? "opacity-0" : "opacity-100"}`}
                                                    />
                                                </div>
                                            </div>
                                            {/* Product details column */}
                                            <div className="flex w-[42%] flex-col gap-[1.88rem] md:w-full">
                                                <div className="flex flex-col gap-[1.50rem] ml-[10px]">
                                                    {/* Product information */}
                                                    <div className="flex flex-col items-start gap-[0.25rem]">
                                                        <Text size="textxl" as="p"
                                                              className="font-roundsblack text-[1.38rem] font-normal tracking-[0.00rem] text-black">
                                                            Комплект для всей семьи
                                                        </Text>
                                                        <div className="flex gap-[0.63rem] self-stretch">
                                                            <div className="flex w-[30%] gap-[0.38rem]">
                                                                <div className="flex w-[32%] items-center">
                                                                    <Img src="images/img_star.svg"
                                                                         alt="Rating Star Image"
                                                                         className="h-[1.13rem] w-[1.13rem] rounded-[1px]"/>
                                                                    <Text as="p"
                                                                          className="text-[0.88rem] font-normal text-black">4,9</Text>
                                                                </div>
                                                                <Text as="p"
                                                                      className="text-[0.88rem] font-normal text-secondary_accent">
                                                                    357 отзывов
                                                                </Text>
                                                            </div>
                                                            <div
                                                                className="flex flex-1 items-center gap-[0.38rem] px-[0.63rem]">
                                                                <Img src="images/img_noto_v1_flag_for_flag_russia.svg"
                                                                     alt="Country Flag"
                                                                     className="h-[1.13rem] w-[1.13rem]"/>
                                                                <Text as="p"
                                                                      className="text-[0.88rem] font-normal text-black">Сделано
                                                                    в
                                                                    России</Text>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Price and other product details */}
                                                    <div className="flex flex-col gap-[1.00rem]">
                                                        <div className="flex flex-wrap items-center gap-[0.63rem]">
                                                            <Heading size="headingxl" as="h1"
                                                                     className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-black md:text-[2.13rem] sm:text-[2.00rem]">
                                                                3 300 ₽
                                                            </Heading>
                                                            <Heading as="h2"
                                                                     className="text-[0.88rem] font-semibold tracking-[0.00rem] text-sale_red">–25%</Heading>
                                                            <Heading size="crossed_out_priced" as="h3"
                                                                     className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent line-through">
                                                                4 400 ₽
                                                            </Heading>
                                                        </div>
                                                        <div className="flex flex-col gap-[0.50rem]">
                                                            <ColorRowDisplay/>
                                                            <div className="flex flex-wrap gap-[0.63rem]">
                                                                <Text size="1280_b2" as="p"
                                                                      className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent">
                                                                    Размер
                                                                </Text>
                                                                <Text size="1280_b2" as="p"
                                                                      className="text-[0.88rem] font-normal tracking-[0.00rem] text-black">
                                                                    Универсальный RU
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Add to Cart Button */}
                                                    <Button
                                                        size="md"
                                                        shape="round"
                                                        color="orange_50_deep_orange_200"
                                                        className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
                            hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
                                                        onClick={handleAddToCart}
                                                    >
                                                        Добавить в корзину
                                                    </Button>
                                                    <div className="flex flex-row gap-[1.13rem]">
                                                        <div className="flex items-center gap-[0.38rem]">
                                                            <Text size="1280_h4" as="p"
                                                                  className="text-[1.13rem] font-normal text-black">
                                                                Доставка в
                                                            </Text>
                                                        </div>
                                                        <SelectBox
                                                            shape="square"
                                                            indicator={
                                                                <Img
                                                                    src="images/img_arrow_down_black.svg"
                                                                    alt="Arrow Down"
                                                                    className="h-[0.75rem] w-[0.75rem]"
                                                                />
                                                            }
                                                            name="Delivery Dropdown"
                                                            placeholder={'Москва'}
                                                            options={dropDownOptions}
                                                            className="w-[16%] gap-[0.25rem] !border-b px-[0.75rem]"
                                                        />
                                                    </div>
                                                    {/* Delivery Options */}
                                                    <div className="flex flex-col gap-[1.00rem]">
                                                        <Suspense fallback={<div>Loading feed...</div>}>
                                                            {deliveryOptionsList.map((d, index) => (
                                                                <DeliveryOptions {...d}
                                                                                 key={"pickupPointsList" + index}/>
                                                            ))}
                                                        </Suspense>
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
