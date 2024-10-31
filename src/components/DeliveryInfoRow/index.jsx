import { Text, Img } from "./..";
import React from "react";

export default function DeliveryInfoRow({
                                            pickupPointText = "В пункт выдачи ",
                                            pickupPointImage = "images/img_stash_check_light_green_400.svg",
                                            deliveryTimeText = "До 3х рабочих дней",
                                            freeDeliveryText = "Бесплатно от 7 т р.",
                                            ...props
                                        }) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-start justify-center w-[50%] md:w-full gap-[0.50rem] px-[1.50rem] py-[0.38rem] sm:px-[1.25rem] rounded-[10px]`}
        >
            <div className="flex self-stretch">
                <Text as="p" className="text-[1.13rem] font-normal text-black">
                    {pickupPointText}
                </Text>
                <Img src={pickupPointImage} alt="В Пункт Выдачи" className="h-[1.50rem] w-[1.50rem]" />
            </div>
            <Text size="texts" as="p" className="text-[0.88rem] font-normal text-black">
                {deliveryTimeText}
            </Text>
            <Text size="texts" as="p" className="text-[0.88rem] font-normal text-black">
                {freeDeliveryText}
            </Text>
        </div>
    );
}

