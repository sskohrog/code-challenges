import React  from 'react'
import { navigate } from '@reach/router'
import { ReactComponent as Plus } from '../assets/icon-plus.svg'
import './List.scss'

function AddItem() {
  return (
    <div
      className={`col-12 ingredient-item`}
      key={'add-item'}
      onClick={() => navigate('/new')}
    >
      Add a new <Plus />
    </div>
  )
}

export default AddItem
