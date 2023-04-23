import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordle({solution}) {
    const {currentGuess, handleKeyup, guesses, turn, isCorrect, usedKeys} = useWordle(solution);
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyup);
        if(isCorrect){
          window.removeEventListener('keyup', handleKeyup);
          console.log('Congrats! You win');
        }
        if(turn > 5){
          window.removeEventListener('keyup', handleKeyup);
          console.log('Unlucky, You have used all your guesses');
        }
        return () => window.removeEventListener('keyup', handleKeyup);
    },[handleKeyup, isCorrect, turn])
  return (
    <>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys}/>
    </>
  )
}
