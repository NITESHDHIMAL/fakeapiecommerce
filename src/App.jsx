import { Route, Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Singleproduct from './pages/Singleproduct'

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:cat' element={<Shop />} />
        <Route path='/shop/:id' element={<Singleproduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}

export default App
