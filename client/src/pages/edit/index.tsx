import type { FC } from "react"
import Form from "../../components/form"
import { useParams } from "react-router-dom"
import { useShoe, useUpdateShoe } from "../../service/shoe"
import type { ShoeValues } from "../../types"
import Loader from "../../components/loader"
import Error from "../../components/error"
import Container from "../../components/form/container"

const Edit:FC = () => {
 const {id}= useParams<{id:string}>()
 const {data,isLoading,error,refetch} = useShoe(id)
 const {mutate,isPending} = useUpdateShoe()

 const handleSubmit=(values:ShoeValues)=>{
  mutate({id:id as string,data:values})
 }

 if(isLoading) return <Loader/>

 if(error) return <Error message={error.message} refetch={refetch}/>

  return (
    <Container title="Ürünü Düzenle">
      <Form onSubmit={handleSubmit} isPending={isPending} initialValues={data}/>
    </Container>
  )
}

export default Edit;
