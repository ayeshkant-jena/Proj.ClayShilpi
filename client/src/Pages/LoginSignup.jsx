import React, {useState} from "react";
import './CSS/LoginSignup.css';
import bkgimg2 from '../Components/Assets/bkgimg2.jpg';

const LoginSignup = () => {
    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.error);
        }
    }

    const signup = async () => {
        console.log("Signup Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert("Fetch error:",responseData.error);
        }
    }

    return (
        <div>
            {/* <div className="head">
                <a href="/"><h1>ClayShilpi</h1></a>
            </div> */}

            <div className="body" style={{background: `var(--bg-color2) url(${bkgimg2}) no-repeat center center / cover`}}>

                <div className="loginsignup-container">
                    {/* <h1>Create Your Account</h1> */}
                    <h1>{state}</h1>
                    <div className="loginsignup-fields">
                        {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
                        <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Your Email" />
                        <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Your Password" />
                    </div>
                    <button onClick={()=>{state==="Login"?login():signup()}}>{state==="Sign Up"?"Signup":"Login"}</button>
                    {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:<p className="loginsignup-login">Don't have an account? <span onClick={()=>{setState("Sign Up")}}>Create Here</span></p>}
                    
                    <div className="loginsignup-agree">
                        {state==="Sign Up"?<input type="checkbox" name='' id=' ' /> :""}
                        {state==="Sign Up"?<p>By continuing, I agree to the terms of use & privacy policy.</p>:""}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
