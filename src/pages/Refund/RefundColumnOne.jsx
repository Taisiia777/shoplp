import { Heading, Text } from "components";
import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
export default function RefundColumnOne() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
        {isMobile ? (
            <>

                <div className="flex w-full flex-col items-center gap-[1.88rem] bg-white">

                    <div className="flex flex-col gap-[23.25rem] self-stretch md:gap-[17.44rem] sm:gap-[11.63rem]">
                        <div className="flex flex-col items-center gap-[3.25rem] sm:gap-[1.63rem]">
                            <div
                                className="flex justify-center items-center min-h-[580px] mt-[30px] max-w-[1212px] w-[95vw] mx-auto bg-gray-100">
                                <div className="relative container-xs flex justify-center md:px-4">
                                    <div
                                        className="absolute w-[88vw] inset-0 bg-gradient-to-t from-[#5A4A43] max-h-[70%] mt-[50%] to-transparent opacity-90 rounded-b-[20px] z-10 pointer-events-none max-w-[1212px] mx-auto"/>

                                    <div
                                        className="flex h-[36.25rem] w-full flex-col items-center justify-center
                                   rounded-[20px] bg-cover bg-center bg-no-repeat p-10"
                                        style={{
                                            backgroundImage: "url('/images/img_notFound.png')",
                                        }}
                                    >
                                        <div
                                            className="flex flex-col items-center gap-4 text-left sm:text-left mt-[25rem]">

                                            <Text
                                                as="p"
                                                className="text-[36px] font-roundsblack font-normal w-[80vw] leading-[115%] tracking-[3%] text-white z-[10]"
                                            >
                                                Возврат и обмен
                                            </Text>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </>
            ) : (
                <>

                    <div className="flex flex-col items-center">
                        <div className="container-xs flex flex-col gap-[1.88rem] md:px-[1.25rem]">
                            <div
                                className="h-[21.88rem] rounded-[20px] bg-[url(/public/images/img_refund.png)] bg-cover bg-no-repeat px-[1.25rem] py-[2.13rem] md:h-auto sm:py-[1.25rem]">
                                <div className="mb-[8.88rem] flex flex-col items-start gap-[0.88rem]">
                                    <Text
                                        size="1280_h1"
                                        as="p"
                                        className="font-roundsblack text-[2.75rem] font-normal tracking-[0.06rem] text-black md:text-[2.50rem] sm:text-[2.13rem]"
                                    >
                                        Возврат и обмен
                                    </Text>
                                    <Text size="textlg" as="p"
                                          className="text-[1.38rem] font-normal leading-[1.88rem] text-black">
                                        <>
                                            Купленная вещь вам не подошла? <br/>
                                            Не переживайте, такое случается : )
                                        </>
                                    </Text>
                                </div>
                            </div>
                            <Heading size="1280_button" as="h1"
                                     className="text-[1.13rem] font-normal leading-[1.50rem] text-black">
          <span>
            <>
              Обмен
              <br/>
              Вы можете оформить обмен на любой другой товар с нашего сайта в течение 30 дней с момента получения
              заказа!
              <br/>
              Для этого: оформите новый заказ, не оплачивайте его, в комментарии укажите “Обмен” — Наши стилисты
              свяжутся с вами и помогут все оформить экономя Ваше время.
              <br/>
              Условия:
              <br/>- Товар должен быть приобретен на сайте TOPTOP.RU.
              <br/>- Товар должен находиться в идеальном состоянии (не были в употреблении, не подвергались стирке, не
              подгонялись по фигуре, содержат внутренние этикетки и ярлыки).
              <br/>- Промо-коды и скидки на обменный заказ не распространяются.
              <br/>
              Обмен на другой размер.
              <br/>
              Если вам не подошла купленная вещь по размеру, вы можете обменять ее на другой размер при условии, что он
              есть в наличии. В этом случае, обмен производится по стоимости действующей на момент покупки.
              <br/>
              Обмен на другой товар.
              <br/>
              Если купленная вами вещь не подошла или не понравилась, вы можете обменять ее на любое другое изделие с
              нашего сайта с доплатой или возвратом разницы в стоимости.
              <br/>
              Со стоимостью доставки обменного заказа вы можете ознакомиться в разделе&nbsp;
            </>
          </span>
                                <a href="#" className="inline underline">
                                    «Доставка»
                                </a>
                                <a href="#" className="inline underline">
                                    <>
                                        .<br/>
                                    </>
                                </a>
                                <span>
            Расходы на забор не подошедшего товара мы берем на себя, вам ни о чем не нужно беспокоиться — наши стилисты
            оформят для вас заявку на приезд курьера или отправку с удобного для вас пункта выдачи заказов.
          </span>
                            </Heading>
            </div>
        </div>
</>
            )}
        </>
    );
}

