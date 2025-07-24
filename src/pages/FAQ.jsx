import React from 'react';
import './FAQ.css';
import FAQItem from '../../components/FAQItem';

const faqData = [
  {
    question: 'What is Tuinue Wasichana?',
    answer: 'Tuinue Wasichana is a platform dedicated to supporting African schoolgirls by connecting donors to charities that focus on education, hygiene, and empowerment.'
  },
  {
    question: 'How can I make a donation?',
    answer: 'You can donate directly via our Donate page using PayPal, M-Pesa, or your card. You may also choose one-time or recurring support.'
  },
  {
    question: 'Is my donation secure?',
    answer: 'Absolutely. All transactions are encrypted and processed through trusted gateways.'
  },
  {
    question: 'Can I choose which charity to support?',
    answer: 'Yes. You can browse available charities and choose to support the one that aligns with your values.'
  },
  {
    question: 'How can I share a success story?',
    answer: 'You can share a story via the Contact page, and we’ll review it for publishing in our Stories section.'
  }
];

const FAQ = () => {
  return (
    <div className="tw-faq">
      <h1>Frequently Asked Questions</h1>
      <p className="faq-intro">Got questions? We've got answers. Here are some of the most common inquiries.</p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

