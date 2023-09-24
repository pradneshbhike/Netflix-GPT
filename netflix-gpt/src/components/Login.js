import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth, provider } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import Header from "./Header";
import { BG_IMG } from "../utils/constant";
const Login = () => {
    const [isSignUp,setIsSignUp] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null);
    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleSubmitForm = () =>{
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);

        if(!message) 
        if(isSignUp){
            // console.log("sign up page")
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage( errorCode + " " + errorMessage)
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage( errorCode + " " + errorMessage)
            });
        }
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth,provider).then((data) => {
        }).catch((e)=>{
            console.log(e);
        })
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src={BG_IMG}
                alt="imgBg"/>
            </div> 
                <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
                    <h1 className="font-bold text-3xl py-4">{ isSignUp ? "Sign Up" : "Sign In"}</h1>
                    { isSignUp && <input type="text" placeholder="Full name" className="p-2 m-2 w-full rounded-lg bg-gray-700"></input>}
                    <input ref={email} type="text" placeholder="Email address" className="p-2 m-2 w-full rounded-lg bg-gray-700"></input>
                    <input ref={password} type="password" placeholder="Password" className="p-2 m-2 w-full  rounded-lg bg-gray-700"></input>
                    { errorMessage ? <p className="text-red-600">{errorMessage}</p> : "" }
                    <button className="p-2 m-2 w-full bg-red-700 rounded-lg" onClick={handleSubmitForm}>{isSignUp ? "Create Account" : "Log In"}</button>
                    <h2 className="p-4 hover:cursor-pointer" onClick={toggleSignUp}> {isSignUp ? "Already a user? sign in now" : "New to netflix? sign up now"}</h2>
                    <button className="p-2 m-2 w-full bg-white rounded-lg text-black flex" onClick={handleGoogleSignIn}>
                        {/* <div> */}
                        <img className="w-7 mr-4 ml-5" tab="google-logo" src="https://developers.google.com/identity/images/g-logo.png"/>
                        {/* </div> */}
                        {/* <div> */}
                        Continue with Google
                        {/* </div> */}
                    </button>
                </form>
        </div>
    )
}

export default Login;