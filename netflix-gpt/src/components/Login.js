import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignUp,setIsSignUp] = useState(true);
    function toggleSignUp(){
        setIsSignUp(!isSignUp);
    }
    console.log(isSignUp);
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="imgBg"/>
            </div> 
                <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white">
                    <h1 className="font-bold text-3xl py-4">{ isSignUp ? "Sign Up" : "Sign In"}</h1>
                    { isSignUp && <input type="text" placeholder="Full name" className="p-2 m-2 w-full rounded-lg bg-gray-700"></input>}
                    <input type="text" placeholder="Email address" className="p-2 m-2 w-full rounded-lg bg-gray-700"></input>
                    <input type="password" placeholder="Password" className="p-2 m-2 w-full  rounded-lg bg-gray-700"></input>
                    <button className="p-2 m-2 w-full bg-red-700 rounded-lg">{isSignUp ? "Create Account" : "Log In"}</button>
                    <h2 className="p-4 hover:cursor-pointer" onClick={toggleSignUp}> {isSignUp ? "Already a user? sign in now" : "New to netflix? sign up now"}</h2>
                </form>
        </div>
    )
}

export default Login;