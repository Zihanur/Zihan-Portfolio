// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const MyGallery = () => {
  return (
    <section className="min-h-screen">
      <SectionTitle
        title={"My Gallery"}
        subTitle={"You can see"}
      ></SectionTitle>
      <div className="flex justify-center items-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{ width: "400px", height: "540px" }}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/9p1ph9X/rsz-img-9028.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/X3bpY9z/rsz-img-9007.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Fw8cnc3/rsz-img-9102.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/6F1YdLq/rsz-img-9018.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/B2yrXp3/rsz-img-9060.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/0KPQHjg/rsz-img-9022.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Gcm3p4F/rsz-img-9114.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MyGallery;
