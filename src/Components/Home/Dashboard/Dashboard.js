import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../../firebase.init'
import useAdmin from '../../Hooks/useAdmin'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-center'>
          <h1 className='text-4xl text-center font-bold text-primary mt-[-600px]'>
            Welcome to your Dashboard
          </h1>
          <Outlet></Outlet>
          {/* <!-- Page content here --> */}
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label>
        </div>
        <div className='drawer-side '>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-800 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li className=''>
              <Link
                to={'allorders'}
                className='hover:bg-black hover:text-white text-white'
              >
                All Orders
              </Link>
            </li>
            <li>
              <Link
                to={'addproduct'}
                className='hover:bg-black hover:text-white text-white'
              >
                Added a product
              </Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to='/dashboard/user'>All users</Link>
                </li>
                <li>
                  <Link to='/dashboard/allproduct'>All Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
