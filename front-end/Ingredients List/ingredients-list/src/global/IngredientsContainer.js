import React from 'react'
import { Router } from '@reach/router'
import AboutContainer from '../about/AboutContainer'
import IngredientsList from '../list/IngredientsList'
import { IngredientsListProvider } from './IngredientsListContext'
import './App.scss'

function IngredientsContainer() {
  return (
    <IngredientsListProvider>
      <div className='main-ingredients-container container'>
        <div className='row header'>
          <h1 className='main-header'>
            <i>Essential </i>
            <b>Nutrients</b>
          </h1>
        </div>
        <div className='row main-content'>
          <div className='col-3 ingredients-list-container'>
            <IngredientsList />
          </div>
          <Router className='col-7'>
            <AboutContainer path='/' />
          </Router>
        </div>
      </div>
    </IngredientsListProvider>
  )
}

export default IngredientsContainer
