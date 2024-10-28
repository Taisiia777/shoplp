import { Text } from "../../components";
import React from "react";

export default function MegaMenu1() {
    return (
        <div className="absolute top-auto z-[99] min-w-[12.50rem] pt-[0.75rem]">
            <div className="w-full rounded-lg bg-white p-[1.25rem] shadow-xs">
                <div className="flex gap-[1.88rem]">
                    <div className="flex flex-col items-start gap-[1.00rem] sm:gap-[1.00rem]">
                        <Text className="text-[1.13rem] font-bold text-black sm:text-[0.94rem]">Title 1</Text>
                        <div className="flex flex-col items-start gap-[0.75rem] sm:gap-[0.75rem]">
                            <a href="#" className="sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 1</Text>
                            </a>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 2</Text>
                            </a>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 3</Text>
                            </a>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 4</Text>
                            </a>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 5</Text>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[1.00rem] sm:gap-[1.00rem]">
                        <Text className="text-[1.13rem] font-bold text-black sm:text-[0.94rem]">Title 2</Text>
                        <div className="flex flex-col items-start gap-[0.75rem] sm:gap-[0.75rem]">
                            <a href="#" className="sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 1</Text>
                            </a>
                            <Text className="self-center text-[1.00rem] font-normal text-black_600 sm:text-[0.81rem]">Menu 2</Text>
                            <Text className="self-center text-[1.00rem] font-normal text-black_600 sm:text-[0.81rem]">Menu 3</Text>
                            <Text className="self-center text-[1.00rem] font-normal text-black_600 sm:text-[0.81rem]">Menu 4</Text>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 5</Text>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[1.00rem] sm:gap-[1.00rem]">
                        <Text className="text-[1.13rem] font-bold text-black sm:text-[0.94rem]">Title 3</Text>
                        <div className="flex flex-col items-start gap-[0.75rem] sm:gap-[0.75rem]">
                            <a href="#" className="sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 1</Text>
                            </a>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 2</Text>
                            </a>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 3</Text>
                            </a>
                            <a href="#" className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Menu 4</Text>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

