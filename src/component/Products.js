import React from 'react'
import '../css/Products.css'
import {StarBorderOutlined,StarBorder,Star,StarHalf} from '@material-ui/icons'
import { useStateValue } from '../StateProvider'

function Products({id,title,price,rating,image}) {
  const [{basket}, dispatch] = useStateValue(); 
const addToBasket =() =>{
  dispatch ({
    type:"ADD_TO_BASKET",
    item:{
      id:id,
      title:title,
      price:price,
      rating:rating,
      image:image
    },
  })
}
  return (
    <div className='product'>
   <div className='product__info'>

   <p>{title}</p>
      <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='product__rating'>
        {
          Array(rating).fill().map((_) =>(<>
        
           <StarBorder></StarBorder>
          
          </>
           
          ))}
      </div>   
   </div>
   <img src={image} alt=''/>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Products