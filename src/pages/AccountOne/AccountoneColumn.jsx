import { Text, Img, Button, SelectBox, Heading } from "components";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";

export default function AccountoneColumn() {
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
        <div className="mb-[30.88rem] flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-[1.75rem] md:px-[1.25rem]">
                <div className="flex items-center justify-between gap-[1.25rem] self-stretch">
                    <Img src="images/img_stash_arrow_up.svg" alt="Stasharrowup" className="h-[1.75rem] w-[1.75rem]" />
                    <Heading size="headingmd" as="h1" className="mr-[31.13rem] text-[1.38rem] font-semibold text-black">
                        Личный кабинет
                    </Heading>
                </div>
                <div className="flex w-[30%] flex-col items-center gap-[2.25rem] rounded-[20px] bg-white px-[2.50rem] py-[3.63rem] md:w-full md:py-[1.25rem] sm:p-[1.25rem]">
                    <Heading size="headingmd" as="h2" className="text-[1.38rem] font-semibold text-black">
                        Войти или создать профиль
                    </Heading>
                    <div className="flex flex-col gap-[1.25rem] self-stretch">
                        <div className="flex h-[2.75rem] items-center justify-center rounded-[10px] bg-gray-100 px-[1.50rem] sm:px-[1.25rem]">
                            <SelectBox
                                options={countryOptions}
                                defaultValue={countryOptions.find((option) => option.value === "RU")}
                                className="flex max-h-[1.13rem] flex-shrink-0 items-center justify-center bg-transparent"
                                indicator={<Img src="images/img_arrow_down.svg" alt="Arrowdown" className="h-[1.00rem] w-[1.00rem]" />}
                            />
                            <input
                                name="frame_one"
                                placeholder="+7 "
                                type="tel"
                                className="ml-[0.63rem] flex h-[1.50rem] w-[66%] items-center justify-center px-[0.75rem] text-[1.13rem] text-black"
                            />
                        </div>
                        <div className="flex flex-col gap-[0.63rem]">
                            <Button
                                shape="round"
                                color="orange_50_deep_orange_200"
                                className="self-stretch rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem]"
                            >
                                Получить код
                            </Button>
                            <div className="flex items-start justify-center gap-[0.25rem]">
                                <Img src="images/img_stash_check_light.svg" alt="Stashcheck" className="h-[1.50rem] w-[1.50rem]" />
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
    );
}

