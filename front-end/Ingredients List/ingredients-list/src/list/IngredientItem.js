import React, { useContext } from 'react'
import { ReactComponent as RightCarat } from '../assets/Caret-Right.svg'
import { IngredientsListContext } from '../global/IngredientsListContext'
import './List.scss'

function IngredientItem({ item }) {
  let { selectItem } = useContext(IngredientsListContext)
  return (
    <div
      className={`col-12 ingredient-item${item.selected ? ' selected' : ''}`}
      key={item.id}
      onClick={() => selectItem(item.id)}
    >
      <div className='row'>
        <div className='col-10'>
          <h3 className='ingredient-name'>{item.name}</h3>
          <p className='dosage'>{item.dosage}</p>
          <p className='location'>
            {item.selected ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-record-circle-fill mr-1'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-record-circle mr-1'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                />
                <path d='M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
              </svg>
            )}
            {item.location}
          </p>
        </div>
        <div className='col-2 carat-container'>
          <RightCarat />
        </div>
      </div>
    </div>
  )
}

export default IngredientItem
