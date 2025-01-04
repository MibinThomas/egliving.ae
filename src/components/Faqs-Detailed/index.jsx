import React, { useState } from "react";
import faqsData from "../../data/faqs.json";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-left section-head">
              <h4>Frequently Asked Questions</h4>
            </div>
            <div className="faqs-content">
              {faqsData.map((faq, index) => (
                <div key={faq.id} className="faq-item">
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => handleToggle(index)}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "none",
                      background: "none",
                    }}
                  >
                    {faq.question}
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </button>
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
