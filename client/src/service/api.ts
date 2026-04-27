import axios from "axios"
import { authService } from "./auth";

const api= axios.create({
    baseURL:"http://localhost:4001/api",
    //cookie ile gelen verileri backende geri gönder
    withCredentials:true,
    //api'ya gönderilecek verinin tipi
    headers:{
        "Content-Type":"application/json"
    }
})

//axios interceptor
api.interceptors.response.use(
    //api'dana olumlu cevap gelince çalışacak fonksiyon
    (response)=>response,

    //api'dan olumsuz cevap geldiğinde çalışacak fonksiyon
    async(error)=>{
        //hata aldığımız api isteğini değişkene aktar
        const originalRequest=error.config;

        //hata access tokenının süresinin dolmasından kaynaklıysa
        if(error.response.status===401 && error.response.data.message==="Access token expired")
            {
            try {
            //refresh endpointine istek atıp yeni access token al
            await authService.refresh()

            //access tokenın süresi dolmasından kaynaklı hata aldığımız api isteğini tekrar at
            return api.request(originalRequest) }
            
            catch (error) {
                //refresh tokenının da süresi dolarsa çıkış yap
                await authService.logout()

                //login sayfasına yönlendir
                window.location.href="/login";             
            }         
        }
         //hatayı fırlat
         return Promise.reject(error);
    }
)

export default api;
