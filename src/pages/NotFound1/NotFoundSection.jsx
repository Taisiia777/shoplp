import { Button, Text } from "../../components";
import React from "react";

export default function NotFoundSection() {
    return (
        <>
            {/* not found section */}
            <div className="flex justify-center">
                <div className="container-xs flex justify-center md:px-[1.25rem]">
                    <div className="flex h-[36.25rem] w-full flex-col items-center justify-end rounded-[20px] bg-gradient2 bg-cover bg-no-repeat px-[3.50rem] py-[4.38rem] md:h-auto md:p-[1.25rem]">
                        <div className="mt-[19.25rem] flex flex-col items-center gap-[0.75rem]">
                            <Text
                                size="1280_h1"
                                as="p"
                                className="font-roundsblack text-[2.75rem] font-normal tracking-[0.06rem] text-white md:text-[2.50rem] sm:text-[2.13rem]"
                            >
                                Страница находится в разработке
                            </Text>
                            <Button
                                size="md"
                                shape="round"
                                color="orange_50_deep_orange_200"
                                className="min-w-[21.88rem] rounded-[10px] px-[2.13rem] font-medium sm:px-[1.25rem]"
                            >
                                Перейти на главную
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

