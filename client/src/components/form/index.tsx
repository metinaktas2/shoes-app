import type { FC } from "react"
import type { ShoeValues } from "../../types"
import { useNavigate } from "react-router-dom"
import { Formik ,Form, Field} from "formik"
import { INPUT_ARRAY } from "../../utils/constants"
import Input from "./input"

// HTML'i düz metne çeviren yardımcı fonksiyon
const stripHtml = (html: string): string => {
  if (!html) return ""
  // Geçici bir DOM elementi oluştur
  const tmp = document.createElement("div")
  tmp.innerHTML = html
  // Text içeriğini al ve HTML entity'lerini decode et
  return tmp.textContent || tmp.innerText || ""
}

interface Props{
onSubmit:(data:ShoeValues)=>void
isPending:boolean
initialValues?:ShoeValues
}

const FormContainer:FC<Props> = ({onSubmit,isPending,initialValues:data}) => {
  const navigate=useNavigate()

  const handleSubmit=(values:ShoeValues)=>{
    onSubmit(values);
    navigate("/dashboard")
  }
  const initialValues:ShoeValues={
    name:data?.name||"",
    price:data?.price||0,
    discount:data?.discount||0,
    color:data?.color[0]||"",
    size:data?.size||"",
    description:data?.description ? stripHtml(data.description) : "",
    isNew:data?.isNew||false,
    gender:data?.gender||"men"
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
{INPUT_ARRAY.map((input)=><Input key={input.name} {...input}/>)}

<div className="flex items-center gap-5">
  <div className="flex items-center gap-2">
    <Field type="radio" name="gender" value="men" id="men"/>
    <label htmlFor="men">Erkek</label>
  </div>
  <div className="flex items-center gap-2">
    <Field type="radio" name="gender" value="women" id="women"/>
    <label htmlFor="women">Kadın</label>
  </div>
</div>

<button
 type="submit" 
 disabled={isPending} 
 className="bg-my-blue py-1 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer">Gönder
</button>
      </Form>
    </Formik>
  )
}

export default FormContainer;