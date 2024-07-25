
import{ BrowserRouter as Router, Route,Routes, Navigate} from "react-router-dom"
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import NoPage from "./pages/nopage/NoPage"
import MyState from "./context/data/myState"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from "./pages/productInfo/ProductInfo"
import AddProduct from "./pages/admin/pages/AddProduct"
import UpdateProduct from "./pages/admin/pages/UpdateProduct"
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Allproducts from "./pages/allproducts/Allproducts"
import ContactUs from "./pages/contact/ContactUs"
function App() {
  return (
    <MyState> 
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/allproducts" element={<Allproducts />} />
      <Route path="/order" element={
        <ProtectedRoute> 
        <Order />
        </ProtectedRoute>
        }/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/dashboard" element={
    
        <Dashboard />
       
        }/>
       <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productinfo/:id" element={<ProductInfo />} />
      <Route path="/addproduct" element={
        
        <AddProduct />
       
        } />
      <Route path="/updateproduct" element={
       
        <UpdateProduct />
       
      }/>
      <Route path="/*" element={<NoPage />}/>
    </Routes>
    <ToastContainer />
   </Router>
   </MyState>
  )
}

export default App

//user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" />;
};

//admin 
