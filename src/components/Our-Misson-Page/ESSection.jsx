import React, { Component } from "react";

// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "./ESSection.css";

class ESSection extends Component {
  state = {};
  render() {
    return (
      <div className="ESSection">
        <div className="container">
          <h1>
            Egalitarian <span>Society</span>
          </h1>
          <p>
            Since Independence, our nation's leaders and architects have dreamt
            of creating an egalitarian society with balanced growth. In spite of
            various measures put in place by successive Governments, achieving a
            well-balanced growth in physical and social infrastructure continues
            to remain a distant dream. Providing quality education for every
            single child is the only way of achieving our developmental goals,
            as sustainable development can begin only with education. Giving an
            opportunity and a better platform for learning will not only protect
            the child's future, but in-turn will lead to transforming our
            society and nation. Agaram is one such initiative that aims to
            provide quality education and equal opportunities to the
            under-privileged children. Agaram, which denotes "A", the first
            letter in all languages thrives to bridge the gaps in providing high
            quality education, for the rural children from interiors parts of
            Tamilnadu.
          </p>
        </div>
      </div>
    );
  }
}

export default ESSection;
