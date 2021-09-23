import { useState, useEffect } from 'react'

export default function SearchGameReturn(props) {

  return (
    <div className='bg-white text-black'>
      <div className='grid grid-cols-1'>
        {props.games.map(game => {
          if (game.fields?.playerName.toLowerCase() == props.searchInput.toLowerCase()) {
            return (
              <div key={game?.id}>
                <button onClick={props.openModal} id={game.id} className='w-10/12 h-10/12 bg-white hover:bg-green-900 shadow-2xl border-black gap-1 mb-5 mx-5 border-2 rounded-xl text-sm'>
                  <div id={game.id} className=''>
                    <h3 id={game.id}>{game.fields.playerName}</h3>
                    <h4 id={game.id}>{game.fields.courseName}</h4>
                    <div id={game.id}>{game.fields.date}</div>
                  </div>
                </button>
              </div>
            )
          }
        })}</div>
    </div>
  )

}







