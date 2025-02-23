import React, { useState } from "react";
import faqsData from "../../data/faqs.json";
import Link from "next/link";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center section-head">
              <h6>FAQs</h6>
              <h4>Frequently Asked Questions</h4>
            </div>
            <div className="faqs-content">
              {/* Display only the first 5 FAQs */}
              {faqsData.slice(0, 5).map((faq, index) => (
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

            {faqsData.length > 5 && (
              <div className="mt-4 text-center">
                <Link
                  href="/frequently-asked-questions"
                  className="btn-curve btn-color mt-30"
                >
                  <span>Read More</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
