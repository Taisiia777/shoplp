import { Text } from "components";
import React from "react";

export default function ContsctsRowOne() {
    return (
        <div className="flex justify-center self-stretch">
            <div className="container-xs flex justify-center md:px-[1.25rem]">
                <div className="h-[21.88rem] w-full rounded-[20px] bg-[url(/public/images/img_banner_slider.png)] bg-cover bg-no-repeat px-[1.25rem] py-[2.13rem] md:h-auto sm:py-[1.25rem]">
                    <div className="mb-[8.88rem] flex flex-col items-start gap-[0.88rem]">
                        <Text
                            size="1280_h1"
                            as="p"
                            className="font-roundsblack text-[2.75rem] font-normal tracking-[0.06rem] text-black md:text-[2.50rem] sm:text-[2.13rem]"
                        >
                            Контакты
                        </Text>
                        <Text
                            size="textlg"
                            as="p"
                            className="w-[38%] text-[1.38rem] font-normal leading-[1.88rem] text-black md:w-full"
                        >
                            <>
                                Ежедневно с 10 утра до 18:00 вечера (Мск)
                                <br />
                                Ответим на любой вопрос! : )
                            </>
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

