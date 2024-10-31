import { Helmet } from "react-helmet";
import { Heading, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ContsctsRowOne from "./ContsctsRowOne";
import React from "react";

export default function ContsctsPage() {
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
                                            className="text-[1.38rem] font-semibold leading-[1.88rem] tracking-[0.00rem] text-deep_orange-a100"
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
    );
}

