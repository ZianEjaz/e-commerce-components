import React, { useState } from 'react'

const Hooks = () => {
  const [count, setCount] = useState(2)
  const [login, isLogged] = useState()
  return (
    <div className={`flex flex-wrap ${login === true ? "bg-green-500" : "bg-red-500"}`}>
      <div className='border p-3 w-full'>
        <button className='border p-3 shadow-xl w-full' onClick={() => setCount(count + 1)}>click me</button>
        <p>{count}</p>
      </div>

      <div className='border p-3 w-full'>
        <button className='border p-3 shadow-xl w-full' onMouseEnter={() => isLogged(true)} onMouseLeave={()=> isLogged(false)}>Hover me</button>
        <p>{login}</p>
      </div>


    </div>
  )
}

export default Hooks