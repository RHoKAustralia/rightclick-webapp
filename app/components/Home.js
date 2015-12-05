import React from 'react';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';
import LessonsTable from './LessonsTable';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lessons: [{hello: 'world'}]};
  }
  render() {
    return (
      <div>
        <div className="header">
          <Navbar className="navbar-static-top">
            <NavBrand><a href="/"></a>RightClick Admin</NavBrand>
            <Nav>
              <NavItem eventKey={1} href="#">Dashboard</NavItem>
              <NavItem eventKey={2} href="#">Lesson History</NavItem>
            </Nav>
          </Navbar>
          <LessonsTable lessons={this.state.lessons}/>
        </div>
      </div>
    );
  }

  _handleTouchTap() {
    //this.refs.superSecretPasswordDialog.show();
  }
}

export default Home;
