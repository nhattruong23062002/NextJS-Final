import React, { useCallback, useEffect, useState } from 'react'
import Layout from './layout.jsx'
import Head from 'next/head';
import axiosClient from '@/libraries/axiosClient';
import Link from 'next/link';


const Products = (props)  => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 3;

  const fetchProducts = async () => {
    try {
      const res = await axiosClient.get(`/questions/productlist?skip=${skip}&limit=${limit}`);
      setProducts(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts()
  }, [skip]);
  console.log('««««« skip »»»»»', skip);

  const handleNextPage = () => {
    setSkip(prevSkip => prevSkip + limit);
  };

  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        products.length > 0 ? (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {products.map((p) => <Link key={p._id} href={`/products/${p._id}`}><h3>{p.name}</h3></Link>)}
          </div>
        ) : <small>Không có sản phẩm</small>
      }
      <button onClick={handleNextPage}>Next</button>
    </Layout>
  )
}

export default Products