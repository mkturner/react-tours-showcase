import React, { useState } from 'react';

// destructure props
const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        {/* Conditional Rendering for full paragraph */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* use setReadMore to flip readMore state */}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          
          Not Interested
        
        </button>
      </footer>
    </article>
  );
};

export default Tour;
