import { Helmet } from "react-helmet";
import {Button, Heading, Text} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ContsctsRowOne from "./ContsctsRowOne";
import React, {useEffect, useState} from "react";

export default function ContsctsPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            {isMobile ? (
                <>
                    <Helmet>
                        <title>Savelii&#39;s Application17</title>
                        <meta name="description" content="Web site created using create-react-app" />
                    </Helmet>
                    <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                        <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                            <Header />
                        </div>
                        <div className="flex flex-col gap-[23.25rem] self-stretch md:gap-[17.44rem] sm:gap-[11.63rem]">
                            <div className="flex flex-col items-center gap-[3.25rem] sm:gap-[1.63rem]">
                                <div
                                    className="flex justify-center items-center min-h-[580px] mt-[30px] max-w-[1212px] w-[95vw] mx-auto bg-gray-100">
                                    <div className="relative container-xs flex justify-center md:px-4">
                                        <div
                                            className="absolute w-[88vw] inset-0 bg-gradient-to-t from-[#5A4A43] max-h-[70%] mt-[50%] to-transparent opacity-90 rounded-b-[20px] z-10 pointer-events-none max-w-[1212px] mx-auto"/>

                                        <div
                                            className="flex h-[36.25rem] w-full flex-col items-center justify-center
                                   rounded-[20px] bg-cover bg-center bg-no-repeat p-10"
                                            style={{
                                                backgroundImage: "url('/images/img_notFound.png')",
                                            }}
                                        >
                                            <div
                                                className="flex flex-col items-center gap-4 text-left sm:text-left mt-[30rem]">

                                                <Text
                                                    as="p"
                                                    className="text-[42px] font-roundsblack font-normal w-[80vw] leading-[115%] tracking-[3%] text-white z-[10]"
                                                >
                                                    Контакты
                                                </Text>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <Footer />
                        </div>
                    </div>

                </>
            ) : (
<>
                    <Helmet>
                <title>Savelii&#39;s Application17</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="flex flex-col gap-[23.25rem] self-stretch md:gap-[17.44rem] sm:gap-[11.63rem]">
                    <div className="flex flex-col items-center gap-[3.25rem] sm:gap-[1.63rem]">
                        <ContsctsRowOne />
                        <div className="container-xs md:px-[1.25rem]">
                            <div className="flex items-start md:flex-col">
                                <div className="flex w-[48%] flex-col gap-[1.75rem] self-center md:w-full">
                                    <div className="flex flex-col items-start gap-[1.25rem]">
                                        <Heading as="h1" className="text-[1.13rem] font-bold tracking-[0.00rem] text-black">
                                            Служба поддержки
                                        </Heading>
                                        <Heading
                                            size="1280_socials"
                                            as="h2"
                                            className="text-[1.38rem] font-semibold leading-[1.88rem] tracking-[0.00rem] text-deep_orange-a100 text-[#DA9B71]"
                                        >
                                            <>
                                                +7 999 999 9999
                                                <br />
                                                omfihoodie@gmail.com
                                            </>
                                        </Heading>
                                    </div>
                                    <div className="flex flex-col items-start gap-[1.13rem]">
                                        <Heading as="h3" className="text-[1.13rem] font-bold tracking-[0.00rem] text-black">
                                            По вопросам производственного сотрудничества
                                        </Heading>
                                        <Heading
                                            size="1280_socials"
                                            as="h4"
                                            className="text-[1.38rem] font-semibold tracking-[0.00rem] text-black"
                                        >
                                            ?????omfihoodie@gmail.com
                                        </Heading>
                                    </div>
                                    <div className="flex flex-col items-start gap-[1.25rem]">
                                        <Heading as="h5" className="text-[1.13rem] font-bold tracking-[0.00rem] text-black">
                                            Офис
                                        </Heading>
                                        <Text size="textmd" as="p" className="text-[1.13rem] font-normal tracking-[0.00rem] text-black">
                                            Москва, ул.
                                        </Text>
                                    </div>
                                </div>
                                <Heading as="h6" className="text-[1.13rem] font-bold tracking-[0.00rem] text-black">
                                    Реквизиты
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
</>
                )}

        </>
    );
}

