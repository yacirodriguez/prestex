'use client'
import { auth } from "../firebase/config"
import { createContext, useContext, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"

const AuthContext = createContext()

const registerUser = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      setUser({
        logged: true,
        email: user.email,
        uid: user.uid
      });
    } catch (error) {
      console.error(error);
    }
  };
  

export const AuthProvider = ({children}) => {
   const [user,setUser] = useState (
    {
        logged: true,
        email: null,
        uid: null
})

return (
    <AuthContext.Provider value={{user, registerUser}}>
        {children}
    </AuthContext.Provider>
)
}
