import { Img, Text } from "./..";
import React from "react";

export default function ColorRowDisplay({
                                            colorText = "Цвет",
                                            adultsText = "2 взрослых",
                                            childrenText = "2 детских",
                                            ...props
                                        }) {
    return (
        <div {...props} className={`${props.className} flex items-center gap-[0.69rem]`}>
            <Text size="1280_b2" as="p" className="text-[0.88rem] font-normal tracking-[0.00rem] text-secondary_accent">
                {colorText}
            </Text>
            <div className="flex w-[50%] justify-center gap-[0.63rem] rounded-lg border border-solid border-deep_orange-100 p-[0.38rem]">
                <div className="flex w-full items-center justify-center gap-[0.38rem]">
                    <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-light_peach" />
                    <Text size="1280_b2" as="p" className="text-[0.88rem] font-normal tracking-[0.00rem] text-black">
                        {adultsText}
                    </Text>
                </div>
                <div className="flex w-full items-center justify-center gap-[0.63rem]">
                    <div className="flex flex-1 items-center justify-center gap-[0.38rem]">
                        <div className="h-[1.25rem] w-[1.25rem] rounded-[10px] bg-hoodie_colors-navy" />
                        <Text size="1280_b2" as="p" className="text-[0.88rem] font-normal tracking-[0.00rem] text-black">
                            {childrenText}
                        </Text>
                    </div>
                    <Img src="images/img_arrow_down.svg" alt="Dropdown Arrow" className="h-[0.38rem]" />
                </div>
            </div>
        </div>
    );
}

