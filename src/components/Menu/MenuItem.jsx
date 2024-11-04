// import React from 'react';
//
// function MenuItem({ title }) {
//     return (
//         <li data-layername="frame" className="flex gap-10 justify-between items-center mt-5 w-full">
//             <div className="self-stretch my-auto">{title}</div>
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/682c01875ed5e674ec5dbfd8bff0503958d84b1ef0c9e02560186f1bcf686198?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
//         </li>
//     );
// }
//
// export default MenuItem;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuItem({ title, link }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <li
            data-layername="frame"
            className="flex gap-10 justify-between items-center mt-5 w-full cursor-pointer"
            onClick={handleClick}
        >
            <div className="self-stretch my-auto">{title}</div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/682c01875ed5e674ec5dbfd8bff0503958d84b1ef0c9e02560186f1bcf686198?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
        </li>
    );
}

export default MenuItem;
