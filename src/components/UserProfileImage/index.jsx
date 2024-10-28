import { Img } from "./..";
import React from "react";

export default function UserProfileImage({ userImage = "images/img_rectangle.png", ...props }) {
    return (
        <div {...props} className={`${props.className} flex items-center flex-1`}>
            <Img src={userImage} alt="Row Image" className="h-[5.00rem] w-full rounded-[14px] object-cover" />
        </div>
    );
}

