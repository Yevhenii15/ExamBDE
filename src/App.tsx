import { useState } from 'react'
import words from './wordList.json' // All words
import { HangmanDrawing }  from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // function to choose a random word from the list
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) // Array of guessed letters

  return  (
    // Div to hold the game
    <div
      // Style of the game
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
      >
        <div
          // Div for text lose or win
          style={{
            fontSize: '2rem',
            textAlign: 'center',
          }}
        >
          Lose
          Win
        </div >
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />

      </div>
  )
}

export default App
