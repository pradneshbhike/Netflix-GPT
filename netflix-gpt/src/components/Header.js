import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => {
    // const navigate = useNavigate();

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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName} = user;
            //   console.log(uid, email, displayName);
                dispatch(addUser({uid: uid,email: email,displayName: displayName}));
                navigate("/browse");
            } else {
              console.log("log out");
              dispatch(removeUser());
              navigate("/");
            }
          });
          //unsubscribe when component unmounts
          return () => unsubscribe();
    },[])


    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <div>
            <img className="w-44" 
            src={LOGO}
            alt="logo" />
            </div>
            <div>
            <button className="p-2 m-2 bg-red-700 rounded-lg text-white" onClick={handleSignOut} > Sign Out
             </button>
            </div>
        </div>
    )
}
export default Header;