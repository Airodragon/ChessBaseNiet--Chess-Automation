import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Chess_NIET</h1>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <p className="read-the-docs">
        Upload your position in Chess OCR of over the board and get the best move.
      </p>
      <>
      <iframe width="450" height="500" src="https://hi-ogawa.github.io/chess-ocr/" frameborder="0" allowfullscreen> 
      </iframe>
      </>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  )
}

export default App
