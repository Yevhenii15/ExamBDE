import { useState } from 'react'
import words from './wordList.json' // All words
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // function to choose a random word from the list
    return words[Math.floor(Math.random() * words.length)]
  })
  console.log(wordToGuess)
  return  <h1>Word Guesser</h1>
}

export default App
