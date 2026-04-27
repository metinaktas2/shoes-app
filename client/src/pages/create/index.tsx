import type { FC } from "react"
import Form from "../../components/form"
import { useCreateShoe } from "../../service/shoe"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Container from "../../components/form/container"

const Create:FC = () => {
 const {mutate,isPending} = useCreateShoe()

  return (
    <div className="max-w-[1000px] mx-auto">
      <Container title="Ürün Ekle"/>


      <Form onSubmit={mutate} isPending={isPending}/>
    </div>
  )
}

export default Create