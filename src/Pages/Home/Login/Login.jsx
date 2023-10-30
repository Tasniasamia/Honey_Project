import React, { useContext } from 'react';
import './Login.css'
import logo from '../../../assets/sign_logo.png';
import { Link } from 'react-router-dom';
import { AuthData } from '../../Shared/AuthProvider/AuthProvider';
const  Login= () => {
    const {car,signUp,login,user,setUser,loading,setLoading,getName}=useContext(AuthData);
    const handleUser=(event)=>{
    event.preventDefault();
    const email=event.target.email.value;
    const password=event.target.password.value;
    
        login( email, password).then((userCredential) => {
        const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    return (
       <div className='lg:flex flex-column gap-6 justify-between items-center'>
<div className='lg:block md:block hidden'><img src="https://img.freepik.com/free-photo/fresh-honeycombs_144627-17377.jpg?size=626&ext=jpg&ga=GA1.1.617391450.1698571397&semt=ais" alt="honey"/></div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
       <div className='mt-10'><div className='flex justify-center'><img src={logo} style={{height:"100px",width:"100px"}} alt="logo"/></div> 
       <p className='text-6xl font-bold text-orange-400 text-center mt-4 mb-2'>Welcome!</p>
       <p className='text-2xl text-[#f4da8a] text-center'>Login into your account</p></div>

      <form className="card-body"onSubmit={handleUser}>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email"name="email"id="email" className="input input-bordered" required />
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password"id="password"name="password" className="input input-bordered" required />
          
        </div>
      
        <div className="form-control mt-6">
          <button className="btn bg-[#e69765] text-white">Login</button>
        </div>
      </form>
      <p className='text-center py-4'>{`Don't`} have an account ? <Link to="/Signup" className='text-orange-400'>Sign Up</Link></p>
    </div>
    </div>
    );
};

export default Login;