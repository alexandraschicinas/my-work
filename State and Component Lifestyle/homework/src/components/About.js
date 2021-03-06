import React from 'react';

const About = (props) => (
<section id="about" className="success">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>About The Library</h2>
                <hr className="star-light" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-lg-offset-2">
                <p>
                  This library is an exercise for building UI in a{" "}
                  <strong style={{ textDecoration: "underline" }}>
                    declarative way
                  </strong>
                  . This web site will help you understand the fundamental piece
                  of ReactJS, components. You'll learn how to break an app in
                  components (AKA componentization) and flow data accross them.
                </p>
              </div>
              <div className="col-lg-4">
                <p>
                  This ReactJS web site works, but it's not well implemented.
                  The problem, the developer didn't think in React and there
                  aren't many components.
                </p>
              </div>
            </div>
          </div>
        </section>
);

export default About;