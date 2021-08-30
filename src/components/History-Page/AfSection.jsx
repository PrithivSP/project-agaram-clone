import React, { Component } from "react";

//importing css
import "./AfSection.css";

class AfSection extends Component {
  state = {};
  render() {
    return (
      <div className="container Af-content">
        <div className="row">
          <div className="col-sm-6">
            <h1>
              Agaram<span> Foundation</span>
            </h1>
            <p>
              In a rapidly modernizing world where traditional jobs are fast
              disappearing and education is the only means to secure future this
              illiteracy is a matter of grave concern. Actor surya , who knows
              of his father sivakumar’s struggle for education in his youth,
              understands this very well. It is this understanding that led to
              the setting up of Agaram foundation. Sivakumar has instituted an
              award for toppers in standard X and Xll board exams and some other
              categories. Surya wanted to build on this initiative and broaden
              it.
            </p>
            <p>
              Meanwhile, gnanavel a journalist-activist, had been successfully
              conducting an intervention programme for first generation learners
              in dharmapuri district, one of the most backward areas in
              tamilnadu. He had realized that hand holding the students through
              their often traumatic initiations into higher education was
              essential for ensuring that they completed their studies and
              following up on this he has roped in volunteers from the IT sector
              to act as mentors for these first generation learners. Impressed
              by the success of this model. Surya joined hands with gnanavel,
              and on September 25th 2006 the seeds of agaram foundation were
              sown in Chennai, india. Under the stewardship of the organizations
              founder and trustees, the vision for agaram took shape.
            </p>
          </div>
          <div className="col-sm-6">
            <img
              src={"https://agaram.in/img/therasa.jpg"}
              alt="Phtot of Maother teresa"
              className="img-fluid"
            />
            <h3>
              " Do things for people not because of who they are or what they do
              in return,but because of who you are "
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AfSection;
