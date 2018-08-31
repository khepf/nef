import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nick Erdy Foundation</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem className="NavItem">
                <NavLink to="/" className="NavLink" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink to="/about" className="NavLink" tag={Link}>
                  About
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink to="/benefit" className="NavLink" tag={Link}>
                  Benefit
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink to="/golf" className="NavLink" tag={Link}>
                  Golf Outing
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink to="/contact" className="NavLink" tag={Link}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink to="/donate" className="NavLink" tag={Link}>
                  Donate
                </NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}