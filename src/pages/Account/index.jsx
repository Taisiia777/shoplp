import { Helmet } from "react-helmet";
import Header from "components/Header";
import AccountColumn from "./AccountColumn";
import AccountColumnTwo from "./AccountColumnTwo";
import React from "react";

export default function AccountPage() {
    return (
        <>
            <Helmet>
                <title>Savelii&#39;s Application17</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header />
                </div>
                <div className="flex flex-col gap-[1.88rem] self-stretch bg-gray-50 py-[1.63rem] sm:py-[1.25rem]">
                    <AccountColumn />
                    <AccountColumnTwo />
                </div>
            </div>
        </>
    );
}

