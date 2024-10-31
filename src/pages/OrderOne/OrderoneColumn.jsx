import { Text, Heading, Img } from "components";
import React from "react";

export default function OrderoneColumn() {
    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col gap-[1.00rem] md:px-[1.25rem]">
                <div className="flex items-start justify-between gap-[1.25rem]">
                    <Img src="images/img_stash_arrow_up.svg" alt="Stasharrowup" className="h-[1.75rem] w-[1.75rem]" />
                    <Heading
                        size="headingmd"
                        as="h1"
                        className="mr-[31.13rem] self-center text-[1.38rem] font-semibold text-black"
                    >
                        Оформление заказа
                    </Heading>
                </div>
                <div className="ml-[15.88rem] mr-[16.13rem] flex flex-col items-center gap-[0.13rem] px-[1.88rem] md:mx-0 sm:px-[1.25rem]">
                    <div className="mx-[5.63rem] flex items-center justify-center gap-[0.38rem] self-stretch md:mx-0 md:flex-col">
                        <div className="flex w-[16%] flex-col items-center md:w-full">
                            <Text as="p" className="text-[1.13rem] font-normal text-black">
                                Войдите
                            </Text>
                            <div className="h-[0.06rem] w-full self-stretch bg-black" />
                        </div>
                        <Text as="p" className="text-[1.13rem] font-normal text-black">
                            в свой аккаунт и мы заполним форму за вас.{" "}
                        </Text>
                    </div>
                    <Text as="p" className="text-[1.13rem] font-normal text-black">
                        Нет аккаунта? Мы создадим его автоматически в ходе оформления заказа.
                    </Text>
                </div>
            </div>
        </div>
    );
}

