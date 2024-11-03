
import { Button, Text } from "../../components";
import { useNavigate } from 'react-router-dom';
import React from "react";

export default function NotFoundSection() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            {/* Not Found Section */}
            <div className="flex justify-center items-center min-h-[580px] mt-[30px] max-w-[1212px] w-[95vw] mx-auto bg-gray-100">
                <div className="container-xs flex justify-center md:px-4">
                    <div
                        className="flex h-[36.25rem] w-full flex-col items-center justify-center
                                   rounded-[20px] bg-cover bg-center bg-no-repeat p-10"
                        style={{
                            backgroundImage: "url('/images/img_notFound.png')",
                        }}
                    >
                        <div className="flex flex-col items-center gap-4 text-center sm:text-left mt-[13rem]">
                            <Text
                                as="p"
                                className="text-[98px] font-roundsblack font-normal leading-[115%] w-[100%] tracking-[3%] text-white"
                            >
                                404
                            </Text>
                            <Text
                                as="p"
                                className="text-[42px] font-roundsblack font-normal leading-[115%] tracking-[3%] text-white"
                            >
                                Страница не найдена
                            </Text>
                            <Button
                                size="md"
                                shape="round"
                                className="min-w-[21.88rem] rounded-[10px] px-[2.13rem] py-2 font-medium
                                           text-[#8A5A3A] bg-gradient-to-r from-[#FFF1E5] to-[#F0BF96]
                                           hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out"
                                onClick={handleClick}
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
