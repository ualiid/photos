import React from 'react'

const Photo = ({img,image_name}) => {
  return (
    <article className='photo'>
  <img src={img} alt={image_name}/>
  <div className='photo-info'>
    <div>
      <h4>
        {image_name}
      </h4>
     </div>
    
  </div>
    </article>
  )
}

export default Photo
