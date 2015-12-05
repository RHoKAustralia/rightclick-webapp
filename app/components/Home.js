import React from 'react';
import { Jumbotron, Button, Navbar, NavBrand, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Well } from 'react-bootstrap';

class Home extends React.Component {
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
        </div>
      </div>
    );
  }

  _handleTouchTap() {
    //this.refs.superSecretPasswordDialog.show();
  }
}

export default Home;
