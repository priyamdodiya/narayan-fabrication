import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
const FeedbackStar = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    console.log(`Selected Rating: ${rate}`);
  };
  const onPointerEnter = () => console.log('Pointer Enter');
  const onPointerLeave = () => console.log('Pointer Leave');
  const onPointerMove = (value, index) => console.log(`Value: ${value}, Index: ${index}`);
  return (
    <div>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        ratingValue={rating} 
        size={20}
        transition 
        fillColor='black' 
        emptyColor='white'
      />
    </div>
  );
};

export default FeedbackStar;
