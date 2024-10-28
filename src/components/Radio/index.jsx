import React from "react";
import PropTypes from "prop-types";

const variants = {
    primary:
        "border-deep_orange-a100 border border-solid checked:border-deep_orange-a100 checked:border-[3px] checked:border-solid checked:bg-hoodie_colors-light_peach checked:focus:bg-hoodie_colors-light_peach checked:focus:border-deep_orange-a100",
};
const sizes = {
    xs: "h-[1.25rem] w-[1.25rem] rounded-[10px]",
};

const Radio = React.forwardRef(
    ({ className = "", name = "", label = "", id = "radio_id", variant = "primary", size = "xs", ...restProps }, ref) => {
        return (
            <label className={className + " flex items-center gap-[0.31rem] cursor-pointer"}>
                <input
                    className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
                    ref={ref}
                    type="radio"
                    name={name}
                    {...restProps}
                    id={id}
                />
                <span>{label}</span>
            </label>
        );
    },
);

Radio.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["primary"]),
};

export { Radio };

