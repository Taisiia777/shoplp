// import { Helmet } from "react-helmet";
// import { Text, RatingBar, Heading, Img, SelectBox, Button, Radio } from "../../components";
// import DeliveryOptions1 from "../../components/DeliveryOptions1";
// import Footer from "../../components/Footer";
// import MegaMenu1 from "../../components/MegaMenu1";
// import RatingRow from "../../components/RatingRow";
// import UserProfile from "../../components/UserProfile";
// import UserProfileImage from "../../components/UserProfileImage";
// import React, { Suspense, useState } from "react";
// import Header from "components/Header";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../store/cartSlice';
//
// import {
//     AccordionItemPanel,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemState,
//     Accordion,
//     AccordionItem,
// } from "react-accessible-accordion";
// import {useNavigate} from "react-router-dom";
//
// const productImages = [
//     "images/img_photo_580x598.png",
//     "images/img_photo_580x598_alt1.png",
//     "images/img_photo_580x598_alt2.png",
//     "images/img_photo_580x598_alt3.png",
//     "images/img_photo_580x598_alt4.png",
// ];
// const customerReviewsList = [
//     { userName: "А", userFullName: "Алиса К.", userJoinDate: "11 сентября 2024 года", prop: "Стильно, удобно, оверсайз" },
//     {
//         userName: "Д",
//         userFullName: "Алиса К.",
//         userJoinDate: "11 сентября 2024 года",
//         prop: "images/img_rectangle_200x180.png",
//     },
//     { userName: "А", userFullName: "Алексей Д.", userJoinDate: "6 августа 2024 года", prop: "Стильно, удобно, оверсайз" },
//     { userName: "Д", userFullName: "Дарья К.", userJoinDate: "21 сентября 2024 года", prop: "Стильно, удобно, оверсайз" },
// ];
// const ratingList = [
//     { ratingText: "5 звезд", groupImage: "images/img_group_gray_400.svg", reviewCount: "292" },
//     { ratingText: "4 звезды", groupImage: "images/img_group_gray_400.svg", reviewCount: "35" },
//     { ratingText: "3 звезды", groupImage: "images/img_group_gray_400_1x370.svg", reviewCount: "0" },
//     { ratingText: "2 звезды", groupImage: "images/img_group_gray_400_1x370.svg", reviewCount: "0" },
//     { ratingText: "1 звезда", groupImage: "images/img_group_gray_400_1x370.svg", reviewCount: "0" },
// ];
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
// const accordionData = [
//     {
//         sizeDescriptionText: "Описание размера",
//     },
//     {
//         sizeDescriptionText: "Состав и параметры",
//     },
//     {
//         sizeDescriptionText: "Рекомендации по уходу",
//     },
//     {
//         sizeDescriptionText: "Доставка и возврат",
//     },
// ];
// const dropDownOptions = [
//     { label: "Option1", value: "option1" },
//     { label: "Option2", value: "option2" },
//     { label: "Option3", value: "option3" },
// ];
//
// export default function CardPage() {
//     const dispatch = useDispatch();
//
//     const [menuOpen, setMenuOpen] = React.useState(false);
//     const navigate = useNavigate();
//     const [activeImage, setActiveImage] = useState(productImages[0]); // Track the current image
//     const [fadeOut, setFadeOut] = useState(false); // Control fade effect
//     const [isAnimating, setIsAnimating] = useState(false); // Control cart animation
//     const handleImageChange = (newImage) => {
//         if (newImage === activeImage) return; // Prevent change if the image is the same
//
//         setFadeOut(true); // Start fade-out
//         setTimeout(() => {
//             setActiveImage(newImage); // Change the image after fade-out
//             setFadeOut(false); // Fade back in
//         }, 300); // Duration of fade-out transition
//     };
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
//                 <title>Kids Oversized Hoodie - Soft and Warm</title>
//                 <meta
//                     name="description"
//                     content="Wrap your child in the softness of our plush oversized hoodie. Made with exclusive fleece and flannel, it's the comfort wear your child will love."
//                 />
//             </Helmet>
//             <div className="w-full bg-white">
//                 <div className="mt-[1.25rem] flex flex-col items-center">
//                     <div className="flex flex-col items-center self-stretch">
//                         <div className="container-xs flex flex-col gap-[0.13rem] md:px-[1.25rem]">
//
//                             <Header isAnimating={isAnimating} />
//
//
//                             <div className="flex justify-center md:flex-col mt-[20px] mb-[20px]">
//                                 <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
//                                     Главная / На детей и подростков / Плюшевое оверсайз худи на ребенка и подростка{" "}
//                                 </Text>
//                                 <div className="flex flex-1 justify-center gap-[0.63rem] md:self-stretch">
//                                     <div className="flex flex-1 items-center justify-end">
//                                         <Img
//                                             src="images/img_solar_copy_outline_red_300_01.svg"
//                                             alt="Social Icon"
//                                             className="h-[1.00rem] w-[1.00rem]"
//                                         />
//                                         <Text size="b3" as="p" className="text-[0.75rem] font-normal text-red-300_01">
//                                             Артикул: 2564786
//
//             </Text>
//         </div>
//         <div className="flex items-center">
//             <Img src="images/img_ph_share_fat.svg" alt="Share Icon"
//                  className="h-[1.00rem] w-[1.00rem]"/>            <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
//                 Поделиться{" "}
//             </Text>
//         </div>
//     </div>
// </div>
// </div>
// </div>
// <div className="container-xs flex flex-col gap-[3.63rem] md:px-[1.25rem] sm:gap-[1.81rem]">
//     <div className="flex items-center gap-[2.13rem] md:flex-col">
//         <div className="flex flex-1 gap-[1.25rem] md:flex-col md:self-stretch">
//             <div className="flex w-[12%] flex-col gap-[1.25rem] opacity-90 md:w-full md:flex-row sm:flex-col">
//                 {productImages.map((image, index) => (
//                     <Img
//                         key={index}
//                         src={image}
//                         alt={`Thumbnail ${index + 1}`}
//                         className={`h-[5.00rem] w-full flex-1 rounded-[14px] cursor-pointer object-cover ${
//                             activeImage === image ? "border-2 border-[#CF7A48]" : "border-none"
//                         }`}
//                         onClick={() => handleImageChange(image)}
//                     />
//                 ))}
//                 {/*<UserProfileImage userImage="images/img_rectangle_2.png" />*/}
//                 {/*<Img*/}
//                 {/*    src="images/img_rectangle_80x82.png"*/}
//                 {/*    alt="Product Image"*/}
//                 {/*    className="h-[5.00rem] w-full flex-1 rounded-[14px] object-cover md:h-auto sm:w-full"*/}
//                 {/*/>*/}
//                 {/*<UserProfileImage userImage="images/img_rectangle_3.png" />*/}
//                 {/*<UserProfileImage userImage="images/img_rectangle_4.png" />*/}
//                 {/*<UserProfileImage userImage="images/img_rectangle_5.png" />*/}
//                 {/*<div className="h-[5.00rem] w-[5.13rem] rounded-[14px] bg-blue_gray-100" />*/}
//             </div>
//             {/*<Img*/}
//             {/*    src="images/img_photo_1.png"*/}
//             {/*    alt="Main Product Image"*/}
//             {/*    className="h-[36.25rem] w-[88%] rounded-[20px] object-contain md:w-full"*/}
//             {/*/>*/}
//             <Img
//                 src={activeImage}
//                 alt="Main Product Image"
//                 className={`h-[36.25rem] w-[88%] rounded-[20px] object-contain transition-opacity duration-300 ease-in-out md:w-full ${
//                     fadeOut ? "opacity-0" : "opacity-100"
//                 }`}
//             />
//         </div>
//         <div className="flex w-[42%] flex-col items-end md:w-full">
//
//             <div className="relative mt-[-1.00rem] flex flex-col gap-[1.88rem] self-stretch">
//                 <div className="flex flex-col gap-[1.50rem]">
//                     <div className="flex flex-col gap-[0.25rem]">
//                         <Text
//                             size="textxl"
//                             as="p"
//                             className="font-roundsblack text-[1.38rem] font-normal leading-[125%] tracking-[0.00rem] text-black"
//                         >
//                             Плюшевое оверсайз худи на ребенка и подростка
//                         </Text>
//                         <div className="flex gap-[0.63rem]">
//                             <div className="flex w-[26%] justify-center gap-[0.38rem]">
//                                 <div className="flex w-[32%] items-center justify-center">
//                                     <Img
//                                         src="images/img_star_18x18.svg"
//                                         alt="Rating Image"
//                                         className="h-[1.13rem] w-[1.13rem] rounded-[1px]"
//                                     />
//                                     <Text as="p" className="text-[0.88rem] font-normal text-black">
//                                         4,9
//                                     </Text>
//                                 </div>
//                                 <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
//                                     327 отзывов
//                                 </Text>
//                             </div>
//                             <div className="flex flex-1 items-center gap-[0.38rem] px-[0.63rem]">
//                                 <Img
//                                     src="images/img_noto_v1_flag_for_flag_russia.svg"
//                                     alt="Country Flag Image"
//                                     className="h-[1.13rem] w-[1.13rem]"
//                                 />
//                                 <Text as="p" className="text-[0.88rem] font-normal text-black">
//                                     Сделано в России
//                                 </Text>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col gap-[0.88rem]">
//                         <div className="flex flex-wrap items-center gap-[0.63rem]">
//                             <Heading
//                                 size="headingxl"
//                                 as="h1"
//                                 className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-black md:text-[2.13rem] sm:text-[2.00rem]"
//                             >
//                                 3 300 ₽
//                             </Heading>
//                             <Heading as="h2" className="text-[0.88rem] font-semibold tracking-[0.00rem] text-sale_red">
//                                 –25%
//                             </Heading>
//                             <Heading
//                                 size="crossed_out_priced"
//                                 as="h3"
//                                 className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent line-through"
//                             >
//                                 4 400 ₽
//                             </Heading>
//                         </div>
//                         <div className="flex flex-col gap-[0.38rem]">
//                             <div className="flex justify-center">
//                                 <Text
//                                     size="1280_b2"
//                                     as="p"
//                                     className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
//                                 >
//                                     Цвет
//                                 </Text>
//                                 <Radio
//                                     value="input"
//                                     name="colorradio"
//                                     label="Нежно-персиковый"
//                                     className="ml-[0.63rem] gap-[0.38rem] text-[0.88rem] tracking-[0.00rem] text-black"
//                                 />
//                                 <div className="flex flex-1 items-center px-[0.63rem]">
//                                     <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-navy" />
//                                     <Text
//                                         size="1280_b2"
//                                         as="p"
//                                         className="ml-[0.25rem] text-[0.88rem] font-normal tracking-[0.00rem] text-black"
//                                     >
//                                         Темно-синий
//                                     </Text>
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap items-center gap-[0.63rem]">
//                                 <Text
//                                     size="1280_b2"
//                                     as="p"
//                                     className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
//                                 >
//                                     Размер
//                                 </Text>
//                                 <Text
//                                     size="1280_b2"
//                                     as="p"
//                                     className="text-[0.88rem] font-normal tracking-[0.00rem] text-black"
//                                 >
//                                     Универсальный RU
//                                 </Text>
//                                 <Text
//                                     size="texts"
//                                     as="p"
//                                     className="text-[0.75rem] font-normal tracking-[0.00rem] text-secondary_accent"
//                                 >
//                                     Модель: рост 134 см
//                                 </Text>
//                             </div>
//                         </div>
//                     </div>
//                     <Button
//                         size="md"
//                         shape="round"
//                         color="orange_50_deep_orange_200"
//                         className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
//                                            hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
//                         onClick={handleAddToCart}
//                     >
//                         Добавить в корзину
//                     </Button>
//                 </div>
//                 <div className="flex flex-col gap-[1.13rem]">
//                     <div className="flex items-center gap-[0.38rem]">
//                         <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
//                             Доставка в
//                         </Text>
//                         <SelectBox
//                             shape="square"
//                             indicator={
//                                 <Img
//                                     src="images/img_arrow_down_black.svg"
//                                     alt="Arrow Down"
//
//
//
//                     className="h-[0.75rem] w-[0.75rem]"
//                 />
//             }
//             name="Delivery Dropdown"
//             placeholder={`Москва`}
//             options={dropDownOptions}
//             className="w-[16%] gap-[0.25rem] !border-b px-[0.75rem]"
//         />
//     </div>
//     <div className="flex flex-col gap-[1.00rem]">
//         <Suspense fallback={<div>Loading feed...</div>}>
//             {deliveryOptionsList.map((d, index) => (
//                 <DeliveryOptions1 {...d} key={"deliveryPointsList" + index} />
//             ))}
//         </Suspense>
//     </div>
// </div>
// </div>
// </div>
// </div>
// <div className="flex items-center gap-[1.25rem] md:flex-col">
//     <Accordion className="flex flex-1 flex-col gap-[1.13rem] md:w-full md:self-stretch">
//         {accordionData.map((d, i) => (
//             <AccordionItem uuid={i} key={`Expandable List${i}`}>
//                 <AccordionItemHeading className="w-full">
//                     <AccordionItemButton>
//                         <AccordionItemState>
//                             {(props) => (
//                                 <>
//                                     <div className="flex flex-1 justify-between gap-[1.25rem]">
//                                         <Heading
//                                             size="headings"
//                                             as="h4"
//                                             className="text-[1.13rem] font-bold tracking-[0.00rem] text-black"
//                                         >
//                                             {d.sizeDescriptionText}
//                                         </Heading>
//                                         <Img
//                                             src="images/img_arrow_right.svg"
//                                             alt="Expand Icon"
//                                             className="h-[1.50rem] w-[1.50rem]"
//                                         />
//                                     </div>
//                                 </>
//                             )}
//                         </AccordionItemState>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel>
//                     <div>Dummy Content</div>
//                 </AccordionItemPanel>
//             </AccordionItem>
//         ))}
//     </Accordion>
//     <div className="h-[9.75rem] w-[42%] rounded-[20px] bg-gray-50" />
// </div>
// <div className="flex items-start gap-[1.25rem] md:flex-col">
//     <Img
//         src="images/img_.png"
//         alt="Description Image"
//         className="h-[24.13rem] w-[58%] self-center rounded-[20px] object-contain md:w-full"
//     />
//     <div className="flex w-[42%] flex-col gap-[1.25rem] md:w-full">
//         <Text
//             size="textxl"
//             as="p"
//             className="font-roundsblack text-[1.38rem] font-normal leading-[125%] tracking-[0.00rem] text-black"
//         >
//             Самое мягкое и уютное, что Вы когда-либо надевали!
//         </Text>
//         <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal leading-[2.13rem] text-black">
//             <>
//                 Худи Omli – это воплощение комфорта. Мы используем эксклюзивное сочетание невероятно мягкого флиса
//                 внутри и нежного, бархатистого фланелевого покрытия снаружи. Одев его, Вы ощутите, как будто Вас
//                 окутывают нежные, теплые облака.
//                 <br />
//                 Наши худи созданы, чтобы дарить тепло и уют в любой ситуации. Они словно объятие, в которое хочется
//                 завернуться снова и снова. Ощутите мягкость и расслабление, которые будут сопровождать Вас каждый
//                 день.
//             </>
//         </Text>
//     </div>
// </div>
// <div className="flex items-start gap-[1.25rem] md:flex-col">
//     <div className="flex flex-1 flex-col gap-[1.13rem] self-center md:self-stretch">
//         <div className="flex flex-col items-start gap-[1.25rem]">
//             <Heading size="headings" as="h5" className="text-[1.13rem] font-bold tracking-[0.00rem] text-black">
//                 Отзывы покупателей
//             </Heading>
//             <div className="flex flex-wrap items-center gap-[1.31rem] self-stretch">
//                 <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
//                     Показать сначала
//                 </Text>
//                 <Text as="p" className="text-[0.88rem] font-normal text-lime-800">
//                     Новые и полезные
//                 </Text>
//                 <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
//                     С высокой оценкой
//                 </Text>
//             </div>
//         </div>
//         <div>
//             <div className="flex flex-col gap-[2.38rem]">
//                 <Suspense fallback={<div>Loading feed...</div>}>
//                     {customerReviewsList.map((d, index) => (
//                         <UserProfile {...d} key={"reviewsList" + index} />
//                     ))}
//                 </Suspense>
//             </div>
//         </div>
//     </div>
//     <div className="flex w-[42%] flex-col gap-[1.13rem] md:w-full">
//         <div className="flex items-center justify-between gap-[1.25rem] sm:flex-col">
//             <div className="flex items-center gap-[0.38rem]">
//                 <RatingBar
//                     value={5}
//                     isEditable={true}
//                     color="#f3c853"
//                     activeColor="#f3c853"
//                     size={28}
//                     className="flex gap-[0.63rem]"
//                 />
//                 <Text size="textlg" as="p" className="text-[1.13rem] font-normal text-black">
//                     4,9 / 5
//                 </Text>
//             </div>
//             <Text as="p" className="self-end text-[0.88rem] font-normal text-secondary_accent sm:self-auto">
//                 Основано на 327 отзывах покупателей
//             </Text>
//         </div>
//         <div className="flex flex-col items-start gap-[1.00rem]">
//             <Text as="p" className="text-[0.88rem] font-normal text-black">
//                 Рейтинг формируется на основе актуальных отзывов
//             </Text>
//             <div className="flex flex-col gap-[0.38rem] self-stretch">
//                 <Suspense fallback={<div>Loading feed...</div>}>
//                     {ratingList.map((d, index) => (
//                         <RatingRow {...d} key={"ratingList1" + index} />
//                     ))}
//                 </Suspense>
//             </div>
//             <Text as="p" className="w-full text-[0.88rem] font-normal leading-[1.81rem] text-black">
//                 Отзывы могут оставлять только те, кто купил товар. Так мы формируем честный рейтинг.
//             </Text>
//         </div>
//     </div>
// </div>
// </div>
// <Footer className="mt-[5.63rem] self-stretch" />
// </div>
// </div>
// </>
// );
// }
//



