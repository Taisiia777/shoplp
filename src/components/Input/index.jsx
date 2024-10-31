import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[10px]",
};

const variants = {
    fill: {
        gray_100: "bg-gray-100 text-secondary_accent",
    },
};

const sizes = {
    md: "h-[3.50rem] px-[1.50rem] text-[1.13rem]",
    xs: "h-[1.50rem] px-[0.75rem] text-[1.13rem]",
    sm: "h-[2.75rem] px-[1.50rem] text-[1.13rem]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm",
            color = "gray_100",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center cursor-text text-[1.13rem]  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);
Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["md", "xs", "sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["gray_100"]),
};

export { Input };

