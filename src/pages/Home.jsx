import data from "../data.json";
import dot from "/assets/dot.svg";
import movie from "/assets/icon-category-movie.svg";
import tv from "/assets/icon-category-tv.svg";
import bookmarkedEmpty from "/assets/icon-bookmark-empty.svg";
import bookmarkedFull from "/assets/icon-bookmark-full.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const trending = data.filter((i) => i.isTrending === true);

  return (
    <div className="text-white grid gap-10">
      {/* Trending */}
      <div className="flex flex-col gap-8">
        <p className="text-xl">Trending</p>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {trending.map((e) => (
            <SwiperSlide
              key={e.title}
              className=" max-w-[470px] relative bg-cover bg-center rounded-lg py-4 px-6 !flex flex-col justify-between cursor-pointer "
              style={{ backgroundImage: `url(${e.thumbnail.trending.large})` }}
            >
              <div className="bg-dark  bg-opacity-50 w-[32px] h-[32px] rounded-full flex items-center justify-center ml-auto  ">
                <img
                  src={e.isBookmarked ? bookmarkedFull : bookmarkedEmpty}
                  alt=""
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-lg">
                  <span>{e.year}</span>
                  <img src={dot} alt="Dot Icon" />
                  <div className="flex items-center gap-1">
                    <img src={e.category === "Movie" ? movie : tv} alt="" />
                    <span>{e.category}</span>
                  </div>
                  <img src={dot} alt="Dot Icon" />
                  <span>{e.rating}</span>
                </div>
                <p className="text-2xl font-semibold">{e.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