import { Helmet } from "react-helmet";
import { Text, RatingBar, Heading, Img, SelectBox, Button, Radio } from "../../components";
import DeliveryOptions1 from "../../components/DeliveryOptions1";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import RatingRow from "../../components/RatingRow";
import UserProfile from "../../components/UserProfile";
import UserProfileImage from "../../components/UserProfileImage";
import React, {Suspense, useEffect, useState} from "react";
import Header from "components/Header";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

import {
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    Accordion,
    AccordionItem,
} from "react-accessible-accordion";
import {useNavigate} from "react-router-dom";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const productImages = [
    "images/img_photo_580x598.png",
    "images/img_photo_580x598_alt1.png",
    "images/img_photo_580x598_alt2.png",
    "images/img_photo_580x598_alt3.png",
    "images/img_photo_580x598_alt4.png",
];
const customerReviewsList = [
    { userName: "А", userFullName: "Алиса К.", userJoinDate: "11 сентября 2024 года", prop: "Стильно, удобно, оверсайз" },
    {
        userName: "Д",
        userFullName: "Алиса К.",
        userJoinDate: "11 сентября 2024 года",
        prop: "images/img_rectangle_200x180.png",
    },
    { userName: "А", userFullName: "Алексей Д.", userJoinDate: "6 августа 2024 года", prop: "Стильно, удобно, оверсайз" },
    { userName: "Д", userFullName: "Дарья К.", userJoinDate: "21 сентября 2024 года", prop: "Стильно, удобно, оверсайз" },
];
const ratingList = [
    { ratingText: "5 звезд", groupImage: "images/img_group_gray_400.svg", reviewCount: "292" },
    { ratingText: "4 звезды", groupImage: "images/img_group_gray_400.svg", reviewCount: "35" },
    { ratingText: "3 звезды", groupImage: "images/img_group_gray_400_1x370.svg", reviewCount: "0" },
    { ratingText: "2 звезды", groupImage: "images/img_group_gray_400_1x370.svg", reviewCount: "0" },
    { ratingText: "1 звезда", groupImage: "images/img_group_gray_400_1x370.svg", reviewCount: "0" },
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
const accordionData = [
    {
        sizeDescriptionText: "Описание размера",
    },
    {
        sizeDescriptionText: "Состав и параметры",
    },
    {
        sizeDescriptionText: "Рекомендации по уходу",
    },
    {
        sizeDescriptionText: "Доставка и возврат",
    },
];
const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];
const reviewsData = [
    {
        author: { name: "Алиса К.", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/91c54c12bf6d2c19bae82eb216cd449fe4213fc310f1aee4465aeab0005fa221?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" },
        date: "11 сентября 2024 года",
        rating: 5,
        images: [
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f9289939ea6dc1be7b78b64239cc4c27c76d0f9925033c53501fcd2c8b72a0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", alt: "Product image 1" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f9289939ea6dc1be7b78b64239cc4c27c76d0f9925033c53501fcd2c8b72a0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", alt: "Product image 2" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f9289939ea6dc1be7b78b64239cc4c27c76d0f9925033c53501fcd2c8b72a0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", alt: "Product image 3" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f9289939ea6dc1be7b78b64239cc4c27c76d0f9925033c53501fcd2c8b72a0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", alt: "Product image 4" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f9289939ea6dc1be7b78b64239cc4c27c76d0f9925033c53501fcd2c8b72a0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", alt: "Product image 5" }
        ],
        content: "Стильно, удобно, оверсайз"
    },
    {
        author: { name: "Дмитрий М.", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/78faf38f86b167c78b0d22be3988edbc4abef44a3c2c6f4355ef29498ac74894?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" },
        date: "21 сентября 2024 года",
        rating: 5,
        images: [
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f9289939ea6dc1be7b78b64239cc4c27c76d0f9925033c53501fcd2c8b72a0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", alt: "Product image 1" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1f9289939ea6dc1be7b78b64239cc4c27c76d0f9925033c53501fcd2c8b72a0?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", alt: "Product image 2" }
        ],
        content: "Худи очень понравилось. Сшито качественно. Материал приятный. Размер в самый раз. Дочка довольна. Закажу еще такую же жене. Спасибо 👍"
    }
];

const ImageGallery = ({ images }) => {
    return (
        <div className="flex gap-0.5 items-center w-full">
            {images.map((image, index) => (
                <img key={index} loading="lazy" src={image.src} alt={image.alt} className="object-contain shrink-0 self-stretch my-auto rounded-xl aspect-[0.75] w-[60px]" />
            ))}
        </div>
    );
};

const StarRating = ({ rating }) => {
    return (
        <img loading="lazy" src={`https://cdn.builder.io/api/v1/image/assets/TEMP/1f701d82602b97535c8a0d78bfad24d9e937eba8c33406781ea77d49188389ff?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c`} alt={`${rating} out of 5 stars`} className="object-contain shrink-0 aspect-[5] w-[90px]" />
    );
};

const ReviewCard = ({ author, date, rating, images, content }) => {
    return (
        <article className="flex flex-col mt-5 w-full">
            <header className="flex gap-10 justify-between items-start w-full">
                <div className="flex gap-1 items-center">
                    <img loading="lazy" src={author.avatar} alt={`${author.name}'s avatar`} className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
                    <div className="flex flex-col self-stretch my-auto w-[108px]">
                        <h3 className="text-xs text-black">{author.name}</h3>
                        <time dateTime={date} className="mt-1 text-xs text-zinc-500">{date}</time>
                    </div>
                </div>
                <StarRating rating={rating} />
            </header>
            <div className="flex flex-col mt-2.5 max-w-full w-[308px]">
                <ImageGallery images={images} />
                <p className="mt-2.5 text-base text-black">{content}</p>
            </div>
        </article>
    );
};
export default function CardPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Новые и полезные");

    const dispatch = useDispatch();

    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(productImages[0]); // Track the current image
    const [fadeOut, setFadeOut] = useState(false); // Control fade effect
    const [isAnimating, setIsAnimating] = useState(false); // Control cart animation
    const handleImageChange = (newImage) => {

        if (newImage === activeImage) return; // Prevent change if the image is the same

        setFadeOut(true); // Start fade-out
        setTimeout(() => {
            setActiveImage(newImage); // Change the image after fade-out
            setFadeOut(false); // Fade back in
        }, 300); // Duration of fade-out transition
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


    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <>
            {isMobile ? (
                <>
                    <div className="w-full bg-white">
                        <div className="mt-[1.25rem] flex flex-col items-center">
                            <div className="flex flex-col items-center self-stretch">
                                <div className="container-xs flex flex-col gap-[0.13rem] md:px-[1.25rem]">

                                    <Header isAnimating={isAnimating} />


                                    <div className="flex justify-center md:flex-col mt-[50px] mb-[20px]">
                                        <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
                                            Главная / На детей и подростков / Плюшевое оверсайз худи на ребенка и подростка{" "}
                                        </Text>

                                    </div>
                                </div>
                            </div>
                            <div className="container-xs flex flex-col gap-[3.63rem] md:px-[1.25rem] sm:gap-[1.81rem]">
                                <div className="flex items-center gap-[2.13rem] md:flex-col">

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
                                            <SwiperSlide key={index}
                                                         style={{display: 'flex', justifyContent: 'flex-start'}}>
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
                                                            <div data-layername="49"
                                                                 className="self-stretch my-auto">4,9
                                                            </div>
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
                                                        <div data-layername="сделаноВРоссии"
                                                             className="self-stretch my-auto">
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
                                            <div data-layername="frame"
                                                 className="flex flex-col mt-2.5 tracking-normal">
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
                                                        <div data-layername="frame"
                                                             className="flex gap-1.5 items-center">
                                                            <div
                                                                data-layername="color"
                                                                className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-amber-100 border-2 border-orange-300 border-solid rounded-[100px]"
                                                            />
                                                            <div data-layername="нежноПерсиковый"
                                                                 className="self-stretch my-auto">
                                                                Нежно-персиковый
                                                            </div>
                                                        </div>
                                                        <div data-layername="frame"
                                                             className="flex gap-1.5 items-center">
                                                            <div
                                                                data-layername="color"
                                                                className="flex shrink-0 self-stretch my-auto w-5 h-5 bg-slate-600 rounded-[100px]"
                                                            />
                                                            <div data-layername="темноСиний"
                                                                 className="self-stretch my-auto">
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
                                                            <Text as="p"
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
                                                                        <Img src="/public/images/img_el_question.svg"
                                                                             alt="Info Icon"
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
                                <div className="flex items-center gap-[1.25rem] md:flex-col">
                                    <Accordion className="flex flex-1 flex-col gap-[1.13rem] md:w-full md:self-stretch">
                                        {accordionData.map((d, i) => (
                                            <AccordionItem uuid={i} key={`Expandable List${i}`}>
                                                <AccordionItemHeading className="w-full">
                                                    <AccordionItemButton>
                                                        <AccordionItemState>
                                                            {(props) => (
                                                                <>
                                                                    <div
                                                                        className="flex flex-1 justify-between gap-[1.25rem]">
                                                                        <Heading
                                                                            size="headings"
                                                                            as="h4"
                                                                            className="text-[1.13rem] font-bold tracking-[0.00rem] text-black"
                                                                        >
                                                                            {d.sizeDescriptionText}
                                                                        </Heading>
                                                                        <Img
                                                                            src="images/img_arrow_right.svg"
                                                                            alt="Expand Icon"
                                                                            className="h-[1.50rem] w-[1.50rem]"
                                                                        />
                                                                    </div>
                                                                </>
                                                            )}
                                                        </AccordionItemState>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div>Dummy Content</div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className="flex items-start gap-[1.25rem] md:flex-col">
                                    <Img
                                        src="images/img_.png"
                                        alt="Description Image"
                                        className="h-[12.13rem] w-[58%] self-center rounded-[20px] object-contain md:w-full"
                                    />
                                    <div className="flex w-[42%] flex-col gap-[1.25rem] md:w-full">
                                        <Text
                                            size="textxl"
                                            as="p"
                                            className="font-roundsblack text-[1.38rem] font-normal leading-[125%] tracking-[0.00rem] text-black"
                                        >
                                            Самое мягкое и уютное, что Вы когда-либо надевали!
                                        </Text>
                                        <Text size="1280_h4" as="p"
                                              className="text-[1.13rem] font-normal leading-[2.13rem] text-black">
                                            <>
                                                Худи Omli – это воплощение комфорта. Мы используем эксклюзивное
                                                сочетание невероятно мягкого флиса
                                                внутри и нежного, бархатистого фланелевого покрытия снаружи. Одев его,
                                                Вы ощутите, как будто Вас
                                                окутывают нежные, теплые облака.
                                                <br/>
                                                Наши худи созданы, чтобы дарить тепло и уют в любой ситуации. Они словно
                                                объятие, в которое хочется
                                                завернуться снова и снова. Ощутите мягкость и расслабление, которые
                                                будут сопровождать Вас каждый
                                                день.
                                            </>
                                        </Text>
                                    </div>
                                </div>


                                <div className="flex flex-col max-w-[335px]">
                                    <header className="flex flex-col w-full">
                                        <h2 className="text-base font-bold tracking-normal text-black">
                                            Отзывы покупателей
                                        </h2>
                                        <div className="flex flex-col mt-2.5 w-full">
                                            <div
                                                className="flex gap-1.5 justify-center items-center self-start text-base text-black">
                                                <img loading="lazy"
                                                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e1444703f2997f83327bc299a667462a4e3c17cbc5b3e807a68dc68eae0a24c?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                                                     alt="Rating stars"
                                                     className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[140px]"/>
                                                <span className="self-stretch my-auto">4,9 / 5</span>
                                            </div>
                                            <p className="mt-2.5 text-xs text-zinc-500">
                                                Основано на 327 отзывах покупателей
                                            </p>
                                        </div>
                                    </header>
                                    <div className="relative mt-5 w-full">
                                        <button
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="flex gap-1.5 justify-between items-center px-3 py-2 w-full text-sm tracking-normal text-black rounded-lg border-2 border-red-200 border-solid"
                                        >
                                            <span>{selectedOption}</span>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffaf9bbe748da8c38139146101135d247e7ca0ee40c21591b41a414051e37513?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                                                alt="Sort icon"
                                                className="object-contain shrink-0 w-2.5 aspect-[1.67]"
                                            />
                                        </button>

                                        {isDropdownOpen && (
                                            <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                                                <li onClick={() => handleSelect("Новые и полезные")}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">Новые и
                                                    полезные
                                                </li>
                                                <li onClick={() => handleSelect("По рейтингу")}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">По рейтингу
                                                </li>
                                                <li onClick={() => handleSelect("По дате")}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">По дате
                                                </li>
                                            </ul>
                                        )}
                                    </div>

                                    {reviewsData.map((review, index) => (
                                        <ReviewCard key={index} {...review} />
                                    ))}
                                </div>


                            </div>
                            <Footer className="mt-[5.63rem] self-stretch"/>
                        </div>
                    </div>
                </>
            ) : (
                <>

                    <Helmet>
                        <title>Kids Oversized Hoodie - Soft and Warm</title>
                        <meta
                            name="description"
                            content="Wrap your child in the softness of our plush oversized hoodie. Made with exclusive fleece and flannel, it's the comfort wear your child will love."
                        />
                    </Helmet>
                    <div className="w-full bg-white">
                        <div className="mt-[1.25rem] flex flex-col items-center">
                            <div className="flex flex-col items-center self-stretch">
                                <div className="container-xs flex flex-col gap-[0.13rem] md:px-[1.25rem]">

                                    <Header isAnimating={isAnimating}/>


                                    <div className="flex justify-center md:flex-col mt-[20px] mb-[20px]">
                                        <Text size="b3" as="p"
                                              className="text-[0.75rem] font-normal text-secondary_accent">
                                            Главная / На детей и подростков / Плюшевое оверсайз худи на ребенка и
                                            подростка{" "}
                                        </Text>
                                        <div className="flex flex-1 justify-center gap-[0.63rem] md:self-stretch">
                                            <div className="flex flex-1 items-center justify-end">
                                                <Img
                                                    src="images/img_solar_copy_outline_red_300_01.svg"
                                                    alt="Social Icon"
                                                    className="h-[1.00rem] w-[1.00rem]"
                                                />
                                                <Text size="b3" as="p"
                                                      className="text-[0.75rem] font-normal text-red-300_01">
                                                    Артикул: 2564786

                                                </Text>
                                            </div>
                                            <div className="flex items-center">
                                                <Img src="images/img_ph_share_fat.svg" alt="Share Icon"
                                                     className="h-[1.00rem] w-[1.00rem]"/> <Text size="b3" as="p"
                                                                                                 className="text-[0.75rem] font-normal text-secondary_accent">
                                                Поделиться{" "}
                                            </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-xs flex flex-col gap-[3.63rem] md:px-[1.25rem] sm:gap-[1.81rem]">
                                <div className="flex items-center gap-[2.13rem] md:flex-col">
                                <div className="flex flex-1 gap-[1.25rem] md:flex-col md:self-stretch">
                                <div className="flex w-[12%] flex-col gap-[1.25rem] opacity-90 md:w-full md:flex-row sm:flex-col">
                                    {productImages.map((image, index) => (
                                        <Img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`h-[5.00rem] w-full flex-1 rounded-[14px] cursor-pointer object-cover ${
                                                activeImage === image ? "border-2 border-[#CF7A48]" : "border-none"
                                            }`}
                                            onClick={() => handleImageChange(image)}
                                        />
                                    ))}
                                    {/*<UserProfileImage userImage="images/img_rectangle_2.png" />*/}
                                    {/*<Img*/}
                                    {/*    src="images/img_rectangle_80x82.png"*/}
                                    {/*    alt="Product Image"*/}
                                    {/*    className="h-[5.00rem] w-full flex-1 rounded-[14px] object-cover md:h-auto sm:w-full"*/}
                                    {/*/>*/}
                                    {/*<UserProfileImage userImage="images/img_rectangle_3.png" />*/}
                                    {/*<UserProfileImage userImage="images/img_rectangle_4.png" />*/}
                                    {/*<UserProfileImage userImage="images/img_rectangle_5.png" />*/}
                                    {/*<div className="h-[5.00rem] w-[5.13rem] rounded-[14px] bg-blue_gray-100" />*/}
                                </div>
                                {/*<Img*/}
                                {/*    src="images/img_photo_1.png"*/}
                                {/*    alt="Main Product Image"*/}
                                {/*    className="h-[36.25rem] w-[88%] rounded-[20px] object-contain md:w-full"*/}
                                {/*/>*/}
                                <Img
                                    src={activeImage}
                                    alt="Main Product Image"
                                    className={`h-[36.25rem] w-[88%] rounded-[20px] object-contain transition-opacity duration-300 ease-in-out md:w-full ${
                                        fadeOut ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                            </div>
                            <div className="flex w-[42%] flex-col items-end md:w-full">

                                <div className="relative mt-[-1.00rem] flex flex-col gap-[1.88rem] self-stretch">
                                    <div className="flex flex-col gap-[1.50rem]">
                                        <div className="flex flex-col gap-[0.25rem]">
                                            <Text
                                                size="textxl"
                                                as="p"
                                                className="font-roundsblack text-[1.38rem] font-normal leading-[125%] tracking-[0.00rem] text-black"
                                            >
                                                Плюшевое оверсайз худи на ребенка и подростка
                                            </Text>
                                            <div className="flex gap-[0.63rem]">
                                                <div className="flex w-[26%] justify-center gap-[0.38rem]">
                                                    <div className="flex w-[32%] items-center justify-center">
                                                        <Img
                                                            src="images/img_star_18x18.svg"
                                                            alt="Rating Image"
                                                            className="h-[1.13rem] w-[1.13rem] rounded-[1px]"
                                                        />
                                                        <Text as="p" className="text-[0.88rem] font-normal text-black">
                                                            4,9
                                                        </Text>
                                                    </div>
                                                    <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                                        327 отзывов
                                                    </Text>
                                                </div>
                                                <div className="flex flex-1 items-center gap-[0.38rem] px-[0.63rem]">
                                                    <Img
                                                        src="images/img_noto_v1_flag_for_flag_russia.svg"
                                                        alt="Country Flag Image"
                                                        className="h-[1.13rem] w-[1.13rem]"
                                                    />
                                                    <Text as="p" className="text-[0.88rem] font-normal text-black">
                                                        Сделано в России
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[0.88rem]">
                                            <div className="flex flex-wrap items-center gap-[0.63rem]">
                                                <Heading
                                                    size="headingxl"
                                                    as="h1"
                                                    className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-black md:text-[2.13rem] sm:text-[2.00rem]"
                                                >
                                                    3 300 ₽
                                                </Heading>
                                                <Heading as="h2" className="text-[0.88rem] font-semibold tracking-[0.00rem] text-sale_red">
                                                    –25%
                                                </Heading>
                                                <Heading
                                                    size="crossed_out_priced"
                                                    as="h3"
                                                    className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent line-through"
                                                >
                                                    4 400 ₽
                                                </Heading>
                                            </div>
                                            <div className="flex flex-col gap-[0.38rem]">
                                                <div className="flex justify-center">
                                                    <Text
                                                        size="1280_b2"
                                                        as="p"
                                                        className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
                                                    >
                                                        Цвет
                                                    </Text>
                                                    <Radio
                                                        value="input"
                                                        name="colorradio"
                                                        label="Нежно-персиковый"
                                                        className="ml-[0.63rem] gap-[0.38rem] text-[0.88rem] tracking-[0.00rem] text-black"
                                                    />
                                                    <div className="flex flex-1 items-center px-[0.63rem]">
                                                        <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-navy" />
                                                        <Text
                                                            size="1280_b2"
                                                            as="p"
                                                            className="ml-[0.25rem] text-[0.88rem] font-normal tracking-[0.00rem] text-black"
                                                        >
                                                            Темно-синий
                                                        </Text>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-[0.63rem]">
                                                    <Text
                                                        size="1280_b2"
                                                        as="p"
                                                        className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent"
                                                    >
                                                        Размер
                                                    </Text>
                                                    <Text
                                                        size="1280_b2"
                                                        as="p"
                                                        className="text-[0.88rem] font-normal tracking-[0.00rem] text-black"
                                                    >
                                                        Универсальный RU
                                                    </Text>
                                                    <Text
                                                        size="texts"
                                                        as="p"
                                                        className="text-[0.75rem] font-normal tracking-[0.00rem] text-secondary_accent"
                                                    >
                                                        Модель: рост 134 см
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
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
                                    </div>
                                    <div className="flex flex-col gap-[1.13rem]">
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
                                                name="Delivery Dropdown"
                                                placeholder={`Москва`}
                                                options={dropDownOptions}
                                                className="w-[16%] gap-[0.25rem] !border-b px-[0.75rem]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[1.00rem]">
                                            <Suspense fallback={<div>Loading feed...</div>}>
                                                {deliveryOptionsList.map((d, index) => (
                                                    <DeliveryOptions1 {...d} key={"deliveryPointsList" + index} />
                                                ))}
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[1.25rem] md:flex-col">
                            <Accordion className="flex flex-1 flex-col gap-[1.13rem] md:w-full md:self-stretch">
                                {accordionData.map((d, i) => (
                                    <AccordionItem uuid={i} key={`Expandable List${i}`}>
                                        <AccordionItemHeading className="w-full">
                                            <AccordionItemButton>
                                                <AccordionItemState>
                                                    {(props) => (
                                                        <>
                                                            <div className="flex flex-1 justify-between gap-[1.25rem]">
                                                                <Heading
                                                                    size="headings"
                                                                    as="h4"
                                                                    className="text-[1.13rem] font-bold tracking-[0.00rem] text-black"
                                                                >
                                                                    {d.sizeDescriptionText}
                                                                </Heading>
                                                                <Img
                                                                    src="images/img_arrow_right.svg"
                                                                    alt="Expand Icon"
                                                                    className="h-[1.50rem] w-[1.50rem]"
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                </AccordionItemState>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div>Dummy Content</div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <div className="h-[9.75rem] w-[42%] rounded-[20px] bg-gray-50" />
                        </div>
                        <div className="flex items-start gap-[1.25rem] md:flex-col">
                            <Img
                                src="images/img_.png"
                                alt="Description Image"
                                className="h-[24.13rem] w-[58%] self-center rounded-[20px] object-contain md:w-full"
                            />
                            <div className="flex w-[42%] flex-col gap-[1.25rem] md:w-full">
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="font-roundsblack text-[1.38rem] font-normal leading-[125%] tracking-[0.00rem] text-black"
                                >
                                    Самое мягкое и уютное, что Вы когда-либо надевали!
                                </Text>
                                <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal leading-[2.13rem] text-black">
                                    <>
                                        Худи Omli – это воплощение комфорта. Мы используем эксклюзивное сочетание невероятно мягкого флиса
                                        внутри и нежного, бархатистого фланелевого покрытия снаружи. Одев его, Вы ощутите, как будто Вас
                                        окутывают нежные, теплые облака.
                                        <br />
                                        Наши худи созданы, чтобы дарить тепло и уют в любой ситуации. Они словно объятие, в которое хочется
                                        завернуться снова и снова. Ощутите мягкость и расслабление, которые будут сопровождать Вас каждый
                                        день.
                                    </>
                                </Text>
                            </div>
                        </div>
                        <div className="flex items-start gap-[1.25rem] md:flex-col">
                            <div className="flex flex-1 flex-col gap-[1.13rem] self-center md:self-stretch">
                                <div className="flex flex-col items-start gap-[1.25rem]">
                                    <Heading size="headings" as="h5" className="text-[1.13rem] font-bold tracking-[0.00rem] text-black">
                                        Отзывы покупателей
                                    </Heading>
                                    <div className="flex flex-wrap items-center gap-[1.31rem] self-stretch">
                                        <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
                                            Показать сначала
                                        </Text>
                                        <Text as="p" className="text-[0.88rem] font-normal text-lime-800">
                                            Новые и полезные
                                        </Text>
                                        <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                                            С высокой оценкой
                                        </Text>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-[2.38rem]">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {customerReviewsList.map((d, index) => (
                                                <UserProfile {...d} key={"reviewsList" + index} />
                                            ))}
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[42%] flex-col gap-[1.13rem] md:w-full">
                                <div className="flex items-center justify-between gap-[1.25rem] sm:flex-col">
                                    <div className="flex items-center gap-[0.38rem]">
                                        <RatingBar
                                            value={5}
                                            isEditable={true}
                                            color="#f3c853"
                                            activeColor="#f3c853"
                                            size={28}
                                            className="flex gap-[0.63rem]"
                                        />
                                        <Text size="textlg" as="p" className="text-[1.13rem] font-normal text-black">
                                            4,9 / 5
                                        </Text>
                                    </div>
                                    <Text as="p" className="self-end text-[0.88rem] font-normal text-secondary_accent sm:self-auto">
                                        Основано на 327 отзывах покупателей
                                    </Text>
                                </div>
                                <div className="flex flex-col items-start gap-[1.00rem]">
                                    <Text as="p" className="text-[0.88rem] font-normal text-black">
                                        Рейтинг формируется на основе актуальных отзывов
                                    </Text>
                                    <div className="flex flex-col gap-[0.38rem] self-stretch">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {ratingList.map((d, index) => (
                                                <RatingRow {...d} key={"ratingList1" + index} />
                                            ))}
                                        </Suspense>
                                    </div>
                                    <Text as="p" className="w-full text-[0.88rem] font-normal leading-[1.81rem] text-black">
                                        Отзывы могут оставлять только те, кто купил товар. Так мы формируем честный рейтинг.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer className="mt-[5.63rem] self-stretch" />
                </div>
            </div>
                </>
)}
        </>
    );
}

