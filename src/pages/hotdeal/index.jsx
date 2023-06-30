import React, { useCallback, useEffect, useState } from "react";
import axiosClient from "@/libraries/axiosClient";
import Link from "next/link";
import Herder from "@/layout/Header";
import Footer from "@/layout/Footer";
import ProductItem from "@/components/ProductItem";

const Hotdeal = ({hotdeal}) => {

  return (
    <>
    <Herder/> 
    <section id="sellers">
      <div className="seller container">
      <span className="abc">
        <h2>Hot Deal</h2>
        </span>
        {hotdeal.length > 0 ? (
          <div className="best-seller">
              {hotdeal.map((p) => (
                  <Link key={p._id} href={`/products/${p._id}`}>
                  <ProductItem cover={p.cover} name={p.name} price={p.price}/>
                  </Link>
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

export default Hotdeal;

export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/questions/hotdeal');

    return {
      props: {
        hotdeal: response.data.payload,
      },
      
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
