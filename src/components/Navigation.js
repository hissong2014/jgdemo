import React, { Component } from 'react';
import './Navigation.scss';
import Hamburger from './Hamburger.js';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Navigation extends Component {

  constructor(props) {
      super(props);

      this.state = {
          navigation : [
            {key:1, navTitle:"Services", navURL:"services"},
            {key:2, navTitle:"certifications", navURL:"certifications"},
            {key:3, navTitle:"About Us", navURL:"about-us"},
            {key:4, navTitle:"Contact Us", navURL:"contact-us"},
          ],
          scrolled:false,
          isMenuActive:false
        }
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentDidMount(){

    window.addEventListener('scroll', () =>{
      const isTop = window.scrollY < 103;
      if(isTop !== true){
        this.setState({scrolled:true});
      }
      else{
        this.setState({scrolled:false});
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  menuClicked(){
    this.setState({isMenuActive:!this.state.isMenuActive})
  }

  render() {
    return (
      <div className={this.state.scrolled ? 'navigation-container scrolled' : 'navigation-container'}>

        <div className="main-container">
          <a onClick={this.scrollToTop}>
            <img
              src="images/logo/jg-logo-website.png"
              height="110"
              alt="J&G Demolition"
              className={this.state.scrolled ? 'logo-min logo' : 'logo'}
            />
          </a>
          <div className="show-hamburger" onClick={this.menuClicked.bind(this)}>
            <Hamburger/>
          </div>

          <ul className={this.state.isMenuActive? 'show-menu': 'hide-menu'}>
            {
              this.state.navigation.map(
                navigation =>
                <li key={navigation.key}><Link
                duration={500}
                smooth={true}
                className="menu-link" to={navigation.navURL}>{navigation.navTitle}</Link></li>
              )
            }
          </ul>


          <div className="clear"></div>
          </div>
        </div>


    );
  }

}

export default Navigation;
