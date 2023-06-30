import React, { useCallback, useEffect, useState } from "react";
import axiosClient from "@/libraries/axiosClient";
import Link from "next/link";

const Collection = ({categories}) => {
  console.log('««««« categories »»»»»', categories);

  return (
    <section id="collection">
    <h1 style={{ marginTop: "20px" }} className="container">
      Danh Mục
    </h1>
    {categories.length > 0 ? (
      <div className="collections container">
        {categories.map((category, index) => (
          <Link key={category._id} href={`/categories/${category._id}`}>
            <div className="content">
              <img
                src={category.img}
                alt="img"
              />
              <div className="img-content">
                <p>{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <small>Không có nhà cung cấp</small>
    )}
  </section>
  );
};

export default Collection;
/* 
export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/suppliers');

    return {
      props: {
        suppliers: response.data.payload,
      },
      
      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
 */
/*  export async function getStaticPaths() {
   return {
     paths: [],
     fallback: true,
   };
 }

 export async function getStaticProps(req) {
   try {
     const response = await axiosClient.get('/suppliers');

     return {
       props: {
        suppliers: response.data.payload,
       },

        revalidate: 10,
     };
   } catch (error) {
     return {
       notFound: true,
     };
   }
 } */
