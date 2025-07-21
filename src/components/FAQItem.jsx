import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
