import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout.jsx";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";
import { Login as loginAccount } from "../Redux/Slices/AuthSlice.js";
import { useDispatch } from "react-redux";

function Login(){

    const dispatch = useDispatch(); // 2. Initialize the dispatch hook
    const navigate = useNavigate();

    const [LoginData,setLoginData] = useState({
        email:"",
        password:""
    })

    const handleUserInput = (event)=>{
         const {name , value} = event.target
        setLoginData({
            ...LoginData,
            [name]:value

        })
    };

    async function onLogin(event) {
        event.preventDefault();
        if(!LoginData.email || !LoginData.password){
          toast.error("please fill all the details");
          return;
        }

        //dispatch create account action
        const response = await  dispatch(loginAccount(LoginData));
        navigate("/");

        setLoginData({
            email:"",
            password:"",
        })
        
    }



    return(
        <HomeLayout>

        <div className='flex overflow-x-auto items-center justify-center h-[100vh] bg-[#1A2238]'>
                <form noValidate onSubmit={onLogin} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <h1 className="text-center text-2xl font-bold">Login Page</h1>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'> Email </label>
                        <input 
                            type="email" 
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={LoginData.email}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-semibold'> Password </label>
                        <input 
                            type="password" 
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={LoginData.password}
                        />
                    </div>

                    <button type="submit" className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
                        Login account
                    </button>

                    <p className="text-center">
                        Don't have an account ? <Link to="/signup" className='link text-accent cursor-pointer'> Signup</Link>
                    </p>

                </form>
            </div>
      </HomeLayout>


    )
}

export default Login;