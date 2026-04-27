import { useState, type FC } from "react"
import { SIZES } from "../../utils/constants"

interface Props{
    sizes:string
}

const Size:FC<Props> = ({sizes}) => {
  const[selected,setSelected]=useState<string>("")

  const toggle=(size:string)=>{
    setSelected(selected===size?"":size)
  }
  return (
    <div>
      <h2 className="font-semibold mb-3">Numara Seçiniz</h2>

      <div className="grid grid-cols-5 gap-4">
        {SIZES.map((num)=>{
          //ekrana basılacak numara stokta var mı kontrol et?
          const inStock=sizes.split(",").includes(num)

          //ekrana basılan numara seçili mi?
          const isSelected=selected===num


          return (
            <button disabled={!inStock} onClick={()=>toggle(num)} className={`py-2  px-4 rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#d2d1d3] disabled:text-[#8f8c91] ${isSelected?"bg-black text-white":"bg-white"}`}>{num}</button>
          )
        })}
      </div>
    </div>
  )
}

export default Size