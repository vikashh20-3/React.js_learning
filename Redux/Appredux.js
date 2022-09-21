import React from 'react'

const Appredux = () => {
  return (
      <>
      <div className='container'>
          <h1>Increment/Decrement counter</h1>
          <h4>using REactand redux</h4>

          <div className='quantity'>
              <a className='quantity_minus' title='Decrement'><span>-</span></a>
              <input name='quantity' type='text' classname=
              "quantity_input" />
              <a className='quantity_plus' title='Increment'> <span>+</span></a>    
          </div>
      </div>
      </>
  )
}
export default Appredux;
