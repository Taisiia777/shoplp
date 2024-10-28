import MegaMenu1 from "../MegaMenu1";
import { Heading, Img, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header {...props} className={`${props.className} flex sm:flex-col justify-between items-center gap-[1.25rem]`}>
            <Img src="images/img_header_logo.svg" alt="Header Logo" className="h-[2.50rem] w-[5.63rem] object-contain" />
            <div className="flex w-[44%] items-center justify-between gap-[1.25rem] md:w-full sm:flex-col">
                <ul className="flex gap-[0.50rem] sm:flex-col">
                    <li
                        onMouseLeave={() => {
                            setMenuOpen(false);
                        }}
                        onMouseEnter={() => {
                            setMenuOpen(true);
                        }}
                    >
                        <div className="flex cursor-pointer items-center gap-[0.25rem]">
                            <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
                                Худи{" "}
                            </Text>
                            <Img src="images/img_arrow_down_black.svg" alt="Dropdown Arrow" className="h-[0.75rem] w-[0.75rem]" />
                        </div>
                        {menuOpen ? <MegaMenu1 /> : null}
                    </li>
                    <li>
                        <a href="#">
                            <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
                                Доставка
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
                                Возврат и обмен
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Text size="1280_h4" as="p" className="text-[1.13rem] font-normal text-black">
                                Контакты
                            </Text>
                        </a>
                    </li>
                </ul>
                <div className="flex w-[12%] justify-center gap-[0.63rem] sm:w-full">
                    <a href="#">
                        <Img src="images/img_fluent_person_16_regular.svg" alt="Profile Icon" className="h-[1.75rem] w-[1.75rem]" />
                    </a>
                    <div className="flex h-[1.75rem] w-[1.75rem] flex-col items-center justify-center bg-[url(/public/images/img_f7_bag.svg)] bg-cover bg-no-repeat md:h-auto">
                        <Heading
                            size="headingxs"
                            as="p"
                            className="flex h-[1.13rem] w-[1.13rem] items-center justify-center rounded-lg bg-sale_red text-center text-[0.50rem] font-semibold text-white"
                        >
                            2
                        </Heading>
                    </div>
                </div>
            </div>
        </header>
    );
}

