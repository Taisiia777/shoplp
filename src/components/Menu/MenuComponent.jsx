import React from 'react';
import MenuItem from './MenuItem';
import DeliveryOption from './DeliveryOption';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const menuItems = [
    { title: 'Все худи', id: 'all-hoodies', llink: '/catalog' },
    { title: 'Для детей', id: 'kids-hoodies', link: '/catalog' },
    { title: 'Для взрослых', id: 'adult-hoodies', link: '/catalog' },
    { title: 'Доставка', id: 'delivery', link: '/card' },
    { title: 'Возврат и обмен', id: 'return-exchange', link: '/refund' },
    { title: 'Контакты', id: 'contacts', link: '/contscts' }
];


const deliveryOptions = [
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30f5112e5d32702b02adc1137db42cc90475257a49966f93c2ab48ecdbb1d63d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c',
        title: 'В пунктах выдачи – бесплатно',
        subtitle: 'Показать пункты выдачи',
        id: 'pickup'
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2052cea47020ded19b93e7df96dac5dfc48e1d825658eded250170c24a0cc48?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c',
        title: 'Курьером – ?',
        subtitle: 'До 3х рабочих дней',
        id: 'courier'
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f3ca1d54d34e72fa6e4dd18570d9a1ede32fc600a0122fa4d06bfc860b2193d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c',
        title: 'Удобный возврат худи',
        subtitle: 'Без вопросов возьмем товар обратно',
        id: 'return'
    }
];

function MenuComponent() {
    return (
        <nav data-layername="openMenu" className="flex overflow-hidden flex-col px-5 py-6 bg-white max-w-[355px]">
            <section data-layername="frame" className="flex flex-col text-lg font-medium tracking-normal text-black">
                <ul data-layername="frame" className="flex flex-col w-full mt-[40px]">
                    {menuItems.map((item) => (
                        // <MenuItem key={item.id} title={item.title} />
                        <MenuItem key={item.id} title={item.title} link={item.link} />

                    ))}
                </ul>
            </section>

            <section data-layername="frame" className="flex flex-col mt-20 w-full">
                <div data-layername="frame" className="flex gap-1.5 items-center self-start text-base text-black">
                    <span data-layername="доставкаВ" className="self-stretch my-auto">Доставка в</span>
                    <div data-layername="frame" className="flex gap-1 justify-center items-center self-stretch my-auto whitespace-nowrap">
                        <div data-layername="frame" className="flex flex-col justify-center self-stretch my-auto w-[57px]">
                            <span data-layername="москва">Москва</span>
                            <div data-layername="line" className="w-full border border-black border-dashed min-h-[1px]" />
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed720e5b5b9662bfe5200829d6a013c05db5ac870896dc34a56cbd6f991df970?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
                    </div>
                </div>

                {deliveryOptions.map((option) => (
                    <DeliveryOption
                        key={option.id}
                        icon={option.icon}
                        title={option.title}
                        subtitle={option.subtitle}
                    />
                ))}
            </section>

            <footer data-layername="frame" className="flex flex-col mt-16 w-full">
                <ContactInfo />
                <SocialLinks />
            </footer>
        </nav>
    );
}

export default MenuComponent;