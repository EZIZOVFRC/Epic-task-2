import React from 'react'
import Card from '../Card/Card'


function Cards({data}) {
  return (
    <React.Fragment>
        <div className="crd">
        {
            data.map((item,index)=>{
                return <Card item={item} key ={index}/>
            })
        }
        </div>
    </React.Fragment>
  )
}

export default Cards
