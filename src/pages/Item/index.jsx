import { Helmet } from "react-helmet";
import { SelectBox, Img, Text, Button, Heading, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import ColorRowDisplay from "../../components/ColorRowDisplay";
import DeliveryOptions from "../../components/DeliveryOptions";
import Header from "../../components/Header";
import UserProfileImage from "../../components/UserProfileImage";
import React, { Suspense } from "react";

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
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function ItemPage() {
    return (
        <>
            <Helmet>
                <title>Family Set - Comfortable Hoodies for Everyone</title>
                <meta
                    name="description"
                    content="Shop our complete family hoodie set, made in Russia with love. Perfect for family moments, available in various colors and sizes with easy returns."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-white py-[1.25rem]">
                <div className="container-xs mb-[0.25rem] flex flex-col gap-[1.75rem] md:px-[1.25rem]">
                    <Header/>
                    <div className="flex flex-col gap-[1.00rem]">
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
                                    <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
                                        Артикул: 2564873
                                    </Text>
                                </div>
                                <div className="flex items-center">
                                    <Img src="images/img_ph_share_fat.svg" alt="Share Icon"
                                         className="h-[1.00rem] w-[1.00rem]"/>
                                    <Text size="b3" as="p" className="text-[0.75rem] font-normal text-secondary_accent">
                                        Поделиться{" "}
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[1.13rem] md:flex-col">
                            <div className="flex flex-1 gap-[1.25rem] md:flex-col md:self-stretch">
                                <div
                                    className="flex w-[12%] flex-col gap-[1.25rem] opacity-90 md:w-full md:flex-row sm:flex-col">
                                    <UserProfileImage/>
                                    <UserProfileImage/>
                                    <UserProfileImage/>
                                    <UserProfileImage/>
                                    <UserProfileImage/>
                                    <div className="h-[5.00rem] w-[5.13rem] rounded-[14px] bg-blue_gray-100"/>
                                </div>
                                <Img
                                    src="images/img_photo_580x598.png"
                                    alt="Product Photo"
                                    className="h-[36.25rem] w-[88%] rounded-[20px] object-contain md:w-full"
                                />
                            </div>
                            <div className="flex w-[42%] flex-col gap-[1.88rem] md:w-full">
                                <div className="flex flex-col gap-[1.50rem] ml-[10px]">
                                    <div className="flex flex-col items-start gap-[0.25rem]">
                                        <Text
                                            size="textxl"
                                            as="p"
                                            className="font-roundsblack text-[1.38rem] font-normal tracking-[0.00rem] text-black"
                                        >
                                            Комплект для всей семьи
                                        </Text>
                                        <div className="flex gap-[0.63rem] self-stretch">
                                            <div className="flex w-[30%] gap-[0.38rem]">
                                                <div className="flex w-[32%] items-center">
                                                    <Img
                                                        src="images/img_star.svg"
                                                        alt="Rating Star Image"
                                                        className="h-[1.13rem] w-[1.13rem] rounded-[1px]"
                                                    />
                                                    <Text as="p" className="text-[0.88rem] font-normal text-black">
                                                        4,9
                                                    </Text>
                                                </div>
                                                <Text as="p"
                                                      className="text-[0.88rem] font-normal text-secondary_accent">
                                                    357 отзывов
                                                </Text>
                                            </div>
                                            <div className="flex flex-1 items-center gap-[0.38rem] px-[0.63rem]">
                                                <Img
                                                    src="images/img_noto_v1_flag_for_flag_russia.svg"
                                                    alt="Country Flag"
                                                    className="h-[1.13rem] w-[1.13rem]"
                                                />
                                                <Text as="p" className="text-[0.88rem] font-normal text-black">
                                                    Сделано в России
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[1.00rem]">
                                        <div className="flex flex-wrap items-center gap-[0.63rem]">
                                            <Heading
                                                size="headingxl"
                                                as="h1"
                                                className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-black md:text-[2.13rem] sm:text-[2.00rem]"
                                            >
                                                3 300 ₽
                                            </Heading>
                                            <Heading as="h2"
                                                     className="text-[0.88rem] font-semibold tracking-[0.00rem] text-sale_red">
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
                                        <div className="flex flex-col gap-[0.50rem]">
                                            <ColorRowDisplay/>
                                            <div className="flex flex-wrap gap-[0.63rem]">
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
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        size="md"
                                        shape="round"
                                        color="orange_50_deep_orange_200"
                                        className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]"
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

                                    <div className="flex flex-col gap-[1.00rem]">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {deliveryOptionsList.map((d, index) => (
                                                <DeliveryOptions {...d} key={"pickupPointsList" + index}/>
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
    );
}