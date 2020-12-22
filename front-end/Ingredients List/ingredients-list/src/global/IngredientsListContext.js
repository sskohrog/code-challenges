import React, { useEffect, useState } from 'react'
import _cloneDeep from 'lodash/cloneDeep'
import mockingredientslist from '../data/ingredients.json'

const IngredientsListContext = React.createContext(null)

function IngredientsListProvider({ children }) {
  const [ingredientsList, setIngredientsList] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    setIngredientsList(
      mockingredientslist.map((ingred) => {
        ingred.selected = false
        setSelectedItem(ingred[0])
        return ingred
      })
    )
  }, [])

  const selectItem = (id) => {
    let list = _cloneDeep(ingredientsList)
    list.map((l) => {
      if (l.id === id) {
        l.selected = true
        setSelectedItem(l)
      } else {
        l.selected = false
      }
      return l
    })
    setIngredientsList(list)
  }

  return (
    <IngredientsListContext.Provider
      value={{
        ingredientsList,
        selectedItem,
        selectItem,
      }}
    >
      {children}
    </IngredientsListContext.Provider>
  )
}

export { IngredientsListContext, IngredientsListProvider }
