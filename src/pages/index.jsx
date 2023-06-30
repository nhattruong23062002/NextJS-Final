import Image from "next/image";
import styles from "@/styles/Home.module.css";
import HeadMeta from "@/components/HeadMeta";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Main from "@/layout/Main";
import axiosClient from "@/libraries/axiosClient";

export default function Home({ hotdeal, flashsale, categories }) {
  return (
    <>
      <HeadMeta title="Web nhà làm" />
      <div>
        <Header/>
        <Main hotdeal={hotdeal} flashsale={flashsale} categories={categories} />
        <Footer />
      </div>
    </>
  );
}


export async function getServerSideProps() {
  try {
    const response1 = await axiosClient.get("/questions/hotdeal");
    const response2 = await axiosClient.get("/questions/flashsale");
    const response3 = await axiosClient.get("/categories");

    return {
      props: {
        hotdeal: response1.data.payload,
        flashsale: response2.data.payload,
        categories: response3.data.payload,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
