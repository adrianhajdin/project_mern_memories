import {createContext, useContext, useEffect, useState} from "react"
import auth from "../auth.js"

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

//cek token saat aplikasi pertama dibuka
useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token) {
        setLoading(false)
        return
    }
    auth
        .get("/me")
        .then((res)=> setUser(res.data))
        .catch(()=> localStorage.removeItem("token"))
        .finally(()=> setLoading(false))
}, [])

const login = async (email, password)=> {
    const {data} = await auth.post("/login", {email, password})
    localStorage.setItem("token", data.token)
    setUser(data.user)
}

  const register = async (userData) => {
    const { data } = await auth.post("/register", userData);
    if (data.token) {
      localStorage.setItem("token", data.token);
      setUser(data.user);
    }
    return data;
  };

const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
}

return(
    <AuthContext.Provider value={{user, loading, login, register, logout}}>
        {children}
    </AuthContext.Provider>
)
}