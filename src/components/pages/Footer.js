import React from "react";

import Github from "../../../public/img/icons/github.svg";
import LinkedIn from "../../../public/img/icons/linkedin.svg";
import Insta from "../../../public/img/icons/instagram.svg";
// import FooterSvg from '../../../public/img/icons/footer.svg'
import FooterSvg from "./FooterSvg";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollToFooter: false
    };
    this.footeref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const that = window;
    const FooterOffset = that.footer.getBoundingClientRect().top;
    if (FooterOffset <= 430) {
      this.setState({
        scrollToFooter: true
      });
    } else {
      this.setState({
        scrollToFooter: false
      });
    }
  };

  render() {
    return (
      <div
        id="footer"
        className="footer"
        onScroll={this.handleScroll}
        refs={this.footeref}
      >
        <div className="contact-section">
          <h2 className={this.state.scrollToFooter ? "footer-title" : null}>
            <FooterSvg />
          </h2>
          <h3>kanagawa.risa@gmail.com</h3>
        </div>
      </div>
    );
  }
}

export default Footer;
