import React from 'react'
import PreNavbar from './components/PreNavbar'
import Navbar from "./components/Navbar"
import "./App.css"
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Slider from "./components/Slider"
import data from "./data/data.json"
import Offers from "./components/Offers"
import Heading from './components/Heading'
import StarProduct from './StarProduct'
import HotAccesoriesMenu from './components/HotAccesoriesMenu'
import HotAccesories from './components/HotAccesories'
import ProductReviews from './components/ProductReviews'
import Videos from './components/Videos'
import Banner from "./components/Banner.jsx"
import Footer from './components/Footer.jsx'
import NavOptions from "./components/NavOptions.jsx"

// console.log(data.hotAccessories.music)

const App = () => {
    // console.log(manner)
  return (
    <>
    
    <BrowserRouter>
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      
      <Slider 
        start={data.banner.start}
      />
      {/* {console.log(data.offer)} */}
      <Offers offer={data.offer} />
      <Heading text=" STAR PRODUCTS"/>
      <StarProduct  starProduct={data.starProduct}/> 
      <Heading text="HOT ACCESORIES" />
      <HotAccesoriesMenu/>
      <Routes>
      <Route path='/music'
       element={<HotAccesories 
       music={data.hotAccessories.music} 
        musicCover={data.hotAccessoriesCover.music}/>}
      />
      <Route path='/smartDevice'
       element={<HotAccesories 
       smartDevice={data.hotAccessories.smartDevice} 
        smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}
      />
      <Route path='/home'
       element={<HotAccesories 
       home={data.hotAccessories.home} 
        homeCover={data.hotAccessoriesCover.home}/>}
      />
      <Route path='/lifestyle'
       element={<HotAccesories 
       lifestyle={data.hotAccessories.lifestyle} 
        lifestyleCover={data.hotAccessoriesCover.lifestyle}/>}
      />
      <Route path='/mobileAccessories'
       element={<HotAccesories 
       mobileAccessories={data.hotAccessories.mobileAccessories} 
        mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}
      />
      </Routes>
      
      </BrowserRouter>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS" />
      <Banner Banner={data.banner} />
      <Footer/>
      
    </>
  )
}

export default App