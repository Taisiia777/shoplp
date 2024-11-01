import { Img, Text } from "./..";
import React from "react";

export default function DeliveryOptions({
                                            shopImage = "images/img_solar_shop_linear.svg",
                                            pickupPointText = "В пунктах выдачи – бесплатно",
                                            showPickupPointsText = "Показать пункты выдачи",
                                            ...props
                                        }) {
    return (
        <div {...props} className={`${props.className} flex sm:flex-col justify-center items-center flex-1`}>
            <div className="flex flex-1 items-center justify-center gap-[0.63rem]">
                <Img src={shopImage} alt="Solar Image" className="h-[1.50rem] w-[1.50rem]" />
                <div className="flex flex-1 flex-col items-start gap-[0.13rem]">
                    <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
                        {pickupPointText}
                    </Text>
                    <div className="flex flex-col items-start justify-center self-stretch">
                        <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                            {showPickupPointsText}
                        </Text>
                        <div className="relative mt-[-0.13rem] h-[0.06rem] w-[38%] bg-secondary_accent" />
                    </div>
                </div>
            </div>
            <Img src="/public/images/img_el_question.svg" alt="Question Image" className="h-[1.50rem] w-[1.50rem]" />
        </div>
    );
}

