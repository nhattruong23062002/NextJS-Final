import React, { useCallback, useEffect, useState } from "react";
import ProductItem from "../ProductItem";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Sellers = ({flashsale}) => {

  return (
    <section id="sellers">
      <div className="seller container">
        <span className="abc">
        <h2>Flash Sale</h2>
        <Link  href={`/flashsale`}>Xem tất cả</Link>
        </span>
        {flashsale.length > 0 ? (
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

              {flashsale.map((p) => (
                <SwiperSlide key={p._id} >
                  <Link href={`/products/${p._id}`}>
                  <ProductItem cover={p.cover} name={p.name} price={p.price} discount={<span className="discount-product">{p.discount}%</span>}/>
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
  )
}

export default Sellers
