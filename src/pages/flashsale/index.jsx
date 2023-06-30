import React, { useCallback, useEffect, useState } from "react";
import axiosClient from "@/libraries/axiosClient";
import Herder from "@/layout/Header";
import Footer from "@/layout/Footer";
import ProductItem from "@/components/ProductItem";

const FlashSale = ({flashsale}) => {
  return (
    <>
    <Herder/> 
    <section id="sellers">
      <div className="seller container">
      <span className="abc">
        <h2>Flash Sale</h2>
        </span>
        {flashsale.length > 0 ? (
          <div className="best-seller">
              {flashsale.map((p) => (
              <ProductItem key={p._id} cover={p.cover} name={p.name} price={p.price} discount={<span className="discount-product-page">{p.discount}%</span>}/>
              ))}
          </div>
        ) : (
          <small>Không có sản phẩm</small>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default FlashSale;

export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/questions/flashsale');

    return {
      props: {
        flashsale: response.data.payload,
      },
      
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
