import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3001/letters')
        .then(res => res.json())
        .then(json =>{ setLetters(json)})
    },[setLetters])

  return (
    <div className='keypad'>
        {letters && letters.map((letter)=>{
            let color = usedKeys[letter.key]
            return(
                <div key={letter.key} className={color}>{letter.key}</div>
            )
        })}
    </div>
  )
}
