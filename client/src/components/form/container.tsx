import { ArrowLeft } from "lucide-react"
import type { FC, ReactNode } from "react"
import { Link } from "react-router-dom"
interface Props{
    children:ReactNode
    title:string
}

const Container:FC<Props> = ({children,title}) => {
  return (
    <div>
        <Link to="/dashboard" className="text-my-blue flex items-center gap-2 mb-2">
        <ArrowLeft className="size-5"/>
        <span>Geri</span>
      </Link>

      <h1 className="text-2xl font-semibold mb-5">{title}</h1>

      {children}
    </div>
  )
}

export default Container