import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`tw-faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <h4>{question}</h4>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
       {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

export default FAQItem;

