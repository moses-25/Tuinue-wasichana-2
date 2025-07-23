import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <h4>{question}</h4>
        <span>{open ? '-' : '+'}</span>
      </div>
      {open && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

export default FAQItem;

