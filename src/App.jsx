import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const incrementValue = () =>{
    setCount(count+1)
  }

  return (
    <>
    <div className='flex-container'>
      <div className='MainComponents header'>
        <h1>Counter</h1>
      </div>
      <div className='MainComponents header'>
        <h1>{count}</h1>
      </div>
      <div className='btnContainer'>
        <button className="btn btn-light btn-lg" onClick={incrementValue}> + 1 </button>
      </div>
    </div>
    </>
  )
}

export default App
