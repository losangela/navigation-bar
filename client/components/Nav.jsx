import React from "react";
import NavMain from "./NavMain.jsx";
import NavBreeds from "./NavBreeds.jsx";
import NavFind from "./NavFind.jsx";
import NavResources from "./NavResources.jsx";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navFormBar: 'none'
    };
    this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }


  handleNavFormBar(formName) { // this function changes the condition to which drop down form it'll render to the navigation bar.
    if (this.state.navFormBar === formName){
      this.setState({navFormBar: 'none'})
    } else {
      this.setState({navFormBar: formName})
    }
  }

  render() {
    return (
      <div >
        <div id="nav-bar-frame">
            <NavMain handleNavFormBar={this.handleNavFormBar}/>
            <div id="nav-bar-register">
              <span className="nav-button register">SIGN IN / REGISTER</span>
              <span className="nav-button fake2">.</span>
            </div>
        </div>
          {
          this.state.navFormBar === 'findPet' ? <NavFind /> :
          this.state.navFormBar === 'breeds' ? <NavBreeds /> :
          this.state.navFormBar === 'resources' ? <NavResources /> :
          <div id="blank"></div>}
      </div>
    );
  }
}
export default Nav;