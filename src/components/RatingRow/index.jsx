import { Text, Img } from "./..";
import React from "react";

export default function RatingRow({
                                      ratingText = "5 звезд",
                                      groupImage = "images/img_group_gray_400.svg",
                                      reviewCount = "292",
                                      ...props
                                  }) {
    return (
        <div {...props} className={`${props.className} flex sm:flex-col justify-center items-center gap-[1.88rem] flex-1`}>
            <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                {ratingText}
            </Text>
            <div className="flex flex-1 items-center justify-center gap-[0.63rem]">
                <Img src={groupImage} alt="Gray Image" className="h-[0.06rem] w-[94%] object-contain" />
                <Text as="p" className="text-[0.88rem] font-normal text-secondary_accent">
                    {reviewCount}
                </Text>
            </div>
        </div>
    );
}

