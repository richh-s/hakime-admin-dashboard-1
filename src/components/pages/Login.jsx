import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { LOGIN } from '../model/mutations/login';
import { useMutation } from '@apollo/client';
import Loader from '../utils/loading';
const LoginPage = ()=>{

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [token , setToken] = useState ("");
    const validate = (values) => {
      const errors = {}
    
      if (!values.email) {
        errors.email = 'Required'
      } 
      // if(!value.password){
      //   errors.password = 'Required'
      // }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    
      return errors
    }
    const formik = useFormik({
      initialValues: {
        email: '',
        password:'',
      },
      validate,
      onSubmit: (values) => {
        loginHandler()
        alert(JSON.stringify(values, null, 2))
      },
    })
    
    const loginHandler = (e) => {
      login({ variables: { email: email , pswd: password}})
      // localStorage.setItem('token',token)
      console.log("hell0",localStorage.getItem('token'))
       navigate("/home");
    }

    const [login,{loading,error,data}] = useMutation(LOGIN);
    if (loading) return <Loader/>;
    if (error) return <p>Error : {error.message}</p>;
    // if (data) 
    return (
   console.log(data),
        <div className="w-full max-w-xs min-w-xs mx-auto my-14">
            <h1 className="text-center text-green-900 font-bold text-3xl py-10">Admin Login Panel</h1>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}> 
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Email">
        Email
      </label>
      <input className="shadow appearance-none border border-green-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="email"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border
       border-green-900 rounded w-full py-2 px-3
        text-gray-700 mb-3 leading-tight focus:outline-none 
        focus:shadow-outline" 
        onChange={e=>setPassword(e.target.value)}
         id="password" type="password" placeholder="******************"/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
       {/* TODO: impelement error message and validation */}
    </div>
    <div className="flex items-center justify-between">
      <input type="submit" value="Login" className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />

      
      <a className="inline-block align-baseline font-bold text-sm text-green-900 hover:text-green-700" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
 
</div>
    )
}
export default LoginPage;