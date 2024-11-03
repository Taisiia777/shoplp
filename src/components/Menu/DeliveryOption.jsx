import React from 'react';

function DeliveryOption({ icon, title, subtitle }) {
    return (
        <div data-layername="frame" className="flex justify-between items-center mt-5 w-full">
            <div data-layername="frame" className="flex gap-2.5 justify-center items-center self-stretch my-auto min-w-[240px]">
                <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                <div data-layername="frame" className="flex flex-col self-stretch my-auto min-w-[240px] w-[258px]">
                    <div className="text-base text-black">{title}</div>
                    <div className="mt-1 text-sm text-zinc-500">{subtitle}</div>
                </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a35833bf2139b450d8e50048d754d18c1f58d477d27bc1f4be6c0c9309424798?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
    );
}

export default DeliveryOption;