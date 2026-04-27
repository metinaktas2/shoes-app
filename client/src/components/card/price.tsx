import type { FC } from "react"
import type { Shoe } from "../../types"

interface Props{
    shoe:Shoe
    designs?:string
}

const Price:FC <Props>= ({shoe,designs}) => {
  let price=shoe.price

  //indirim varsa indirimli fiyatı hesapla
  if(shoe.discount){
    price=(shoe.price*(100-shoe.discount))/100
  }
  return (
    <div className={`${designs || (shoe.discount>0?"text-my-yellow":"text-white")}`}>
      ${price.toFixed(2)}
    </div>
  )
}

export default Price