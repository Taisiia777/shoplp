import React from 'react';

function SocialLinks() {
    return (
        <div data-layername="socials" className="flex gap-1.5 items-start self-start mt-4 text-xs leading-3 text-zinc-500">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2089f78c66a7a3d31812f590c8e626d6940b6d0f5e5c44185e2c0004cd995905?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Social media icon" className="object-contain shrink-0 w-11 aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ac059e4ca19c93be44927039f5caf958cdadc06d1d7ed3f42f32595346ed82?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Social media icon" className="object-contain shrink-0 w-11 aspect-square" />
            <div data-layername="inst" className="flex gap-1.5 justify-center items-center">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67e6c50058eea25577beff70aab4345d0f3c00354b56278d2507df137d44e356?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Instagram icon" className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square" />
                <div data-layername="метаMetaPlatformsЗапрещеннаяВРфОрганизация" className="my-auto w-[153px]">
                    * Мета (Meta Platforms) –запрещенная в РФ организация
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;