import { Button, Heading, Text, Img } from "./..";
import React from "react";

export default function OrderSummary({
                                         orderDetails = "Заказ №37145194 от 24.10.2024",
                                         productImage = "images/img_frame.png",
                                         productName = "Плюшевое оверсайз худи на взрослого",
                                         colorDescription = "Нежно-персиковый",
                                         sizeDescription = "Универсальный RU ",
                                         itemCount = "Товары, 2 шт",
                                         totalPrice = "6 600 ₽",
                                         discountLabel = "Моя скидка",
                                         discountedPrice = "4 400 ₽",
                                         currentPrice = "6 600 ₽",
                                         discountPercentage = "–25%",
                                         originalPrice = "8 800 ₽",
                                         reviewButtonLabel = "Оставить отзыв",
                                         ...props
                                     }) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-start gap-[1.00rem] px-[1.88rem] py-[2.50rem] sm:p-[1.25rem] bg-white flex-1 rounded-[20px]`}
        >
            <Heading size="1280_button" as="p" className="text-[1.13rem] font-medium text-secondary_accent sm:text-[0.94rem]">
                {orderDetails}
            </Heading>
            <div className="flex items-start self-stretch">
                <div className="flex flex-1 items-start gap-[1.25rem]">
                    <Img
                        src={productImage}
                        alt="Image"
                        className="h-[8.75rem] w-[26%] self-center rounded-[10px] object-contain"
                    />
                    <div className="flex flex-1 flex-col gap-[0.50rem] sm:gap-[0.50rem]">
                        <Text
                            as="p"
                            className="w-[66%] text-[1.13rem] font-normal leading-[2.13rem] text-black sm:w-full sm:text-[0.94rem]"
                        >
                            {productName}
                        </Text>
                        <div className="flex flex-col items-start gap-[0.13rem] sm:gap-[0.13rem]">
                            <div className="flex items-center self-stretch">
                                <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-light_peach" />
                                <Heading
                                    size="b2_for_mob"
                                    as="p"
                                    className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                                >
                                    {colorDescription}
                                </Heading>
                            </div>
                            <Heading
                                size="b2_for_mob"
                                as="p"
                                className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent"
                            >
                                {sizeDescription}
                            </Heading>
                        </div>
                    </div>
                </div>
                <div className="flex w-[24%] flex-col gap-[0.25rem] sm:gap-[0.25rem]">
                    <div className="flex flex-wrap gap-[1.25rem]">
                        <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                            {itemCount}
                        </Text>
                        <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                            {totalPrice}
                        </Text>
                    </div>
                    <div className="flex flex-wrap gap-[1.31rem]">
                        <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                            {discountLabel}
                        </Text>
                        <Text size="texts" as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                            {discountedPrice}
                        </Text>
                    </div>
                </div>
                <div className="flex w-[28%] flex-col items-end gap-[1.13rem] self-center sm:gap-[1.13rem]">
                    <div className="flex flex-col items-end gap-[0.38rem] self-stretch sm:gap-[0.38rem]">
                        <Heading
                            size="h3_for_price"
                            as="h5"
                            className="text-[1.25rem] font-extrabold tracking-[0.00rem] text-black sm:text-[1.06rem]"
                        >
                            {currentPrice}
                        </Heading>
                        <Heading size="sale" as="p" className="text-[0.88rem] font-semibold tracking-[0.00rem] text-sale_red">
                            {discountPercentage}
                        </Heading>
                        <Heading
                            size="crossed_out_priced"
                            as="p"
                            className="text-[0.88rem] font-medium tracking-[0.00rem] text-secondary_accent line-through"
                        >
                            {originalPrice}
                        </Heading>
                    </div>
                    <Button
                        shape="round"
                        color="orange_50_deep_orange_200"
                        className="min-w-[11.38rem] rounded-[10px] px-[1.50rem] font-medium sm:px-[1.25rem]"
                    >
                        {reviewButtonLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
}

