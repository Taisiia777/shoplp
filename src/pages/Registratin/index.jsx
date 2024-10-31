import { Helmet } from "react-helmet";
import { Img, Text } from "components";
import Header from "components/Header";
import RegistratinColumn from "./RegistratinColumn";
import React from "react";

export default function RegistratinPage() {
    return (
        <>
            <Helmet>
                <title>Savelii&#39;s Application17</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-white">
                <div className="container-xs mt-[1.13rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="relative h-[43.13rem] self-stretch md:h-auto">
                    <div className="container-xs mt-[1.88rem] flex md:px-[1.25rem]">
                        <div className="flex h-[36.25rem] w-full flex-col items-center rounded-[20px] bg-gradient1 bg-cover bg-no-repeat p-[2.50rem] md:h-auto sm:p-[1.25rem]">
                            <div className="mt-[6.13rem] flex w-[72%] flex-col gap-[11.25rem] md:w-full md:gap-[8.44rem] sm:gap-[5.63rem]">
                                <Img src="images/img_heart.svg" alt="Heart" className="ml-[18.25rem] h-[6.00rem] w-[6.00rem] md:ml-0" />
                                <div className="flex flex-col items-center gap-[3.50rem] sm:gap-[1.75rem]">
                                    <Text
                                        size="1280_h1"
                                        as="p"
                                        className="font-roundsblack text-[2.75rem] font-normal tracking-[0.06rem] text-white md:text-[2.50rem] sm:text-[2.13rem]"
                                    >
                                        Создай свой уютный момент
                                    </Text>
                                    <div className="flex w-[26%] justify-center gap-[0.63rem] md:w-full">
                                        <div className="h-[0.38rem] w-full rounded-[3px] bg-white" />
                                        <div className="h-[0.38rem] w-full rounded-[3px] bg-60__white_for_sliders" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[41.25rem] flex-1 bg-deep_orange-50_7f" />
                    <div className="absolute right-[0.06rem] top-[0.00rem] m-auto flex w-[32%] flex-col items-end rounded-bl-[20px] rounded-br-[20px] bg-white py-[1.63rem] sm:py-[1.25rem]">
                        <Img
                            src="images/img_clarity_close_line.svg"
                            alt="Clarityclose"
                            className="mr-[2.13rem] h-[1.50rem] w-[1.50rem] md:mr-0"
                        />
                        <RegistratinColumn />
                    </div>
                </div>
            </div>
        </>
    );
}

