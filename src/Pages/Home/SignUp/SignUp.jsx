import React, { useState } from 'react';
import './SignUp.css';
import logo from '../../../assets/sign_logo.png';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const  SignUp= () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
       <div className='w-full my-20'>
  <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'border-0 border-white'}>
      <TabList  className={'flex lg:text-[18px] text-[10px] border-0'} style={{background:"#EAF7F2",borderColor:"#0E1B51",marginBottom:"20px",borderBottom:"none"}}>
      <Tab className={`flex-1 text-center py-4 border-0 , tabIndex === 0 ? "unselectedTab" : "" `} style={{ background: tabIndex === 0 ? "#fea82a" : "transparent", color: tabIndex === 0 ? "white" : "#0E1B51"}}>
Sign Up as a Guest</Tab>
<Tab className={`flex-1 text-center py-4 border-0 , tabIndex === 1 ? "unselectedTab" : "" `} style={{ background: tabIndex === 1 ? "#fea82a" : "transparent", color: tabIndex === 1 ? "white" : "#0E1B51"}}>
Sign Up  as a Beekeeper</Tab>
      </TabList>
      <TabPanel className="">  
        
        <div className=" py-10 w-full mx-auto card flex-shrink-0 w-full shadow-2xl lg:max-w-xl max-w-sm bg-base-100">
       <div className='mt-10'><div className='flex justify-center'><img src={logo} style={{height:"100px",width:"100px"}} alt="logo"/></div> 
       <p className='text-6xl font-bold text-orange-400 text-center mt-4 mb-2'>Welcome!</p>
       <p className='text-2xl text-[#f4da8a] text-center'>Create User Account</p></div>

      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Username"name='name'id="name" className="input-bordered input " required />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone Number"id="number"name="number" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload your photo</span>
          </label>
          <input type="file" placeholder="image"id="image"name="image"  required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#e69765] text-white">Sign Up</button>
        </div>
      </form>
      <p className='text-center py-4'>Aready exists an account ? <Link to="/login" className='text-orange-400'>Login</Link></p>

    </div>
    </TabPanel>
      <TabPanel className={' '}> <div className="py-10 mx-auto card flex-shrink-0 w-full lg:max-w-xl max-w-sm shadow-2xl bg-base-100">
       <div className='mt-10'><div className='flex justify-center'><img src={logo} style={{height:"100px",width:"100px"}} alt="logo"/></div> 
       <p className='text-6xl font-bold text-orange-400 text-center mt-4 mb-2'>Welcome!</p>
       <p className='text-2xl text-[#f4da8a] text-center'>Create BeeKeeper Account</p></div>

      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Username"name='name'id="name" className="input-bordered input " required />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone Number"id="number"name="number" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">NID Card Number</span>
          </label>
          <input type="text" placeholder="NID Card Number"id="nid"name="nid" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" placeholder="Location"id="location"name="location" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload your photo</span>
          </label>
          <input type="file" placeholder="image"id="image"name="image"  required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#e69765] text-white">Sign Up</button>
        </div>
      </form>
      <p className='text-center py-4'>Aready exists an account ? <Link to="/login" className='text-orange-400'>Login</Link></p>

    </div></TabPanel>
    </Tabs>
    {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <div className='mt-10'><div className='flex justify-center'><img src={logo} style={{height:"100px",width:"100px"}} alt="logo"/></div> 
       <p className='text-6xl font-bold text-orange-400 text-center mt-4 mb-2'>Welcome!</p>
       <p className='text-2xl text-[#f4da8a] text-center'>Create User Account</p></div>

      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Username"name='name'id="name" className="input-bordered input " required />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone Number"id="number"name="number" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload your photo</span>
          </label>
          <input type="file" placeholder="image"id="image"name="image"  required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#e69765] text-white">Sign Up</button>
        </div>
      </form>
      <p className='text-center py-4'>Aready exists an account ? <Link to="/login" className='text-orange-400'>Login</Link></p>

    </div> */}

    {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <div className='mt-10'><div className='flex justify-center'><img src={logo} style={{height:"100px",width:"100px"}} alt="logo"/></div> 
       <p className='text-6xl font-bold text-orange-400 text-center mt-4 mb-2'>Welcome!</p>
       <p className='text-2xl text-[#f4da8a] text-center'>Create BeeKeeper Account</p></div>

      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Username"name='name'id="name" className="input-bordered input " required />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone Number"id="number"name="number" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">NID Card Number</span>
          </label>
          <input type="text" placeholder="NID Card Number"id="nid"name="nid" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" placeholder="Location"id="location"name="location" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload your photo</span>
          </label>
          <input type="file" placeholder="image"id="image"name="image"  required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#e69765] text-white">Sign Up</button>
        </div>
      </form>
      <p className='text-center py-4'>Aready exists an account ? <Link to="/login" className='text-orange-400'>Login</Link></p>

    </div> */}
    </div>
    );
};

export default SignUp;