//
//
//
//
// import React, { useState, useEffect } from "react";
// import MegaMenu1 from "../MegaMenu1";
// import { Heading, Img, Text } from "./..";
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import MenuComponent from "components/Menu/MenuComponent";
// export default function Header({ isAnimating }) {
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 620); // Проверка текущей ширины экрана
//     const [menuOpen, setMenuOpen] = useState(false); // Состояние для мобильного меню
//
//     const navigate = useNavigate();
//     const cartItems = useSelector((state) => state.cart.items);
//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//
//     // Обновление состояния при изменении ширины экрана
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 620);
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);
//
//     const toggleMenu = () => setMenuOpen(!menuOpen);
//
//     return (
//         <header className="header flex justify-between items-center p-4 sm:px-6">
//             {/* Мобильный иконка меню для экрана <620px */}
//             {isMobile && (
//                 <div className="burger-icon cursor-pointer lg:hidden" onClick={toggleMenu}>
//                     <Img src="images/img_hamburger_icon.svg" alt="Menu" className="h-6 w-6" />
//                 </div>
//             )}
//
//             {/* Логотип */}
//             <Img
//                 onClick={() => navigate('/')}
//                 src="images/img_header_logo.svg"
//                 alt="Header Logo"
//                 className="logo h-[2.50rem] w-[5.63rem] object-contain cursor-pointer"
//             />
//
//             {/* Десктопное меню навигации - только для экрана >620px */}
//             {!isMobile && (
//                 <nav className="nav-menu flex w-[44%] items-center  justify-between gap-[1.25rem] ml-auto">
//                     <ul className="flex gap-[2rem]">
//                         <li
//                             onMouseLeave={() => setMenuOpen(false)}
//                             onMouseEnter={() => setMenuOpen(true)}
//                             className="cursor-pointer"
//                         >
//                             <div className="flex items-center gap-[0.25rem]">
//                                 <Text
//                                     size="1280_h4"
//                                     as="p"
//                                     className="menu-item text-[1.13rem] font-normal text-black hover:text-[#CF7A48]"
//                                 >
//                                     Худи
//                                 </Text>
//                                 <Img src="images/img_arrow_down_black.svg" alt="Dropdown Arrow" className="h-[0.75rem] w-[0.75rem]" />
//                             </div>
//                             {menuOpen && <MegaMenu1 />}
//                         </li>
//                         <li onClick={() => navigate('/card')} className="menu-item cursor-pointer text-black hover:text-[#CF7A48]">
//                             Доставка
//                         </li>
//                         <li onClick={() => navigate('/refund')} className="menu-item cursor-pointer text-black hover:text-[#CF7A48]">
//                             Возврат и обмен
//                         </li>
//                         <li onClick={() => navigate('/contscts')} className="menu-item cursor-pointer text-black hover:text-[#CF7A48]">
//                             Контакты
//                         </li>
//                     </ul>
//                 </nav>
//             )}
//
//             {/* Иконки аккаунта и корзины - отображаются на всех устройствах */}
//             <div className="icon-group flex gap-4">
//                 <div onClick={() => navigate('/account')} className="cursor-pointer">
//                     <Img src="images/img_fluent_person_16_regular.svg" alt="Profile Icon" className="h-6 w-6" />
//                 </div>
//                 <div onClick={() => navigate('/cart')} className={`relative cursor-pointer ${isAnimating ? "cart-bounce" : ""}`}>
//                     <Img src="images/img_f7_bag.svg" alt="Cart Icon" className="h-6 w-6" />
//                     {cartItemCount > 0 && (
//                         <span className="cart-count absolute top-0 right-0 h-4 w-4 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
//                             {cartItemCount}
//                         </span>
//                     )}
//                 </div>
//             </div>
//
//             {/* Мобильное меню боковой панели, отображается только при открытом меню */}
//             {isMobile && menuOpen && (
//                 <div
//                     className={`side-menu-overlay fixed inset-0  bg-opacity-50 z-40 transition-opacity duration-300 ${
//                         menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                     }`}
//                     onClick={toggleMenu}
//                 >
//                     <div className="fixed top-0 left-0 h-full w-[90vw] bg-white z-50 transform transition-transform duration-300">
//                         <div className="flex justify-end p-4">
//                             <button onClick={toggleMenu} className="text-2xl">&times;</button>
//                         </div>
//                         <MenuComponent/>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }
//
import React, { useState, useEffect } from "react";
import MegaMenu1 from "../MegaMenu1";
import { Heading, Img, Text } from "./..";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuComponent from "components/Menu/MenuComponent";

