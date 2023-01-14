import React, { useRef } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import register from '../../images/register.svg'
import Loading from '../Shared/Loading'
import useToken from '../Hooks/useToken'

const Signup = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const nameRef = useRef('')

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const [token] = useToken(user)
  if (error) {
    console.log(error)
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    console.log(user)
  }
  if (token) {
    console.log('token', token)
  }
  const handleSubmitRef = event => {
    event.preventDefault()
    const displayName = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password, displayName)
    createUserWithEmailAndPassword(displayName, email, password)
  }
  return (
    <div>
      <div>
        <div className='flex ml-20 '>
          <div className='signup1 mt-20 '>
            <img src={register} className='w-9/12 h-9/12' alt='' />
          </div>
          <div className='signup2 w-96 '>
            <form onSubmit={handleSubmitRef} action=''>
              <div className='hero h-screen w-full '>
                <div className='hero-content  ml-20'>
                  <div className='card bg-primary text-white'>
                    <div className='card-body text-white w-96 '>
                      <div className='form-control '>
                        <h1 className='py-5 text-center text-white font-semibold text-5xl '>
                          Sign Up
                        </h1>
                        <label className='label'>
                          <span className='label-text text-white'>Name</span>
                        </label>
                        <input
                          ref={nameRef}
                          type='text'
                          placeholder='Your Name'
                          className='input input-bordered text-black'
                        />
                        <label className='label'>
                          <span className='label-text text-white'>Email</span>
                        </label>
                        <input
                          ref={emailRef}
                          type='email'
                          placeholder='email'
                          className='input input-bordered text-black'
                        />
                      </div>
                      <div className='form-control'>
                        <label className='label'>
                          <span className='label-text text-white'>
                            Password
                          </span>
                        </label>
                        <input
                          ref={passwordRef}
                          type='password'
                          placeholder='password'
                          className='input input-bordered text-black'
                        />
                        <label className='label '>
                          <Link
                            href='#'
                            className='label-text-alt link link-hover text-white'
                          >
                            Forgot password?
                          </Link>
                        </label>{' '}
                        <h1>
                          Already have an Account?
                          <Link
                            to={'/login'}
                            className='underline text-black ml-2'
                          >
                            {' '}
                            Please Login
                          </Link>{' '}
                        </h1>
                      </div>
                      <div className='form-control mt-6'>
                        <button className='btn  hover:bg-primary hover:text-white hover:border-white font-bold bg-white text-black'>
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
