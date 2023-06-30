import ProductItem from "../ProductItem";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HotDeal = ({ hotdeal }) => {
  return (
    <section id="hotdeal">
      <div className="seller container">
        <span className="abc">
          <h2>Hot Deal</h2>
          {<Link href={`/hotdeal`}>Xem tất cả</Link>}
        </span>
        {hotdeal?.length > 0 ? (
          <div className="best-seller">
            <Swiper
              spaceBetween={0}
              slidesPerView={4}
              modules={[Navigation, Pagination]}
              navigation
              /*    pagination={{ clickable: true }} */
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {hotdeal.map((p) => (
                <SwiperSlide key={p._id}>
                  <Link href={`/products/${p._id}`}>
                  <ProductItem cover={p.cover} name={p.name} price={p.price}/>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <small>Không có sản phẩm</small>
        )}
      </div>
    </section>
  );
};

export default HotDeal;

/* export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/questions/hotsale');

    return {
      props: { 
        hotsale: response.data.payload,
      },
      
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
 */
