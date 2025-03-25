import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Categories from "../components/Categories"
import Listings from "../components/Listings"
import PopularAment from "./PopularAment"
import FooterAbove from "./FooterAbove"
import Footer from "../components/Footer"


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <PopularAment />
      <FooterAbove />
      <Footer />
    </>
  )
}

export default HomePage