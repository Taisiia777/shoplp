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
            {/* not found section */}
            <div className="flex justify-center">
                <div className="container-xs flex justify-center md:px-[1.25rem]">
                    <div
                        className="flex h-[36.25rem] w-full flex-col items-center justify-end
                                   rounded-[20px] bg-cover bg-center bg-no-repeat
                                   px-[3.50rem] py-[4.38rem] md:h-auto md:p-[1.25rem]"
                        style={{
                            backgroundImage: "url('/images/img_notFound.png')", // Прямой URL к изображению
                        }}
                    >
                        <div className="mt-[19.25rem] flex flex-col items-center gap-[0.75rem]">
                            <Text
                                size="1280_h1"
                                as="p"
                                className="font-roundsblack text-[2.75rem] font-normal tracking-[0.06rem] text-[#FFF] md:text-[2.50rem] sm:text-[2.13rem]"
                            >
                                Страница находится в разработке
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

