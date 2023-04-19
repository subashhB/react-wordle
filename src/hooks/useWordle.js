import { useState } from "react"

const useWordle = (solution) =>{
    const[turn, setTurn] = useState(0); //Whent the turn is 6, it's game over
    const[currentGuess, setCurrentGuess] = useState(''); //Each key that the user presses and updated everytime a key is pressed
    const[guesses,setGuesses] = useState([...Array(6)]); //Here each guess is an array
    const[history,setHistory] = useState([]); //Here each giess is a string
    const[isCorrect, setIsCorrect] = useState(false);

    //Format a guess into an array of letter objects e.g. [{key: 'a', color: 'gray'}]
    const formatGuess = () =>{
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((letter)=>{
            return {key: letter, color: 'gray'}
        })

        //Formatting the letters in the right position // Green Letters
        formattedGuess.forEach((letter, i)=>{
            if(solutionArray[i] === letter.key){
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        })

        //Formatting the letters in the solution but in the wrong position // Yellow Letters
        formattedGuess.forEach((letter, i) =>{
            if(solutionArray.includes(letter.key) && letter.color !== 'green'){
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    //Add a new Guess to the guesses state.
    //Update isCorrect state if the guess is correct.
    //add one to the turn state.
    const addNewGuess =(formattedGuess)=>{
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) =>{
            let newGuess = [...prevGuesses];
            newGuess[turn] = formattedGuess;
            return newGuess
        })
        setHistory((prevHistory)=>{
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) =>{
            return prevTurn + 1;
        })
        setCurrentGuess('')
    }

    //Handle key press events and track current guesses.
    //if the user presses Enter, Add a new Guess.
    const handleKeyup =({key}) =>{
        if(key === 'Enter'){
            //Don't Submit if the turns are greater than 5
            if(turn > 5){
                console.log('You have used all your guesses');
                return;
            }
            //Don't Submit if not a 5 letter word
            if(currentGuess.length !== 5){
                console.log('Word must be 5 characters long.');
                return;
            }
            //Don't Submit if already guessed
            if(history.includes(currentGuess)){
                console.log('You have already guessed this word.');
                return;
            }
            const formatted = formatGuess();
            addNewGuess(formatted);
        }
        if(key === 'Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1)
            })
            return
        }
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle