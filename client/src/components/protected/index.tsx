import type { FC, ReactNode } from "react"
import { useProfile } from "../../service/auth"
import { Navigate } from "react-router-dom"

interface Props{
  children:ReactNode
  allowedRoles?:("user"|"admin")[]
}

const Protected:FC <Props>= ({children,allowedRoles}) => {
  //Oturumu açık olan kullanıcının profil bilgilerini al
 const {user,isLoading}= useProfile()

//kullanıcı verisi yüklenene kadar loader göster
if(isLoading) return <h1>Loading...</h1>

//oturumu açık değilse  login sayfasına yönlendir
if (!user) return <Navigate to="login" replace/>

//eğer rolü yetersiz ise login sayfasına yönlendir
if(allowedRoles && !allowedRoles.includes(user.role))
  return<Navigate to="/" replace/>
 
//oturum açıksa bu sayfa göster
  return children;
  
}

export default Protected