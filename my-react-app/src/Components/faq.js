import React, { useState } from 'react';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        { question: "What is Plannit?", answer: "Plannit helps you plan events such as parties and gatherings. They handle all the details to make events awesome and stress-free!" },
        { question: "What types of events do you manage?", answer: "We manage a wide range of events including corporate events, weddings, private parties, conferences, seminars, product launches, and more." },
        { question: "Can you customize your services to fit my event needs?", answer: "Yes, we offer customizable packages tailored to your specific requirements and preferences. We work closely with you to ensure your event reflects your vision." },
        { question: "What services do you offer?", answer: "Our services include event planning and coordination, venue selection, catering, decoration, entertainment, audio-visual equipment, transportation, and on-site management." },
        { question: "Do you handle both small and large events?", answer: "Absolutely! We manage events of all sizes, from intimate gatherings to large-scale conferences and festivals." },
        { question: "Do you work with specific vendors, or can I choose my own?", answer: "We have a list of trusted vendors we frequently work with, but you are welcome to choose your own vendors if you prefer. We are happy to coordinate with them to ensure everything runs smoothly." },
        { question: "Will you be present on the day of the event?", answer: "Yes, our team will be on-site to oversee and manage all aspects of the event, ensuring everything goes according to plan." }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h1 className="title">FREQUENTLY ASKED QUESTIONS</h1>
            <ul className="faq">
                {questions.map((item, index) => (
                    <li key={index}>
                        <div className="Q" onClick={() => toggleAnswer(index)}>
                            <span className={`arrow ${activeIndex === index ? 'arrow-rotated' : ''}`}></span>
                            <span>{item.question}</span>
                        </div>
                        <div className={`a ${activeIndex === index ? 'a-opened' : ''}`}>
                            <p>{item.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FAQs;
