import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Home/Header'
import Footer from './Components/Shared/Footer'
import ProductDetails from './Components/Home/ProductDetails'
import Login from './Components/LogIN/Login'
import Signup from './Components/LogIN/Signup'
import Dashboard from './Components/Home/Dashboard/Dashboard'
import RequireAuth from './Components/RequireAuth'
import MyAppointment from './Components/Home/Dashboard/MyAppointment'
import AllOrders from './Components/Home/Dashboard/AllOrder'
import AddProduct from './Components/Home/Dashboard/AddProduct'
import AllUsers from './Components/Home/Dashboard/AllUsers'
import RequireAdmin from './Components/LogIN/RequireAdmin'
import AllProducts from './Components/Home/Dashboard/AllProducts'

function App () {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products/:productId' element={<ProductDetails />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>} />
          <Route path='allorders' element={<AllOrders></AllOrders>} />
          <Route path='addproduct' element={<AddProduct></AddProduct>} />
          <Route
            path='user'
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          />
          <Route
            path='allproduct'
            element={
              <RequireAdmin>
                <AllProducts></AllProducts>
              </RequireAdmin>
            }
          />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
