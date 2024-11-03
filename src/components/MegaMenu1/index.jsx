import { Text } from "../../components";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function MegaMenu1() {
    const navigate = useNavigate();

    return (
        <div className="absolute top-auto z-[99] min-w-[12.50rem] pt-[0.75rem]">
            <div className="w-full rounded-lg bg-white p-[1.25rem] shadow-xs">
                <div className="flex gap-[1.88rem]">
                    <div className="flex flex-col items-start gap-[1.00rem] sm:gap-[1.00rem]">
                        <div className="flex flex-col items-start gap-[0.75rem] sm:gap-[0.75rem]">
                            <p onClick={() => navigate('/catalog')}  className="sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Все худи</Text>
                            </p>
                            <p onClick={() => navigate('/catalog')} className="sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Для детей</Text>
                            </p>
                            <p onClick={() => navigate('/catalog')} className="self-center sm:text-[0.81rem]">
                                <Text className="text-[1.00rem] font-normal text-black_600">Для взрослых</Text>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

