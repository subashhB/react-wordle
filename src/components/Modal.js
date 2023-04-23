import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>Congrats, You Win!</h1>
                <p className='solution'>{solution}</p>
                {turn === 1 ?<p>You found the solution in {turn} guess</p>: <p>You found the solution in {turn} guesses</p>}
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Unlucky</h1>
                <p>The Solution was: </p>
                <p className='solution'>{solution}</p>
                <p>Better luck next time :)</p>
            </div>
        )}
    </div>
  )
}
