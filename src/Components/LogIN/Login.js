import React, { useEffect, useRef } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import loginpage from '../../images/logiiin.svg'
import Loading from '../Shared/Loading'
import useToken from '../Hooks/useToken'

const Login = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || '/'

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const [token] = useToken(user || gUser)
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true })
    }
  }, [token, from, navigate])
  if (error || gError) {
    console.log(error)
  }
  if (loading || gLoading) {
    ;<Loading></Loading>
  }
  if (user || gUser) {
    console.log(user)
    navigate('/home')
  }
  const handleSubmitRef = event => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password)
    signInWithEmailAndPassword(email, password)
  }
  return (
    <div className='flex ml-20'>
      <div className='login1 mt-20 ml-[-100px] '>
        <img src={loginpage} alt='' />
      </div>
      <div className='login2 w-96 ml-20'>
        <form onSubmit={handleSubmitRef} action=''>
          <div className='hero h-screen w-full '>
            <div className='hero-content'>
              <div className='card bg-primary text-white'>
                <div className='card-body text-white w-96 '>
                  <div className='form-control '>
                    <h1 className='py-5 text-center text-white font-semibold text-5xl '>
                      Log In
                    </h1>
                    <label className='label'>
                      <span className='label-text text-white'>Email</span>
                    </label>
                    <input
                      ref={emailRef}
                      type='text'
                      placeholder='email'
                      className='input input-bordered text-black'
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text text-white'>Password</span>
                    </label>
                    <input
                      ref={passwordRef}
                      type='password'
                      placeholder='password'
                      className='input input-bordered text-black'
                    />
                    <label className='label '>
                      <a className='label-text-alt link link-hover text-white'>
                        Forgot password?
                      </a>
                      <br />
                    </label>
                    <h1 className=''>
                      Already have an Account?
                      <Link
                        to={'/signup'}
                        className='underline text-black ml-2'
                      >
                        {' '}
                        Please Sign UP
                      </Link>{' '}
                    </h1>
                  </div>
                  <div className='form-control mt-6'>
                    <button className='btn hover:bg-primary hover:text-white hover:border-white bg-white text-black font-bold'>
                      Login
                    </button>
                  </div>
                  <div className='divider text-white'>OR</div>
                  <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline bg-white'
                  >
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
