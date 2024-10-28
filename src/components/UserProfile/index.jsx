import { Img, Text, RatingBar, Heading } from "./..";
import React from "react";

export default function UserProfile({
                                        userName = "А",
                                        userFullName = "Алиса К.",
                                        userJoinDate = "11 сентября 2024 года",
                                        prop = "Стильно, удобно, оверсайз",
                                        ...props
                                    }) {
    return (
        <div {...props} className={`${props.className} flex sm:flex-col items-start gap-[0.38rem] flex-1`}>
            <Heading
                size="h3_for_price"
                as="h5"
                className="flex h-[3.00rem] w-[3.00rem] items-center justify-center rounded-[24px] bg-deep_orange-50 text-center text-[1.25rem] font-extrabold tracking-[0.00rem] text-white sm:w-[3.00rem] sm:text-[1.06rem]"
            >
                {userName}
            </Heading>
            <div className="flex flex-1 flex-col gap-[0.50rem] self-center sm:gap-[0.50rem]">
                <div className="flex items-center justify-center">
                    <Text as="p" className="text-[0.88rem] font-normal text-black">
                        {userFullName}
                    </Text>
                    <div className="flex flex-1 items-center justify-end gap-[0.63rem]">
                        <Text size="textxs" as="p" className="text-[0.63rem] font-normal text-secondary_accent">
                            {userJoinDate}
                        </Text>
                        <RatingBar
                            value={5}
                            isEditable={true}
                            color="#f3c853"
                            activeColor="#f3c853"
                            size={18}
                            className="flex gap-[0.63rem]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[0.63rem] sm:gap-[0.63rem]">
                    <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black sm:text-[0.94rem]">
                        {prop}
                    </Text>
                    <div className="flex gap-[0.38rem] self-stretch">
                        <Img
                            src="images/img_rectangle_200x180.png"
                            alt="First Image"
                            className="h-[12.50rem] w-[28%] rounded-[12px] object-contain"
                        />
                        <Img
                            src="images/img_rectangle_200x180.png"
                            alt="Second Image"
                            className="h-[12.50rem] w-[28%] rounded-[12px] object-contain"
                        />
                        <Img
                            src="images/img_rectangle_200x180.png"
                            alt="Third Image"
                            className="h-[12.50rem] w-[14%] rounded-[12px] object-contain"
                        />
                        <Img
                            src="images/img_rectangle_200x180.png"
                            alt="Fourth Image"
                            className="h-[12.50rem] w-[14%] rounded-[12px] object-contain"
                        />
                        <Img
                            src="images/img_rectangle_200x180.png"
                            alt="Fifth Image"
                            className="h-[12.50rem] w-[14%] rounded-[12px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

