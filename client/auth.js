import axios from "axios";

const auth = axios.create({
    baseURL: import.meta.env.VITE_AUTH_URL,
});

//tempel token otomatis ke setiap request
auth.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

//kalau token kadaluarsa/ tidakv valid, paksa logout
auth.interceptors.response.use(
    (res) => res,
    (err) =>{
        const isAuthRoute = err.config?.url?.startsWith("/auth/login")
        if (err.response?.status === 401 && !isAuthRoute){
            localStorage.removeItem("token")
            window.location.href="/login"
        }
        return Promise.reject(err)
    }
)
export default auth