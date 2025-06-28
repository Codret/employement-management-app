import React, { useState } from 'react'
import CredentialTable from './CredentialTable'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }


  return (
   <div className='flex  flex-col min-h-screen w-full items-center justify-center px-4 mt-4'>
      <div className="p-4 sm:p-6 mb-8">
      <CredentialTable />
    </div>
      <div className='w-full max-w-sm border-2 border-emerald-600 rounded-xl p-6 bg-white shadow-md px-4'>
        <form onSubmit={submitHandler} className='flex flex-col gap-4 justify-center items-center '>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='block w-full text-back  max-w-sm border-2 border-emerald-600 rounded-full text-base sm:text-lg px-4 py-2 placeholder:text-gray-400 outline-none'
            type='email'
            placeholder='Enter your email'
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='block w-full border-2 border-emerald-600 rounded-full text-base sm:text-lg px-4 py-2 placeholder:text-gray-400 outline-none'
            type='password'
            placeholder='Enter your password'
            required
          />
          <button
            type='submit'
            className='w-full bg-emerald-600 text-white rounded-full py-2 text-base sm:text-lg hover:bg-emerald-700 transition'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login