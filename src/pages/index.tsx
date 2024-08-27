import * as React from "react"
import { GlobalComponents } from "../components/global"
import { HomeComponents } from "../components/home"

const IndexPage: React.FC = () => {
  return (
    <GlobalComponents.Layout className="home">
      <HomeComponents.Hero />
      <h3 className="font-bold text-2xl my-4 px-12 italic">New Products</h3>
      <HomeComponents.CarouselComponents.Carousel />
      <HomeComponents.Category img="category-1" title="Custome Builds" category="custom" />
      <HomeComponents.Category img="category-2" title="MSI Laptops" category="msi-laptops" />
      <HomeComponents.Category img="category-3" title="Desktops" category="desktops" />
      <HomeComponents.Category img="category-4" title="Gaming Monitors" category="gaming-monitors" />
      <GlobalComponents.Logos />
      <h3 className="font-bold text-2xl my-4 px-12 italic">Follow us on Instagram for News, Offers & More</h3>
      <div className="home-blog-items px-12 flex flex-wrap justify-start items-start">
        {Array.from(Array(10).keys()).map(k => <HomeComponents.BlogItem key={`blog-item-key-${k}`} />)}
      </div>
      <HomeComponents.ReviewsComponents.Reviews />
      <HomeComponents.CardsComponents.Cards />
    </GlobalComponents.Layout>
  )
}

export default IndexPage

