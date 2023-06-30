import Collection from '@/components/Collection'
import Contact from '@/components/Contact'
import HomeMain from '@/components/HomeMain'
import HotDeal from '@/components/HotDeal'
import News from '@/components/News'
import ProductList from '@/components/ProductList'
import Sellers from '@/components/Sellers'
import React from 'react'

const Main = ({ hotdeal ,flashsale,categories}) => {
  return (
    <div>
        <HomeMain/>
        <Collection categories={categories}/>
        <Sellers flashsale={flashsale}/>
        <HotDeal hotdeal={hotdeal}/>
        <ProductList/>
        <News/>
        <Contact/>
    </div>
  )
}
export default Main
