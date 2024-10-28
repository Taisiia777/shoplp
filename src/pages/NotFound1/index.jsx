import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import Header from "../../components/Header";
import NotFoundSection from "./NotFoundSection";
import React from "react";

export default function NotFoundPage() {
    return (
        <div>
            <Helmet>
                <title>Page Not Found - Contact Us for Assistance</title>
                <meta
                    name="description"
                    content="Our Page Not Found error indicates the content you're looking for is under development. Reach out via email or phone for immediate assistance."
                />
            </Helmet>

            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="flex flex-col gap-[5.63rem] self-stretch md:gap-[4.19rem] sm:gap-[2.81rem]">
                    {/* not found section */}
                    <NotFoundSection />
                </div>
                <footer className="flex items-end justify-center bg-peach_background py-[2.25rem] sm:py-[1.25rem]">
                    <div className="container-xs mt-[3.25rem] flex justify-center md:px-[1.25rem]">
                        <div className="flex w-full flex-col gap-[5.88rem] md:gap-[4.38rem] sm:gap-[2.94rem]">
                            <div className="flex items-center justify-between gap-[1.88rem] sm:flex-col">
                                <div className="flex w-[32%] flex-col gap-[1.88rem] sm:w-full">
                                    <Img
                                        src="images/img_header_logo.svg"
                                        alt="Footer Logo"
                                        className="h-[2.5rem] w-[5.63rem] object-contain"
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
                                            className="text-[1.38rem] font-semibold leading-[1.88rem] tracking-[0.00rem] text-black"
                                        >
                                            +7 999 999 9999
                                            <br />
                                            <a href="mailto:omfihoodie@gmail.com">omfihoodie@gmail.com</a>
                                        </Heading>
                                    </div>
                                </div>
                                <div className="flex w-[74%] gap-[0.25rem] md:w-full">
                                    <Button shape="square" className="w-[2.75rem] px-[0.13rem]">
                                        <Img src="images/img_checkmark.svg" />
                                    </Button>
                                    <Button shape="square" className="w-[2.75rem] px-[0.13rem]">
                                        <Img src="images/img_checkmark.svg" />
                                    </Button>
                                    <Button shape="square" className="w-[2.75rem] px-[0.13rem]">
                                        <Img src="images/img_checkmark.svg" />
                                    </Button>
                                    <Text
                                        size="meta"
                                        as="p"
                                        className="w-[78%] text-[0.63rem] font-normal leading-[130%] text-gray-700"
                                    >
                                        * Meta (Meta Platforms) - запрещенная в РФ организация
                                    </Text>
                                </div>
                            </div>
                            <Img
                                src="images/img_sparkles_deep_orange_a100_01.svg"
                                alt="Sparkles Image"
                                className="h-[6.88rem] w-[6.88rem] sm:w-full"
                            />
                        </div>
                    </div>
                </footer>
                <div className="flex items-start justify-between gap-[1.25rem] md:flex-col">
                    <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                        © 2024 OMFI. Все права защищены
                    </Text>
                    <div className="flex w-[48%] items-start justify-between gap-[1.25rem] self-center md:w-full">
                        <ul className="flex flex-col items-start gap-[0.38rem] self-center">
                            <li>
                                <a href="#">
                                    <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                                        Политика конфиденциальности
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                                        Оферта
                                    </Text>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col items-start gap-[0.38rem] self-center">
                            <li>
                                <Text size="b3" as="p" className="text-[0.75rem] font-normal text-black">
                                    Разработка сайта
                                </Text>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
