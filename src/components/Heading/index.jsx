import React from "react";

const sizes = {
    "1280_socials": "tracking-[0.00rem] text-[1.38rem] font-semibold sm:text-[1.13rem]",
    "1280_button": "text-[1.13rem] font-medium sm:text-[0.94rem]",
    sale: "tracking-[0.00rem] text-[0.88rem] font-semibold",
    h3_for_price: "tracking-[0.00rem] text-[1.25rem] font-extrabold sm:text-[1.06rem]",
    crossed_out_priced: "tracking-[0.00rem] text-[0.88rem] font-medium line-through",
    b2_for_mob: "tracking-[0.00rem] text-[0.88rem] font-medium",
    headingxs: "text-[0.50rem] font-semibold",
    headings: "text-[1.13rem] font-bold sm:text-[0.94rem]",
    headingmd: "text-[1.38rem] font-semibold sm:text-[1.13rem]",
    headinglg: "text-[1.50rem] font-extrabold md:text-[1.38rem] sm:text-[1.25rem]",
    headingxl: "text-[2.25rem] font-extrabold md:text-[2.13rem] sm:text-[1.88rem]",
};

const Heading = ({ children, className = "", size = "sale", as, ...restProps }) => {
    const Component = as || "h6";

    return (
        <Component className={`text-black font-nunito ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading };

