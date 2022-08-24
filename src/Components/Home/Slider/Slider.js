import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import userImage from "../../../assets/reviewer.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <div className="mid-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="image-slide-bgOne relative px-10 py-32 flex items-center justify-between">
                        <div className="w-[70%]">
                            <ImQuotesLeft className="text-white text-8xl absolute top-10 left-0" />
                            <p className="text-white mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="w-[25%]">
                            <img className="w-1/2" src={userImage} alt="" />
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
}
