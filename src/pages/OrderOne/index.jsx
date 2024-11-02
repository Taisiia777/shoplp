import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, Input, GoogleMap, SelectBox } from "components";
import DeliveryInfoRow from "../../components/DeliveryInfoRow";
import Header from "components/Header";
import OrderoneColumn from "./OrderoneColumn";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function OrderOnePage() {
    const countryOptions = React.useMemo(() => {
        return Object.entries(metadata.countries).map(([code, data]) => {
            const callingCode = `${data[0]}`;

            const display = {
                code,
                callingCode: `+${callingCode}`,
                imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
            };

            return {
                value: code,
                label: (
                    <>
                        <Img src={display.imgSrc} alt="Television" className="h-[1.13rem]" />
                    </>
                ),
            };
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>Savelii&#39;s Application17</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="flex flex-col items-center gap-[2.50rem] self-stretch bg-gray-50 py-[1.75rem] sm:py-[1.25rem]">
                    <OrderoneColumn />
                    <div className="container-xs mb-[4.25rem] md:px-[1.25rem]">
                        <div className="flex items-start gap-[2.38rem] md:flex-col">
                            <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
                                <div className="flex flex-col gap-[1.25rem]">
                                    <div
                                        className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                                            Введите личные данные
                                        </Text>
                                        <div className="flex flex-col gap-[1.25rem] self-stretch">
                                            <div className="flex gap-[0.63rem] md:flex-col">
                                                <Input
                                                    shape="round"
                                                    name="имя"
                                                    placeholder="Имя"
                                                    className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                />
                                                <Input
                                                    shape="round"
                                                    name="фамилия"
                                                    placeholder="Фамилия"
                                                    className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                />
                                            </div>
                                            <div className="flex gap-[0.63rem] md:flex-col">
                                                <div
                                                    className="flex h-[2.75rem] w-full items-center rounded-[10px] bg-gray-100 px-[1.50rem] sm:px-[1.25rem]">
                                                    <SelectBox
                                                        options={countryOptions}
                                                        defaultValue={countryOptions.find((option) => option.value === "RU")}
                                                        className="flex max-h-[2.13rem] items-center bg-transparent text-gray-500 border-none focus:outline-none focus:ring-0"
                                                        indicator={
                                                            <Img
                                                                src="images/img_arrow_down.svg"
                                                                alt="Arrowdown"
                                                                className="h-[0.50rem] w-[0.50rem]"
                                                            />
                                                        }
                                                    />
                                                    <input
                                                        name="phone"
                                                        placeholder="+7 (000) 000 00 00"
                                                        type="tel"
                                                        className="ml-[0.63rem] w-full bg-transparent text-[1.13rem] text-gray-500 placeholder-gray-400 outline-none border-none focus:outline-none focus:ring-0"
                                                    />
                                                </div>
                                                <Input
                                                    shape="round"
                                                    name="элпочта"
                                                    placeholder="Эл. почта"
                                                    className="w-full h-[2.75rem] rounded-[10px] bg-gray-100 px-[1.50rem] text-gray-500 placeholder-gray-400 border-none focus:outline-none focus:ring-0 sm:px-[1.25rem]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className="flex flex-col items-start gap-[1.13rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                            <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                Выберите удобный способ доставки
                                            </Text>
                                            <div className="flex items-center self-stretch">
                                                <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                    Доставка в
                                                </Text>
                                                <div className="flex flex-1 items-center px-[0.38rem]">
                                                    <div className="flex w-[10%] flex-col items-center">
                                                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                                                            Москва
                                                        </Text>
                                                        <div className="h-[0.06rem] w-full self-stretch bg-black"/>
                                                    </div>
                                                    <Img
                                                        src="images/img_arrow_down_black.svg"
                                                        alt="Arrowdown"
                                                        className="h-[0.75rem] w-[0.75rem]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex gap-[0.63rem] self-stretch md:flex-col">
                                                <DeliveryInfoRow
                                                    pickupPointText="В пункт выдачи "
                                                    pickupPointImage="images/img_stash_check_light_green_400.svg"
                                                    deliveryTimeText="До 3х рабочих дней"
                                                    freeDeliveryText="Бесплатно от 7 т р."
                                                    className="border border-solid border-deep_orange-a100_01 bg-white"
                                                />
                                                <DeliveryInfoRow
                                                    pickupPointText="Доставка курьером"
                                                    pickupPointImage="images/img_stash_check_light_secondary_accent.svg"
                                                    deliveryTimeText="До 3х рабочих дней"
                                                    freeDeliveryText="Бесплатно от 10 т р."
                                                    className="bg-gray-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                                            Адрес пункта выдачи
                                        </Text>
                                        <YMaps>
                                            <Map
                                                defaultState={{ center: [55.7558, 37.6176], zoom: 10 }}
                                                className="h-[24.75rem] w-full rounded-lg"
                                            >
                                                <Placemark geometry={[55.7558, 37.6176]} />
                                            </Map>
                                        </YMaps>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                                            Оставьте комментарии к заказку
                                        </Text>
                                        <Input
                                            size="md"
                                            shape="round"
                                            name="frame_two"
                                            placeholder={`Комментарии к заказу`}
                                            className="self-stretch rounded-[10px] px-[1.50rem] sm:px-[1.25rem]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[30%] flex-col gap-[1.13rem] rounded-[20px] bg-white px-[1.75rem] py-[2.38rem] md:w-full sm:p-[1.25rem]">
                                <div className="flex items-center gap-[1.25rem]">
                                    <Img
                                        src="images/img_frame.png"
                                        alt="Image"
                                        className="h-[8.75rem] w-[36%] rounded-[10px] object-contain"
                                    />
                                    <div className="flex flex-1 flex-col gap-[0.50rem]">
                                        <Text as="p" className="text-[1.13rem] font-normal leading-[2.13rem] text-black">
                                            Плюшевое оверсайз худи на взрослого
                                        </Text>
                                        <div className="mb-[1.38rem] flex flex-col items-start gap-[0.13rem]">
                                            <div className="flex items-center justify-center self-stretch">
                                                <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-light_peach" />
                                                <Heading
                                                    size="b2_for_mob"
                                                    as="h2"
                                                    className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                                                >
                                                    Нежно-персиковый
                                                </Heading>
                                            </div>
                                            <Heading
                                                size="b2_for_mob"
                                                as="h3"
                                                className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                                            >
                    Универсальный RU{" "}
                </Heading>
            </div>
        </div>
    </div>
    <div className="flex flex-col gap-[1.25rem]">
        <div className="flex flex-col gap-[0.88rem]">
            <div className="flex flex-col gap-[0.25rem]">
                <div className="flex flex-wrap justify-between gap-[1.25rem]">
                    <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                        Товары, 2 шт
                    </Text>
                    <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                        7 000 ₽
                    </Text>
                </div>
                <div className="flex flex-wrap justify-between gap-[1.25rem]">
                    <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                        Моя скидка
                    </Text>
                    <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                        2 800 ₽
                    </Text>
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-[1.25rem]">
                <Heading
                    size="headinglg"
                    as="h4"
                    className="text-[1.50rem] font-extrabold tracking-[0.00rem] text-black md:text-[1.38rem]"
                >
                    Итого
                </Heading>
                <Heading
                    size="headinglg"
                    as="h5"
                    className="text-[1.50rem] font-extrabold tracking-[0.00rem] text-black md:text-[1.38rem]"
                >
                    7 000 ₽
                </Heading>
            </div>
        </div>
        <div className="flex flex-col gap-[0.63rem]">
            <Button
                shape="round"
                color="orange_50_deep_orange_200"
                className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem] text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
                                           hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
            >
                Оформить заказ
            </Button>
            <div className="flex items-start justify-center gap-[0.25rem]">
                <Img
                    src="images/img_stash_check_light.svg"
                    alt="Stashcheck"
                    className="h-[1.50rem] w-[1.50rem]"
                />
                <Text
                    size="textxs"
                    as="p"
                    className="w-[92%] self-center text-[0.75rem] font-normal leading-[1.63rem] text-secondary_accent"
                >
                    <span>Я ознакомился и соглашаюсь с&nbsp;</span>
                    <a href="#" className="inline underline">
                        Политикой конфиденциальности
                    </a>
                </Text>
            </div>
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

