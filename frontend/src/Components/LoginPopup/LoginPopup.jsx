import React, { useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/frontend_assets/assets.js'

const LoginPopup = ({setShowLoginPopup}) => {

    const [loginType, setLoginType] = useState('Sign Up')
    const [data, setData] = useState({
        name:"",
        email:"",
        password: "",
    })

    const onChangeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}))
    }

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-title'>
                <h2>{loginType}</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLoginPopup(false)} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {loginType === 'Login' ? <></>:
                <input type="text" placeholder='name'required />}
                
                <input type="email" placeholder='Enter your email address' required />
                <input type="password" placeholder='Enter your password' required />    
            </div>
            <button>{loginType === 'Sign Up' ? 'Create Account' : 'Login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
            </div>
            {loginType === 'Login' ?<p className='switch'>create a new account <span onClick={()=>setLoginType('Sign Up')}>Cick here</span></p>
            :<p className='switch'>Already Have An Account <span onClick={()=>setLoginType('Login')}>Login here</span></p>
            
            }
        </form>
    </div>
  )
}
export default LoginPopup