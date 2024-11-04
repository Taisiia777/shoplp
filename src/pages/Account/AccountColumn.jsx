// import { Heading, Img } from "../../components";
// import React from "react";
// import { useNavigate } from 'react-router-dom';
//
// export default function AccountColumn() {
//     const navigate = useNavigate();
//
//     const handleClick = () => {
//         navigate('/history');
//     };
//     return (
//         <div className="flex flex-col items-center">
//             <div className="container-xs flex flex-col items-center gap-[2.38rem] md:px-[1.25rem]">
//                 <div className="flex items-center justify-between gap-[1.25rem] self-stretch">
//                     <Img src="images/img_stash_arrow_up.svg" alt="Stasharrowup" className="h-[1.75rem] w-[1.75rem]" />
//                     <Heading size="headingmd" as="h1" className="mr-[31.13rem] text-[1.38rem] font-semibold text-black">
//                         Личный кабинет
//                     </Heading>
//                 </div>
//                 <div className="flex w-[36%] justify-between gap-[1.25rem] md:w-full">
//                     <div className="flex items-center gap-[0.25rem]">
//                         <Img
//                             src="images/img_fluent_home_20_regular.svg"
//                             alt="Fluenthometwent"
//                             className="h-[1.38rem] w-[1.38rem]"
//                         />
//                         <Heading  as="h2" className="text-[1.13rem] font-semibold text-red-300">
//                             Аккаунт
//                         </Heading>
//                     </div>
//                     <div className="flex items-center gap-[0.25rem]">
//                         <Img
//                             src="images/img_fluent_check_24_regular.svg"
//                             alt="Fluentchecktwen"
//                             className="h-[1.38rem] w-[1.38rem] self-end"
//                         />
//                         <Heading onClick={handleClick} as="h3" className="text-[1.13rem] font-semibold text-black">
//                             История заказов
//                         </Heading>
//                     </div>
//                     <div className="flex items-center gap-[0.25rem]">
//                         <Img src="images/img_solar_logout_outline.svg" alt="Solarlogout" className="h-[1.38rem] w-[1.38rem]" />
//                         <Heading as="h4" className="text-[1.13rem] font-semibold text-black">
//                             Выйти
//                         </Heading>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import { Heading, Img } from "../../components";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AccountColumn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/history');
    };

    return (
        <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-[2.38rem] md:px-[1.25rem]">
                <div className="flex items-center justify-between gap-[1.25rem] self-stretch">
                    <Img src="images/img_stash_arrow_up.svg" alt="Stasharrowup" className="h-[1.75rem] w-[1.75rem]" />
                    <Heading
                        size="headingmd"
                        as="h1"
                        className="mr-[31.13rem] text-[1.38rem] md:text-[1.13rem] sm:text-[1rem] font-semibold text-black whitespace-nowrap"
                    >
                        Личный кабинет
                    </Heading>
                </div>
                <div className="flex w-[36%] justify-between gap-[1.25rem] md:w-full">
                    <div className="flex items-center gap-[0.25rem]">
                        <Img
                            src="images/img_fluent_home_20_regular.svg"
                            alt="Fluenthometwent"
                            className="h-[1.38rem] w-[1.38rem]"
                        />
                        <Heading as="h2" className="text-[1.13rem] md:text-[1rem] sm:text-[0.88rem] font-semibold text-red-300">
                            Аккаунт
                        </Heading>
                    </div>
                    <div className="flex items-center gap-[0.25rem]">
                        <Img
                            src="images/img_fluent_check_24_regular.svg"
                            alt="Fluentchecktwen"
                            className="h-[1.38rem] w-[1.38rem] self-end"
                        />
                        <Heading
                            onClick={handleClick}
                            as="h3"
                            className="text-[1.13rem] md:text-[1rem] sm:text-[0.88rem] font-semibold text-black"
                        >
                            История заказов
                        </Heading>
                    </div>
                    <div className="flex items-center gap-[0.25rem]">
                        <Img
                            src="images/img_solar_logout_outline.svg"
                            alt="Solarlogout"
                            className="h-[1.38rem] w-[1.38rem]"
                        />
                        <Heading
                            as="h4"
                            className="text-[1.13rem] md:text-[1rem] sm:text-[0.88rem] font-semibold text-black"
                        >
                            Выйти
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}
