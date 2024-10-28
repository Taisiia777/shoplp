import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[10px]",
    square: "rounded-[0px]",
};
const variants = {
    gradient: {
        orange_50_deep_orange_200: "bg-gradient text-lime-900",
    },
};
const sizes = {
    sm: "h-[2.75rem] px-[2.13rem] text-[1.13rem]",
    md: "h-[3.50rem] px-[2.13rem] text-[1.13rem]",
    xs: "h-[2.75rem] px-[0.13rem]",
};

const Button = ({
                    children,
                    className = "",
                    leftIcon,
                    rightIcon,
                    shape,
                    variant = "gradient",
                    size = "xs",
                    color = "",
                    ...restProps
                }) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round", "square"]),
    size: PropTypes.oneOf(["sm", "md", "xs"]),
    variant: PropTypes.oneOf(["gradient"]),
    color: PropTypes.oneOf(["orange_50_deep_orange_200"]),
};

export { Button };

