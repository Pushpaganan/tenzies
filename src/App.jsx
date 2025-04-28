import { useState } from 'react'
import './App.css'
import SquareBox from './components/atoms/SquareBox'

function App() {
  
  const[roll,setroll] = useState(false)
  const[count,setcount] = useState(0)

  function randomNumberArray() {
    let numberArray = [];
    for (let i = 0; i < 10; i++) {
      let number = Math.floor(Math.random() * 10)
      numberArray[i] = number;
    }
    return numberArray;
  }

  let x = randomNumberArray();

  function onClick(){
    setcount(count => count+1)
    setroll(roll => !roll)
  }

  let i = 1;
  return (
    <>
      <div className="rounded-container">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>

        {x.map(item => (
          <SquareBox number={item} key={item.id} id={i++}/>
        ))}

        <div className="button-container">
          <button onClick={onClick}>Roll</button>          
        </div>
        <div>
          <p>Attempts: {count}</p>
        </div>
      </div>
    </>
  )
}

export default App
