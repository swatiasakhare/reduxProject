import React from 'react'
import Products from '../component/Products'

const Home = () => {
  return (
    <div>
      <h2 className="heading">welcome to the redux toolkit store</h2>
      <section className='product-list'>
        <h3>products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home