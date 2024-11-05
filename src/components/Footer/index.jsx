import { Text, Img, Button, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
    return (
        <footer
            {...props}
            className={`${props.className} flex justify-center items-end py-[2.25rem] sm:py-[1.25rem] bg-peach_background`}
        >
            <div className="container-xs mt-[3.25rem] flex justify-center md:px-[1.25rem]">
                <div className="flex w-full flex-col gap-[5.88rem] md:gap-[4.38rem] sm:gap-[2.94rem]">
                    <div className="flex items-center justify-between gap-[1.25rem] sm:flex-col">
                        <div className="flex w-[32%] flex-col gap-[1.88rem] sm:w-full">
                            <Img
                                src="images/img_header_logo.svg"
                                alt="Footer Logo"
                                className="h-[2.50rem] w-[5.63rem] object-contain"
                            />
                            <div className="flex flex-col items-start gap-[0.88rem]">
                                <Text
                                    size="1280_b2"
                                    as="p"
                                    className="w-[86%] text-[0.88rem] font-normal leading-[1.19rem] tracking-[0.00rem] text-black md:w-full"
                                >
                                    Если у вас возникли вопросы, вы можете связаться с нами любым удобным способом
                                </Text>
                                <Heading
                                    size="1280_socials"
                                    as="h5"
                                    className="text-[1.38rem] font-semibold leading-[1.88rem] tracking-[0.00rem] text-black"
                                >
                                    <>
                                        +7 999 999 9999
                                        <br />
                                        omfihoodie@gmail.com
                                    </>
                                </Heading>
                                <div className="flex w-[74%] gap-[0.25rem] md:w-full">
                                    <Button shape="square" className="w-[2.75rem] px-[0.13rem]">
                                        <Img src="images/img_checkmark.svg" />
                                    </Button>
                                    <Img src="images/img_call.svg" alt="Call Icon" className="h-[2.75rem] w-[2.75rem]" />
                                    <div className="flex flex-1 items-center gap-[0.25rem]">
                                        <Button shape="square" className="w-[2.75rem] px-[0.13rem]">
                                            <Img src="images/img_checkmark1.svg" />
                                        </Button>
                                        <Text
                                            size="meta"
                                            as="p"
                                            className="w-[78%] text-[0.63rem] font-normal leading-[130%] text-gray-700"
                                        >
                                            * Мета (Meta Platforms) –запрещенная в РФ организация
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Img
                            src="images/img_sparkles_deep_orange_a100_01.svg"
                            alt="Decorative Image"
                            className="h-[6.88rem] w-[6.88rem] sm:w-full"
                        />
                    </div>
                    <div className="flex items-start justify-between gap-[1.25rem] md:flex-col">
                        <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                            © 2024 OMLI. Все права защищены
                        </Text>
                        <div className="flex w-[48%] items-start justify-between gap-[1.25rem] self-center md:w-full">
                            {/*<ul className="flex flex-col items-start gap-[0.38rem] self-center">*/}
                            {/*    <li>*/}
                            {/*        <a href="#">*/}
                            {/*            <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">*/}
                            {/*                Политика конфиденциальности*/}
                            {/*            </Text>*/}
                            {/*        </a>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <a href="Оферта" target="_blank" rel="noreferrer">*/}
                            {/*            <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">*/}
                            {/*                Оферта*/}
                            {/*            </Text>*/}
                            {/*        </a>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                            <ul className="flex flex-col items-start gap-[0.38rem] self-center">
                                <li>
                                        <a href="/documents/Политика конфиденциальности Omli.docx" download target="_blank" rel="noreferrer">
                                        <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                                            Политика конфиденциальности
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                    <a href="/documents/Публичная оферта Omli.docx" download target="_blank" rel="noreferrer">
                                        <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                                            Оферта
                                        </Text>
                                    </a>
                                </li>
                            </ul>
                            <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                                Разработка сайта
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

