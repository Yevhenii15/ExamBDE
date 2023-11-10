import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json' // All words
import { HangmanDrawing }  from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord ())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) // Array of guessed letters

  const incorrectLetters: string[]  = guessedLetters.filter( 
    letter => !wordToGuess.includes(letter)
  ) // Array of incorrect letters

  const isLoser: boolean = incorrectLetters.length >= 6 // If incorrect letters is greater than 6, you lose because I have 6 body parts
  const isWinner: boolean = wordToGuess
  .split("")
  .every(letter => guessedLetters.includes(letter)) // If all letters in the word are guessed, you win


  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner ) return // If letter is already guessed, return

    setGuessedLetters(currentetters => [...currentetters, letter])
  },[guessedLetters, isLoser, isWinner])

  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key.match(/^[a-z]$/)) return // If key is not a letter, return
      e.preventDefault() // Prevent default behavior of keypress
      addGuessedLetter(key) // Add guessed letter
      }
      
    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if( key !== "Enter") return // If key is not enter, return

      e.preventDefault() // Prevent default behavior of keypress
      setGuessedLetters([]) // Reset guessed letters
      setWordToGuess(getWord())
      }
      
    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  },[])
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
          {isWinner && 'You Win' }
          {isLoser && 'You Lose' }
        </div >
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <div style={{alignSelf: "stretch"}}>
          <Keyboard 
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
            )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          />
        </div>
        

      </div>
  )
}

export default App
