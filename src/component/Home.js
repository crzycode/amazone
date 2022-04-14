import React from 'react'
import'../css/Home.css'
import Products from './Products'

function Home() {
  return (
    <div className='home'>
        <img
        className='home__image'
        src='./images/amazon_banner.jpg' alt=''/>
        <div className='home__row'>
        <Products
        id='1234'
        title='hello'
        price={11.96}
        rating={2}
        image='./Images/WhatsApp Image 2022-01-08 at 13.50.23.jpeg'
        />
          <Products
        id='1235'
        title='hello'
        price={12.96}
        rating={3}
        image='./Images/WhatsApp Image 2022-01-08 at 13.50.23.jpeg'
        />
        </div>
        <div className='home__row'>
        <Products
        id='1236'
        title='hello'
        price={96}
        rating={4}
        image='./Images/WhatsApp Image 2022-01-08 at 13.50.23.jpeg'
        />
          <Products
        id='1237'
        title='hello'
        price={86}
        rating={1}
        image='./Images/WhatsApp Image 2022-01-08 at 13.50.23.jpeg'
        />
         <Products
        id='1239'
        title='hello'
        price={96}
        rating={2}
        image='./Images/WhatsApp Image 2022-01-08 at 13.50.23.jpeg'
        />
        </div>
        <div className='home__row'>
        <Products
        id='12310'
        title='hello'
        price={11}
        rating={2}
        image='./Images/WhatsApp Image 2022-01-08 at 13.50.23.jpeg'
        />
        
        </div>
      
      

    </div>
    
  )
}

export default Home