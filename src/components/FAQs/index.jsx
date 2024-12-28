import React, { useState } from "react";
import faqsData from "../../data/faqs.json";

const FAQs = () => {
  // State to track active FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center">
              <h6>FAQs</h6>
              <h4>Frequently Asked Questions</h4>
            </div>
            <div className="faqs-content">
              {faqsData.map((faq, index) => (
                <div key={faq.id} className="faq-item">
                  <h5
                    className="faq-question"
                    onClick={() => handleToggle(index)}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {faq.question}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </h5>
                  {activeIndex === index && (
                    <p className="faq-answer" style={{ marginTop: "10px" }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
