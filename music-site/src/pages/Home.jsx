import React from "react";
import Card from "../components/Card";
import Content from "../components/Content";

function Home() {
  return (
    <div className="page-content">
      <h1>Twin II</h1>
      <p>2025</p>

      {/* Section 1 */}
      <div className="section section-one">
        <h2>Section One</h2>
        <p>Content for the first section.</p>
      </div>

      {/* Section 2 */}
      <div className="section section-two">
        <h2>Section Two</h2>
        <p>Content for the second section.</p>
      </div>

      {/* Section 3 */}
      <div className="section section-three">
        <h2>Section Three</h2>
        <p>Content for the third section.</p>
      </div>
    </div>
  );
}

export default Home;



