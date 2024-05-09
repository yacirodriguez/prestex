'use client'
import { auth } from "../firebase/config"
import { createContext, useContext, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"

const AuthContext = createContext(AuthContext)

const registerUser = async (values)=>{
    const userCredential = await
    createUserWithEmailAndPassword(auth, values.email , values.password)
    console.log(userCredential)
    const user = userCredential.user

    setUser({
        logged: true,
        email: true,
        user: user.uid
    })

}
export const AuthProvider = ({children}) => {
   const [user,setUser] = useState (
    {
        logged: true,
        email: null,
        uid: null
})
}

return (
    <AuthContext.Provider value={{user, registerUser}}>
        {children}
    </AuthContext.Provider>
)
