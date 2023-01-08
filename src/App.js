import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Home/Header'
import Footer from './Components/Shared/Footer'
import ProductDetails from './Components/Home/ProductDetails'

function App () {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/:productId' element={<ProductDetails />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