export default function Header({ isAnimating }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 620); // Проверка текущей ширины экрана
    const [menuOpen, setMenuOpen] = useState(false); // Состояние для мобильного меню

    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Обновление состояния при изменении ширины экрана
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1070);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            {/* Хедер, который всегда должен быть поверх бокового меню */}
            <header className="header flex max-w-[1211px] mx-auto justify-between items-center p-4 sm:px-6 fixed top-0 left-1/2 transform -translate-x-1/2 w-full bg-white z-50">
                {/* Иконка бургера / крестик для мобильного меню */}
                {isMobile && (
                    <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
                        <Img
                            src={menuOpen ? "images/img_close_icon.svg" : "images/img_hamburger_icon.svg"}
                            alt={menuOpen ? "Close Menu" : "Open Menu"}
                            className="h-6 w-6"
                        />
                    </div>
                )}

                {/* Логотип */}
                <Img
                    onClick={() => navigate('/')}
                    src="images/img_header_logo.svg"
                    alt="Header Logo"
                    className="logo h-[2.50rem] w-[5.63rem] object-contain cursor-pointer"
                />

                {/* Десктопное меню навигации - только для экрана >620px */}
                {!isMobile && (
                    <nav className="nav-menu flex w-[44%] items-center justify-between gap-[1.25rem] ml-auto">
                        <ul className="flex gap-[2rem]">
                            <li
                                onMouseLeave={() => setMenuOpen(false)}
                                onMouseEnter={() => setMenuOpen(true)}
                                className="cursor-pointer"
                            >
                                <div className="flex items-center gap-[0.25rem]">
                                    <Text
                                        size="1280_h4"
                                        as="p"
                                        className="menu-item text-[1.13rem] font-normal text-black hover:text-[#CF7A48]"
                                    >
                                        Худи
                                    </Text>
                                    <Img src="images/img_arrow_down_black.svg" alt="Dropdown Arrow" className="h-[0.75rem] w-[0.75rem]" />
                                </div>
                                {menuOpen && <MegaMenu1 />}
                            </li>
                            <li onClick={() => navigate('/card')} className="menu-item cursor-pointer text-black hover:text-[#CF7A48]">
                                Доставка
                            </li>
                            <li onClick={() => navigate('/refund')} className="menu-item cursor-pointer text-black hover:text-[#CF7A48]">
                                Возврат и обмен
                            </li>
                            <li onClick={() => navigate('/contacts')} className="menu-item cursor-pointer text-black hover:text-[#CF7A48]">
                                Контакты
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Иконки аккаунта и корзины - отображаются на всех устройствах */}
                <div className="icon-group flex gap-4">
                    <div onClick={() => navigate('/account')} className="cursor-pointer">
                        <Img src="images/img_fluent_person_16_regular.svg" alt="Profile Icon" className="h-6 w-6" />
                    </div>
                    <div onClick={() => navigate('/cart')} className={`relative cursor-pointer ${isAnimating ? "cart-bounce" : ""}`}>
                        <Img src="images/img_f7_bag.svg" alt="Cart Icon" className="h-6 w-6" />
                        {cartItemCount > 0 && (
                            <span className="cart-count absolute top-0 right-0 h-4 w-4 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
                                {cartItemCount}
                            </span>
                        )}
                    </div>
                </div>
            </header>

            {/* Мобильное меню боковой панели */}
            {isMobile && (
                <div
                    className={`fixed top-0 left-0 h-full w-[90vw] bg-white z-40 transform transition-transform duration-300 ${
                        menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    {/* Содержимое меню */}
                    <MenuComponent />
                </div>
            )}
        </>
    );
}

