import { useState } from "react"

const useWordle = (solution) =>{
    const[turn, setTurn] = useState(0); //Whent the turn is 6, it's game over
    const[currentGuess, setCurrentGuess] = useState(''); //Each key that the user presses and updated everytime a key is pressed
    const[guesses,setGuesses] = useState([]); //Here each guess is an array
    const[history,setHistory] = useState([]); //Here each giess is a string
    const[isCorrect, setIsCorrect] = useState(false);

    //Format a guess into an array of letter objects e.g. [{key: 'a', color: 'gray'}]
    const formatGuess = () =>{

    }

    //Add a new Guess to the guesses state.
    //Update isCorrect state if the guess is correct.
    //add one to the turn state.
    const addNewGuess =()=>{

    }

    //Handle key press events and track current guesses.
    //if the user presses Enter, Add a new Guess.
    const handleKeyup =() =>{

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle