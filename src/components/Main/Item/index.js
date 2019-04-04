import React from 'react'
import './item.css'

const Item = (props) => {
  const { title, author, image, finished } = props.package
  const webp = image.slice(26,-4)
  let style = {}
  if (finished) {
    style = { 'color': 'green' }
  }
  return (
    <div className='item'>
      <h3 className='item__title' >{author}</h3>
      <h3 className='item__title' style={style}>{title}</h3>
      <div className='item__inner'>
        <picture className="item__image">
          <source srcSet={`http://localhost:3005/webp/${webp}.webp`} type="image/webp"/>
          <source srcSet={image} type="image/jpeg"/> 
          <img src={image} alt='Item' className='item__image' />
        </picture>
      </div>
    </div>
  )
}

export default Item
