import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGPT } from "../utils/gptSlice";
import {langs} from "../utils/languageConstant";
import {selectedLang} from "../utils/langConfigSlice"
const Header = () => {
    // const navigate = useNavigate();

    // console.log("langs->",langs);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const pageSelected = useSelector((store) => store.gpt.gptEnable);

    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // console.log("sign out success");
            // navigate("/");
          }).catch((error) => {
            // An error happened.
            console.log("problem in signing out");
          });
    }

    const handleToggleSearch = () => {
      dispatch(toggleGPT());
    }

    const handleLanguage = (e) => {
      dispatch(selectedLang(e.target.value));
    }
    

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName} = user;
            //   console.log(uid, email, displayName);
                dispatch(addUser({uid: uid,email: email,displayName: displayName}));
                navigate("/browse");
            } else {
              // console.log("log out");
              dispatch(removeUser());
              navigate("/");
            }
          });
          //unsubscribe when component unmounts
          return () => unsubscribe();
    },[])


    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between">
            <div>
            <img className="w-44" 
            src={LOGO}
            alt="logo" />
            </div>
            <div>
            {pageSelected && <select onChange={handleLanguage}>
              {langs.map((lang) =>  <option key={lang.identifier} value={lang.identifier}>{lang.identifier}</option> )}
              </select> }
              {user && 
             <button className="p-2 m-2 bg-green-500 rounded-lg text-white" onClick={handleToggleSearch} > {pageSelected ? "Home Page" :  "GPT Search"}
             </button>}
             {user && 
             <button className="p-2 m-2 bg-red-700 rounded-lg text-white" onClick={handleSignOut} > Sign Out
             </button> } 
            </div>
        </div>
    )
}
export default Header;