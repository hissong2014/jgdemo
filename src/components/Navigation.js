import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component {

  constructor(props) {
      super(props);

      this.state = {
          navigation : [
            {key:1, navTitle:"Services", navURL:"#services"},
            {key:2, navTitle:"certifications", navURL:"#certifications"},
            {key:3, navTitle:"About Us", navURL:"#about-us"},
            {key:4, navTitle:"Contact Us", navURL:"#contact-us"},
          ],
          scrolled:false
        }
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

  render() {
    return (
      <div className={this.state.scrolled ? 'navigation-container scrolled' : 'navigation-container'}>

        <div className="main-container">
          <img src="images/logo/jg-logo-website.png" height="110" alt="J&G Demolition" className={this.state.scrolled ? 'logo-min logo' : 'logo'}/>

          <ul>
            {
              this.state.navigation.map(
                navigation =>
                <li key={navigation.key}><a href={navigation.navURL}>{navigation.navTitle}</a></li>
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
