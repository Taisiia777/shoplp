import { Helmet } from "react-helmet";
import Footer from "components/Footer";
import Header from "components/Header";
import RefundColumnOne from "./RefundColumnOne";
import React from "react";

export default function RefundPage() {
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
                <div className="flex flex-col gap-[15.88rem] self-stretch md:gap-[11.88rem] sm:gap-[7.94rem]">
                    <RefundColumnOne />
                    <Footer />
                </div>
            </div>
        </>
    );
}

