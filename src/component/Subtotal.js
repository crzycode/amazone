import React from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../Reducer'

function Subtotal() {
    const [{basket}] = useStateValue()
  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value) =>(
            <>
            <p>
                Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type="checkbox" /> this order contains 
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

        />
        <button>Proceed a Items</button>
    </div>
  )
}

export default Subtotal