import { Text, Heading, Img } from "components";
import React from "react";

export default function OrderoneColumn() {
    return (
        <div className="flex flex-col items-center self-stretch mt-[20px]">
            <div className="container-xs flex flex-col gap-[1.00rem] md:px-[1.25rem]">
                <div className="flex items-start justify-between gap-[1.25rem]">
                    <Img src="images/img_stash_arrow_up.svg" alt="Stasharrowup" className="h-[1.75rem] w-[1.75rem]"/>
                    <Heading
                        size="headingmd"
                        as="h1"
                        className="mr-[31.13rem] self-center text-[1.38rem] font-semibold text-black whitespace-nowrap"
                    >
                        Оформление заказа
                    </Heading>

                </div>
                <div
                    className="ml-[15.88rem] mr-[16.13rem] flex flex-col items-center gap-[0.13rem] px-[1.88rem] md:mx-0 sm:px-[1.25rem] md:text-center md:mx-auto">
                    <div
                        className="mx-[5.63rem] flex items-center justify-center gap-[0.38rem] self-stretch md:mx-0 md:flex-col">
                        <Text as="p" className="text-[1.13rem] md:text-[0.88rem] font-normal text-black">
                            <span className="border-b border-dotted border-black">Войдите</span> в свой аккаунт и мы
                            заполним форму за вас.
                        </Text>
                    </div>
                    <Text as="p" className="text-[1.13rem] md:text-[0.88rem] font-normal text-black">
                        Нет аккаунта? Мы создадим его автоматически в ходе оформления заказа.
                    </Text>
                </div>

            </div>
        </div>
    );
}

