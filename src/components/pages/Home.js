import React from "react";
import TypeIt from "typeit";

class Home extends React.Component {
  componentDidMount() {
    this.Typeit();
  }
  Typeit() {
    new TypeIt("#ele", {
      strings: ["Hello!", "Ahoj!", "Hallo!", "Konnichiwa!", "Hello."],
      speed: 150,
      breakLines: false,
      waitUntilVisible: true
    }).go();
  }
  render() {
    return (
      <div className='home'>
        <div className="title">
          <span id="ele" />
          <p>Front-End Engineer currently based in beautiful Fukuoka, Japan.</p>
        </div>
        <a href="#"><span></span>scroll</a>
        <div className="home-wrapper">
          < span />
          <span />
        </div>
      </div>
    );
  }
}

export default Home;
