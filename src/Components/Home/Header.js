import React from 'react'
import './Header.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TfiGoogle } from 'react-icons/tfi'
import { AiFillYoutube } from 'react-icons/ai'
import { RiAccountCircleFill } from 'react-icons/ri'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const Header = () => {
  const [user] = useAuthState(auth)
  const [signOut, loading] = useSignOut(auth)
  if (user) {
    console.log('header user ', user)
    console.log(user.displayName)
  }
  if (loading) {
    ;<Loading></Loading>
  }
  return (
    <div>
      <div className='bg-[#FFD54C]  pt-3'>
        {/* first header start  */}
        <div className='top-header flex justify-between lg:ml-32  '>
          <div className='top-header-one flex '>
            <span>
              Follow Us:{' '}
              <span className='lg:mr-4 lg:ml-2'>
                <FaFacebookF className='inline'></FaFacebookF>
              </span>
              <span className='lg:mr-4'>
                <AiOutlineTwitter className='inline'></AiOutlineTwitter>
              </span>
              <span className='lg:mr-4'>
                <TfiGoogle className='inline'></TfiGoogle>
              </span>
              <span className='lg:mr-4'>
                <AiFillYoutube className='inline'></AiFillYoutube>
              </span>
            </span>
          </div>
          <div className='top-header-two lg:mr-52 sm:mr-10'>
            <div className='flex '>
              <span>
                <RiAccountCircleFill className='inline h-6 w-6 '></RiAccountCircleFill>
              </span>
              {user ? <span className='mr-5'>{user.displayName}</span> : ''}
              <hr className='hrv text-black' />

              <select className='select select-bordered select-sm  max-w-xs bg-[#FFD54C] border-none'>
                <option disabled selected>
                  En-Gb
                </option>
                <option>English</option>
                <option>Bangla</option>
              </select>
              <hr className='hrv text-black' />
              <select className='select select-bordered select-sm w-xs max-w-xs bg-[#FFD54C] border-none'>
                <option disabled selected>
                  $ USD
                </option>
                <option>EUR</option>
                <option>INR</option>
                <option>GBR</option>
              </select>
            </div>
          </div>
        </div>
        <hr className='w-10/12 h-0 text-black bg-black lg:ml-20 mt-5' />
        {/* second header start  */}
        <div className='second-header flex mt-5 pb-5'>
          <h1 className='lg:text-4xl sm:text-4xl font-bold text-black lg:ml-32 lg:mr-10'>
            CAR TOOLS
          </h1>
          <input
            type='text'
            placeholder='Search entire store here'
            className='input  lg:w-full max-w-lg lg:ml-20 lg:px-4 s:h-5 sm:w-20 rounded'
          />
          <button className='btn rounded px-4 bg-black text-white py-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 lg:ml-44 mt-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
          <span>
            <BsCart3 className='inline h-7 w-7 lg:ml-10 mt-2' />
          </span>
        </div>
      </div>
      {/* third header start  */}
      <div>
        <div className='navbar bg-base-100 shadow-xl'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className='justify-between'>
                    Parent
                    <svg
                      className='fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                    </svg>
                  </a>
                  <ul className='p-2'>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='navbar-start hidden lg:flex'>
            <ul className='menu menu-horizontal px-1 ml-[-400px]'>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>shop</Link>
              </li>
              <li>
                <Link>blog</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
            </ul>
          </div>
          <div className='navbar-end'>
            {/* <Link
              to={'/login'}
              className='btn w-32 mr-5 bg-secondary text-black border-none hover:bg-primary'
            >
              Log In
            </Link> */}
            {user ? (
              <Link
                to={'/dashboard'}
                className='mr-32 btn btn-primary text-white hover:bg-black'
              >
                Dashboard
              </Link>
            ) : (
              ''
            )}
            {user ? (
              <button
                onClick={() => signOut()}
                className='btn btn-primary text-white w-32 hover:bg-black'
              >
                Sign Out
              </button>
            ) : (
              <Link to={'/login'}>
                <button className='btn bg-primary border-none text-white w-32 hover:bg-black '>
                  log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
