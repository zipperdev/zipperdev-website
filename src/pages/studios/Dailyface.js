import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from "swiper/core";
import React, { useState } from "react";
import MobileStoreButton from "react-mobile-store-button";
import Layout from "../../components/Layout";
import DailyfaceMockupImage from "../../img/dailyface/dailyfaceMockup.png";

SwiperCore.use([ Autoplay, Pagination, Navigation]);

function Dailyface({ loading }) {
    const [ innerWidth, setInnerWidth ] = useState(window.innerWidth);
    const appUrl = "https://play.google.com/store/apps/details?id=com.zipper_.dailyface";
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    
    return (
        <Layout title="데일리 페이스" loading={loading}>
            <div className="flex flex-col p-4">
                <div className="flex flex-col lg:flex-row">
                    <img src={DailyfaceMockupImage} alt="데일리 페이스" className="w-full lg:w-[50%] lg:-ml-10 brightness-90" />
                    <div className="flex flex-col lg:flex-grow lg:justify-center -mt-5">
                        <h3 className="font-bold text-3xl text-gray-300 lg:text-4xl">데일리 페이스</h3>
                        <h4 className="font-semibold text-xl text-zinc-400 lg:text-2xl">데일리 페이스와 함께보는 날씨</h4>
                        <p className="font-medium text-lg text-gray-300 mt-2 lg:text-xl">데일리 페이스는 매일 여러 날씨 정보와 함께 오늘의 기분을 총 5가지로 분류하여 표현해주는 앱입니다. 페이스 분류 기준은 "아주 좋음", "좋음", "보통", "나쁨", "아주 나쁨"으로 분류가 됩니다. 각 페이스는 오늘의 날씨와 불쾌지수에 따라 변하게 됩니다. 또 간단한 어구도 같이 표현이 되있습니다. 이 어구는 설정 창의 커스터마이징 메뉴에서 수정 하실 수 있습니다.</p>
                    </div>
                </div>
                <div className="flex justify-center pl-10 mt-2 xl:-mt-5">
                    <MobileStoreButton store="android" url={appUrl} linkProps={{ title: "Android Store Button" }} />
                </div>
                <div className="rounded-md overflow-hidden mt-5">
                    <Swiper
                        style={{ "--swiper-navigation-color": "#000000", "--swiper-pagination-color": "#202020" }}
                        slidesPerView={innerWidth >= 1024 ? 3 :  2}
                        spaceBetween={innerWidth >= 1024 ? 20 : 5}
                        preloadImages={true}
                        loopAdditionalSlides={4}
                        edgeSwipeThreshold={100}
                        loop={true}
                        pagination={{
                            clickable: true
                        }}
                        autoplay={{
                            delay: 4000, 
                            disableOnInteraction: false
                        }}
                        navigation={true}
                        className="swiper relative"
                    >
                        {[1, 2, 3, 4].map(index => (
                            <SwiperSlide key={index} className="rounded-md overflow-hidden">
                                <img src={require(`../../img/dailyface/mockup/${index}.png`).default} alt={`데일리 페이스 ${index}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Layout>
    );
};

export default Dailyface;