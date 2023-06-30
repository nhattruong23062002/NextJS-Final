import axiosClient from "@/libraries/axiosClient";
import ProductItem from "../ProductItem";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const limit = 3;
  const pageCount = total / limit;

  const fetchProducts = async () => {
    try {
      const res = await axiosClient.get(
        `/questions/productlist?skip=${skip}&limit=${limit}`
      );
      setProducts(res.data.payload);
      setTotal(res.data.total)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);
  
  const handlePageChange = (selectedPage) => {
    const newSkip = selectedPage.selected * limit;
    setSkip(newSkip);
  };


  return (
    <>
      <section id="sellers">
        <div className="seller container">
          <span className="abc">
            <h2>Product List</h2>
          </span>
          {products?.length > 0 ? (
            <div className="best-seller">
              {products.map((p) => (
                <Link key={p._id} href={`/products/${p._id}`}>
                 <ProductItem cover={p.cover} name={p.name} price={p.price}/>
                </Link>
              ))}
            </div>
          ) : (
            <small>Không còn sản phẩm</small>
          )}
        </div>
      </section>
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        handleNextPage={false}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break'}
        pageClassName={'page'}
        previousClassName={'previous'}
        nextClassName= {'next'}
        disabledClassName={'disabled'}
      />
    </>
  );
};
export default ProductList;
