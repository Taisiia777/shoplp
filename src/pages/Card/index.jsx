import { Helmet } from "react-helmet";
import { Text, RatingBar, Heading, Img, SelectBox, Button, Radio } from "../../components";
import DeliveryOptions1 from "../../components/DeliveryOptions1";
import Footer from "../../components/Footer";
import MegaMenu1 from "../../components/MegaMenu1";
import RatingRow from "../../components/RatingRow";
import UserProfile from "../../components/UserProfile";
import UserProfileImage from "../../components/UserProfileImage";
import React, { Suspense } from "react";
import {
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    Accordion,
    AccordionItem,
} from "react-accessible-accordion";

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

export default function CardPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
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
                            <header className="relative flex items-start justify-between gap-[1.25rem] md:flex-col">
                                <Img
                                    src="images/img_header_logo.svg"
                                    alt="Logo Image"
                                    className="h-[2.50rem] w-[5.63rem] object-contain"
                                />
                                <div className="mt-[0.38rem] flex w-[44%] flex-col self-end md:w-full md:self-auto">
                                    <div className="flex items-center justify-between gap-[1.25rem] sm:flex-col">
                                        <div className="flex gap-[1.25rem] sm:flex-col">
                                            <ul className="flex gap-[0.25rem]">
                                                <li
                                                    onMouseLeave={() => {
                                                        setMenuOpen(false);
                                                    }}
                                                    onMouseEnter={() => {
                                                        setMenuOpen(true);
                                                    }}
                                                >
                                                    <div className="flex cursor-pointer items-center gap-[0.25rem]">
                                                        <Text
                                                            size="1280_h4"
                                                            as="p"
                                                            className="cursor-pointer text-[1.13rem] font-normal text-black hover:text-red-300"
                                                        >
                                                            Худи{" "}
                                                        </Text>
                                                        <Img
                                                            src="images/img_arrow_down_black.svg"
                                                            alt="Dropdown Icon"
                                                            className="h-[0.75rem] w-[0.75rem]"
                                                        />
                                                    </div>
                                                    {menuOpen ? <MegaMenu1 /> : null}
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-red-300">
                                                            Доставка
                                                        </Text>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="cursor-pointer">
                                                        <Text
                                                            size="1280_h4"
                                                            as="p"
                                                            className="text-[1.13rem] font-normal text-black hover:text-red-300"
                                                        >
                                                            Возврат и обмен
                                                        </Text>
                                                    </a>
                                                </li>
                                            </ul>
                                            <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
                                                Контакты
                                            </Text>
                                        </div>
                                        <div className="flex w-[12%] justify-center gap-[0.63rem] sm:w-full">
                                            <a href="#">
                                                <Img
                                                    src="images/img_fluent_person_16_regular.svg"
                                                    alt="Profile Icon"
                                                    className="h-[1.75rem] w-[1.75rem]"
                                                />
                                            </a>
                                            <div className="flex h-[1.75rem] w-[1.75rem] flex-col items-center justify-center bg-[url(/public/images/img_f7_bag.svg)] bg-cover bg-no-repeat md:h-auto">
                                                <Heading
                                                    size="headingxs"
                                                    as="p"
                                                    className="flex h-[1.13rem] w-[1.13rem] items-center justify-center rounded-lg bg-sale_red text-center text-[0.50rem] font-semibold text-white"
                                                >
                                                    2
                                                </Heading>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <Img
                                            src="images/img_image_4.png"
                                            alt="Promo Image"
                                            className="relative ml-[6.13rem] mt-[-0.13rem] h-[2.13rem] w-[2.13rem] object-cover md:ml-0"
                                        />
                                    </a>
                                </div>
                            </header>
                            <div className="flex justify-center md:flex-col">
                                <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
                                    Главная / На детей и подростков / Плюшевое оверсайз худи на ребенка и подростка{" "}
                                </Text>
                                <div className="flex flex-1 justify-center gap-[0.63rem] md:self-stretch">
                                    <div className="flex flex-1 items-center justify-end">
                                        <Img
                                            src="images/img_solar_copy_outline_red_300_01.svg"
                                            alt="Social Icon"
                                            className="h-[1.00rem] w-[1.00rem]"
                                        />
                                        <Text size="b3" as="p" className="text-[0.75rem] font-normal text-red-300_01">
                                            Артикул: 2564786

            </Text>
        </div>
        <div className="flex items-center">
            <Img src="images/img_ph_share_fat.svg" alt="Share Icon" className="h-[1.00rem] w-[1.00rem]" />
            <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
                Поделиться{" "}
            </Text>
        </div>
    </div>
</div>
</div>
</div>
<div className="container-xs flex flex-col gap-[3.63rem] md:px-[1.25rem] sm:gap-[1.81rem]">
    <div className="flex items-center gap-[1.13rem] md:flex-col">
        <div className="flex flex-1 gap-[1.25rem] md:flex-col md:self-stretch">
            <div className="flex w-[12%] flex-col gap-[1.25rem] opacity-90 md:w-full md:flex-row sm:flex-col">
                <UserProfileImage userImage="images/img_rectangle_2.png" />
                <Img
                    src="images/img_rectangle_80x82.png"
                    alt="Product Image"
                    className="h-[5.00rem] w-full flex-1 rounded-[14px] object-cover md:h-auto sm:w-full"
                />
                <UserProfileImage userImage="images/img_rectangle_3.png" />
                <UserProfileImage userImage="images/img_rectangle_4.png" />
                <UserProfileImage userImage="images/img_rectangle_5.png" />
                <div className="h-[5.00rem] w-[5.13rem] rounded-[14px] bg-blue_gray-100" />
            </div>
            <Img
                src="images/img_photo_1.png"
                alt="Main Product Image"
                className="h-[36.25rem] w-[88%] rounded-[20px] object-contain md:w-full"
            />
        </div>
        <div className="flex w-[42%] flex-col items-end md:w-full">
            <Img
                src="images/img_image_4.png"
                alt="Secondary Image"
                className="relative z-[1] mr-[6.13rem] h-[2.13rem] w-[2.13rem] object-cover md:mr-0"
            />
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
                        className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem]"
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
);
}

