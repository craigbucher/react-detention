import { useState } from 'react'
import './App.css'
import Sentences from './components/Sentences'
import DisplaySentences from './components/DisplaySentences'

function App() {
  const [sentence, setSentence] = useState('')

  function writeSentence() {
    setSentence('I will never mutate state or props directly')
  }

  return (
    <div className="App">
      <h1>Detention!</h1>
      <Sentences handleClick={writeSentence} />
      <ul className='sentences'>
        <DisplaySentences lines={sentence} />
      </ul>
    </div>
  )
}

export default App
