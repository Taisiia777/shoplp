import React from "react";

const sizes = {
    "1280_h4": "text-[1.13rem] font-normal not-italic sm:text-[0.94rem]",
    "1280_h1": "tracking-[0.06rem] font-roundsblack text-[2.75rem] font-normal md:text-[2.50rem] sm:text-[2.31rem]",
    "1280_b2": "tracking-[0.00rem] text-[0.88rem] font-normal not-italic",
    meta: "text-[0.63rem] font-normal not-italic",
    b3: "text-[0.75rem] font-normal not-italic",
    textxs: "text-[0.63rem] font-normal not-italic",
    texts: "text-[0.75rem] font-normal not-italic",
    textmd: "text-[0.88rem] font-normal not-italic",
    textlg: "text-[1.13rem] font-normal not-italic sm:text-[0.94rem]",
    textxl: "text-[1.38rem] font-normal sm:text-[1.13rem]",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-black font-nunito ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };

