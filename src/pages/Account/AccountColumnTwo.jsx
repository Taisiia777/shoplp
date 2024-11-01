import { Input, Img, Text, SelectBox } from "components";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";

export default function AccountColumnTwo() {
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
        <div className="mb-[5.75rem] flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-[1.25rem] px-[3.50rem] md:px-[1.25rem]">
                <div className="flex w-[74%] flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] md:w-full sm:p-[1.25rem]">
                    <Text as="p" className="text-[1.13rem] font-normal text-black">
                        Личные данные
                    </Text>
                    <div className="flex flex-col gap-[1.25rem] self-stretch">
                        <div className="flex gap-[0.63rem] md:flex-col">
                            <Input
                                shape="round"
                                name="letsiconseditli"
                                placeholder={`Nastya`}
                                suffix={
                                    <Img
                                        src="images/img_letsiconseditlight.svg"
                                        alt="Lets-icons:edit-light"
                                        className="h-[1.50rem] w-[1.50rem]"
                                    />
                                }
                                className="w-full gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                            />
                            <Input
                                shape="round"
                                name="letsiconseditli"
                                placeholder={`M`}
                                suffix={
                                    <Img
                                        src="images/img_letsiconseditlight.svg"
                                        alt="Lets-icons:edit-light"
                                        className="h-[1.50rem] w-[1.50rem]"
                                    />
                                }
                                className="w-full gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                            />
                        </div>
                        <div className="flex gap-[0.63rem] md:flex-col">
                            <div className="flex h-[2.75rem] w-full items-center justify-center rounded-[10px] bg-gray-100 px-[0.25rem]">
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
                                type="email"
                                name="email"
                                placeholder={`Test@mail.ru`}
                                suffix={
                                    <Img
                                        src="images/img_letsiconseditlight.svg"
                                        alt="Lets-icons:edit-light"
                                        className="h-[1.50rem] w-[1.50rem]"
                                    />
                                }
                                className="w-full gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex w-[74%] flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] md:w-full sm:p-[1.25rem]">
                    <Text as="p" className="text-[1.13rem] font-normal text-black">
                        Пароль
                    </Text>
                    <div className="flex gap-[0.63rem] self-stretch md:flex-col">
                        <Input
                            shape="round"
                            name="letsiconseditli"
                            placeholder={`Старый пароль`}
                            suffix={
                                <Img
                                    src="images/img_letsiconseditlight.svg"
                                    alt="Lets-icons:edit-light"
                                    className="h-[1.50rem] w-[1.50rem]"
                                />
                            }
                            className="w-full gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                        />
                        <Input
                            shape="round"
                            name="letsiconseditli"
                            placeholder={`Новый пароль`}
                            suffix={
                                <Img
                                    src="images/img_letsiconseditlight.svg"
                                    alt="Lets-icons:edit-light"
                                    className="h-[1.50rem] w-[1.50rem]"
                                />
                            }
                            className="w-full gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                        />
                    </div>
                </div>
                <div className="flex w-[74%] justify-center md:w-full">
                    <div className="flex w-full flex-col items-start gap-[1.25rem] rounded-[20px] bg-white px-[1.88rem] py-[2.50rem] sm:p-[1.25rem]">
                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                            Адрес доставки
                        </Text>
                        <div className="flex flex-col gap-[1.25rem] self-stretch">
                            <Input
                                shape="round"
                                name="letsiconseditli"
                                placeholder={`Новопасситская`}
                                suffix={
                                    <Img
                                        src="images/img_letsiconseditlight.svg"
                                        alt="Lets-icons:edit-light"
                                        className="h-[1.50rem] w-[1.50rem]"
                                    />
                                }
                                className="gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                            />
                            <div className="flex gap-[0.63rem] md:flex-col">
                                <Input
                                    shape="round"
                                    name="letsiconseditli"
                                    placeholder={`12`}
                                    suffix={
                                        <Img
                                            src="images/img_letsiconseditlight.svg"
                                            alt="Lets-icons:edit-light"
                                            className="h-[1.50rem] w-[1.50rem]"
                                        />
                                    }
                                    className="w-full gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                                />
                                <Input
                                    shape="round"
                                    name="letsiconseditli"
                                    placeholder={`12`}
                                    suffix={
                                        <Img
                                            src="images/img_letsiconseditlight.svg"
                                            alt="Lets-icons:edit-light"
                                            className="h-[1.50rem] w-[1.50rem]"
                                        />
                                    }
                                    className="w-full gap-[1.00rem] rounded-[10px] px-[1.38rem] sm:px-[1.25rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

