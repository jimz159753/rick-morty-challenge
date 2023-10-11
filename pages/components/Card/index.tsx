import React from 'react'
import { ICard } from '../../interfaces'

export const Card: React.FC<ICard> = ({ character: { image, name } }) => {
  return (
    <div className='rounded shadow-xl flex flex-col items-center'>
      <img className='my-2.5' width='100%' src={image} alt={name} />
      <h1 className='my-2.5'>{name}</h1>
    </div>
  )
}
