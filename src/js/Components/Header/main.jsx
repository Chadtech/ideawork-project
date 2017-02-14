import React, { Component } from 'react';

import { mobileClass } from '../util.jsx';


export class Header extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){

    const mobile = mobileClass(this.props);

    return (
      <div className={mobile("header")}>
        <span className={mobile("vertical-align-helper")}/>
        <img
          className={mobile("logo")} 
          src="images/logo.svg"
        />
        <img
          className={mobile("header-hamburger last")} 
          src="images/hamburger.png" 
        />
        <div className={mobile("header-text")}>
          LOGIN
        </div>
        <div className={mobile("header-text")}>
          215.555.5555
        </div>
      </div>
    );
  }
}

