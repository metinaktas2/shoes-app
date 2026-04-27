import type { FC } from "react"

const Title:FC = () => {
  return (
    <div className="flex justify-between items-center my-6 md:my-8 lg:mt12 xl:mt-20">
        <h1 className="font-semibold uppercase leading-[96%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Yeni Ürünleri 
            <br/>
        Kaçırma</h1>

        <button className="bg-my-blue text-white py-2 px-3 rounded-lg lg:py-3 lg:px7 transition hover:brightness-90 cursor-pointer">Alışverişe başla</button>
    </div>
  )
}

export default Title