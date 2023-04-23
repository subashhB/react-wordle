import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({solution}) {
    const {currentGuess, handleKeyup, guesses, turn, isCorrect, usedKeys} = useWordle(solution);
    const[showModal, setShowModal] = useState(false);
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyup);
        if(isCorrect){
          window.removeEventListener('keyup', handleKeyup);
          setTimeout(()=> setShowModal(true), 2000);
        }
        if(turn > 5){
          window.removeEventListener('keyup', handleKeyup);
          setTimeout(() => setShowModal(true), 2000);
        }
        return () => window.removeEventListener('keyup', handleKeyup);
    },[handleKeyup, isCorrect, turn])
  return (
    <>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </>
  )
}
