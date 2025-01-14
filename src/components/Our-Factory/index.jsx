import React from "react";

const FactoryDetails = () => {
  return (
    <section className="factory-details" style={{ padding: "50px 0" }}>
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h4>EG Living Factory - Crafting Quality, Designing Excellence</h4>
            <p>
              Our state-of-the-art factory brings together cutting-edge
              technology, skilled artisanship, and sustainable practices to
              deliver furniture solutions that stand the test of time. Here's an
              insight into how we bring your vision to life.
            </p>
          </div>

          <div className="mt-4 col-lg-12">
            <video
              className="bg-video"
              src="/assets/video/eg-living-factory.mp4"
              playsInline
              autoPlay
              muted
              loop
              style={{ width: "100%", borderRadius: "10px" }}
            >
              <source
                src="assets/video/eg-living-factory.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
              <track kind="captions" />
            </video>
          </div>
        </div>

        <div className="mt-5 row">
          <div className="col-lg-4">
            <h5>Joinery Manufacturing</h5>
            <p>
              Our factory excels in joinery manufacturing, utilizing traditional
              craftsmanship combined with modern technology. From custom-made
              cabinets to intricate woodwork, we ensure every piece is built to
              perfection.
            </p>
          </div>
          <div className="col-lg-4">
            <h5>Advanced Production Units</h5>
            <p>
              Equipped with high-end production units, our facility is designed
              for efficiency and precision. Each unit is optimized for different
              stages of the manufacturing process, ensuring smooth and timely
              delivery of your furniture.
            </p>
          </div>
          <div className="col-lg-4">
            <h5>Modern Architecture & Design</h5>
            <p>
              Our modern production architecture blends form with function,
              creating a work environment where design ideas are seamlessly
              translated into reality. We embrace innovation, continuously
              adapting to the latest industry trends to bring you contemporary,
              stylish solutions.
            </p>
          </div>
        </div>

        <div className="mt-5 row">
          <div className="col-lg-6">
            <h5>Why Choose Us</h5>
            <p>
              At EG Living, we take pride in our ability to deliver top-notch
              quality with every piece of furniture. We combine meticulous
              craftsmanship with cutting-edge technology to create bespoke,
              functional, and durable solutions. Here’s why you should choose
              us:
            </p>
            <ul>
              <li>
                <strong>Customization:</strong> Fully tailored solutions to
                match your specific needs.
              </li>
              <li>
                <strong>Craftsmanship:</strong> A team of skilled artisans
                ensures impeccable finishes and designs.
              </li>
              <li>
                <strong>Sustainability:</strong> We prioritize eco-friendly
                materials and practices.
              </li>
              <li>
                <strong>On-time Delivery:</strong> We ensure your furniture is
                delivered and installed within the stipulated time.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h5>Our Process</h5>
            <p>
              We follow a systematic approach to manufacturing, ensuring that
              every stage of production is executed with precision and care.
              Here’s a glimpse of our process:
            </p>
            <ul>
              <li>
                <strong>Design Phase:</strong> Conceptualizing unique designs
                tailored to your space and style.
              </li>
              <li>
                <strong>Material Selection:</strong> Sourcing only the finest
                materials to ensure durability and aesthetic appeal.
              </li>
              <li>
                <strong>Production:</strong> Using advanced machinery and
                skilled craftsmanship to bring your design to life.
              </li>
              <li>
                <strong>Quality Control:</strong> Rigorous inspection at every
                step to guarantee the highest standards of quality.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryDetails;
