import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import FooterSvg from "./FooterSvg";
import "./Footer.scss"

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
    const windowWidth = that.innerWidth;
    if (windowWidth <= 1024) {
      if (FooterOffset <= 1000) {
        this.setState({
          scrollToFooter: true
        });
      } else {
        this.setState({
          scrollToFooter: false
        });
      }
    } else {
      if (FooterOffset <= 570) {
        this.setState({
          scrollToFooter: true
        });
      } else {
        this.setState({
          scrollToFooter: false
        });
      }
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
          <h3>
          <a href="mailto:kanagawa.risa@gmail.com?Subject=Hello" target="_top">kanagawa.risa@gmail.com</a>
            </h3>
            <AnchorLink href='#top'  className='top-btn' ><span>↑ TOP</span></AnchorLink>

        </div>
      </div>
    );
  }
}

export default Footer;
