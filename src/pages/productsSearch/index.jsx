import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import ProductItem from '@/components/ProductItem'
import axiosClient from "@/libraries/axiosClient";

import Link from "next/link";
import React from 'react'
import { useState,useEffect } from "react";
import { useRouter } from "next/router";

const ProductsSearch = () => {
  const router = useRouter();
  const { searchTerm } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axiosClient.get(
          `/questions/productSearch?name=${searchTerm}`
        );
        const searchResults = response.data.payload;
        setSearchResults(searchResults);
      } catch (error) {
        console.error("Error searching products:", error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  return (
    <>
    <div>
      <Header/>
      <section id="sellers">
        <div className="seller container search-Page">
          {searchResults.length > 0 ? (
            <>
              <span className="abc">
                <h2>Sản phẩm tìm kiếm</h2>
              </span>
              <div className="best-seller">
                {searchResults.map((p) => (
                  <Link key={p._id} href={`/products/${p._id}`}>                   
                  <ProductItem cover={p.cover} name={p.name} price={p.price}/>
                  </Link>
                ))}
              </div>
            </>
          ) : (
           <small>Không có sản phẩm nào</small>
          )}
        </div>
      </section>
      <Footer />
    </div>
  </>
  )
}

export default ProductsSearch