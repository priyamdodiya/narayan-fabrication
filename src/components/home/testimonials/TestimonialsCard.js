import React, { useState, useEffect } from 'react';
import './TestimonialsCard.css';
import Priyam from '../../../assets/priyam.jpg';
import FeedbackStar from './Feedbackstar';
import Maharshi from "../../../assets/maharshi.jpg";
import Harsh from "../../../assets/harsh.jpg";

const TestimonialsCard = () => {
  const initialCards = [
    { img: Maharshi, title: "This is an amazing testimonial!", name: "Maharshi Panara" },
    { img: Priyam, title: "This is an amazing testimonial!", name: "Priyam Dodiya" },
    { img: Harsh, title: "This is an amazing testimonial!", name: "Harsh Vajani" }
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift(); 
        newCards.push(firstCard); 
        return newCards;
      });
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='testimonialscards'>
      {cards.map((card, index) => (
        <div className="testicard" key={index}>
          <img src={card.img} alt={card.name} />
          <p style={{ color: 'white', fontSize: '18px' }}>
            {card.title}
          </p>
          <div className='feed-para'>
            <FeedbackStar />
            <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>{card.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCard;