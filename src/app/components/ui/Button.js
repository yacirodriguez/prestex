import React from 'react'

const Button = ({children, className='', ...args}) => {
  return (
    <button className={'rounded-md py-1 px-3 bg-blue-500 text-center text-white ${className}'}{...args} >{children}</button>
  )
}

export default Button