import React, { useContext } from 'react'
import MainContext from '../../../context/context'

function Card({item}) {

    const {addToBasket}=useContext(MainContext)
  return (
    <div className='cardm'>
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <span>{item.price}</span>
      <button onClick={()=>{
        addToBasket(item)
      }}>Add To Basket bro</button>
    </div>
  )
}

export default Card