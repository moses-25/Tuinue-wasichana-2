import React, { useState } from 'react';
import './FAQ.css';
import FAQItem from '../../components/FAQItem/FAQItem';

const faqs = [
  {
    question: "What does it mean to sponsor a child?",
    answer: "It means providing financial support to help a girl access school fees, meals, and essentials — while staying in touch with her journey."
  },
  {
    question: "How much does it cost to sponsor a child?",
    answer: "Sponsorship starts at just KES 2,000/month — enough to cover school essentials like tuition, meals, and hygiene kits."
  },
  {
    question: "Where can I sponsor a child?",
    answer: "You can sponsor a child by selecting a registered charity and choosing the 'Donate Monthly' option on their page."
  },
  {
    question: "Can I write to my sponsored child?",
    answer: "Yes! Many charities allow donors to send letters, messages, or receive story updates from their sponsored girl."
  },
  {
    question: "Can I donate instead of sponsoring a child?",
    answer: "Absolutely. One-time donations are just as impactful — you can contribute to programs like school meals or transport."
  },
  {
    question: "Is Tuinue Wasichana trustworthy?",
    answer: "Yes. All charities are vetted before being approved, and you can track the stories and donations directly from your dashboard."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="tw-faq">
      <h1>Frequently Asked Questions</h1>
      <p>Have a question? We've got answers.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isActive={index === activeIndex}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
