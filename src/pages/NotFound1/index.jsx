import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import Header from "../../components/Header";
import NotFoundSection from "./NotFoundSection";
import React from "react";
import Footer from "components/Footer";
export default function NotFoundPage() {
    return (
        <div>
            <Helmet>
                <title>Page Not Found - Contact Us for Assistance</title>
                <meta
                    name="description"
                    content="Our Page Not Found error indicates the content you're looking for is under development. Reach out via email or phone for immediate assistance."
                />
            </Helmet>

            <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">
                <div className="container-xs mt-[1.25rem] md:px-[1.25rem]">
                    <Header/>
                </div>
                <div className="flex flex-col gap-[5.63rem] self-stretch md:gap-[4.19rem] sm:gap-[2.81rem]">
                    {/* not found section */}
                    <NotFoundSection/>
                </div>
                <div className="flex flex-col gap-[5.63rem] self-stretch md:gap-[4.19rem] sm:gap-[2.81rem]">
                    <Footer/>

                </div>
            </div>
        </div>
    );
}
