import React, { useContext, useEffect, useState } from 'react'
import { ReactComponent as RightCarat } from '../assets/Caret-Right.svg'
import { ReactComponent as LeftCarat } from '../assets/Caret-Left.svg'
import { IngredientsListContext } from '../global/IngredientsListContext'
import './About.scss'

function AboutContainer() {
  let { selectedItem } = useContext(IngredientsListContext)
  const [selectedCarouselItem, setSelectedCarouselItem] = useState(0)

  useEffect(() => setSelectedCarouselItem(0), [selectedItem])

  return selectedItem ? (
    <div className='about-container row ml-3'>
      <div className='col-12 title-container'>
        <div className='row'>
          <div className='col-5 img-avatar'>
            <img
              src={process.env.PUBLIC_URL + selectedItem.imagePath}
              alt='ingred-img'
            />
          </div>
          <div className='col-5 title'>
            <h1 className='ingred'>{selectedItem.name}</h1>
            <p className='dosage'>{selectedItem.dosage}</p>
          </div>
        </div>
      </div>
      <div className='col-12 ingredient-info'>
        <h4 className='ingred-description mt-2 mb-2'>
          {selectedItem.description}
        </h4>
        <div className='row ingred-info'>
          <div className='col-4'>Found In</div>
          <i className='col-8'>{selectedItem.foundIn}</i>
          <div className='col-4'>Form</div>
          <i className='col-8'>{selectedItem.form}</i>
          <div className='col-4'>Source</div>
          <i className='col-8'>{selectedItem.source}</i>
          <div className='col-4'>Supplier</div>
          <i className='col-8'>{selectedItem.supplier}</i>
          <div className='col-12'>
            Final Location of Manufacturing &nbsp;&nbsp;
            <i>{selectedItem.location}</i>
          </div>
        </div>
      </div>

      <div className='col-9 research-container'>
        <h4 className='row justify-content-center'>Read some Research</h4>
        <div className='row research-carousel'>
          {((selectedItem || {}).articles || []).length > 1 && (
            <button
              className='btn btn-link left-carat'
              onClick={() =>
                setSelectedCarouselItem((num) => {
                  num === 0
                    ? (num = ((selectedItem || {}).articles || []).length - 1)
                    : num--
                  return num
                })
              }
            >
              <LeftCarat />
            </button>
          )}
          <div className='col-12 research-info'>
            <a
              className='research-link'
              href={
                ((selectedItem || {}).articles[selectedCarouselItem] || {}).link
              }
            >
              {
                ((selectedItem || {}).articles[selectedCarouselItem] || {})
                  .title
              }
            </a>
            <i className='mt-1'>
              {
                ((selectedItem || {}).articles[selectedCarouselItem] || {})
                  .author
              }{' '}
              {((selectedItem || {}).articles[selectedCarouselItem] || {}).year}
            </i>
          </div>
          {((selectedItem || {}).articles || []).length > 1 && (
            <button
              className='btn btn-link right-carat'
              onClick={() =>
                setSelectedCarouselItem((num) => {
                  num === ((selectedItem || {}).articles || []).length - 1
                    ? (num = 0)
                    : num++
                  return num
                })
              }
            >
              <RightCarat />
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null
}

export default AboutContainer
