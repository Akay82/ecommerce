import { useContext } from "react"
import Layout from "../../components/layout/Layout"
import myContext from "../../context/data/myContext"
import HeroSection from "../../components/herosection/HeroSection";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
import { Link } from "react-router-dom";
function Home() {
    const dispatch= useDispatch();
    const cartItem=useSelector((state)=>state.cart);

    const addCart=()=>{
        dispatch(addToCart("shirt"))
    }

    const deleteCart=()=>{
        dispatch(deleteFromCart("shirt"))
    }

  return (
   <Layout>
   
    <HeroSection />

    <ProductCard />
    <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
    <Track />
    <Testimonial />
    </Layout>
  )
}

export default Home