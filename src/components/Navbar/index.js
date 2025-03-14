import React, { useState } from 'react'
import { Nav, NavLink, NavbarContainer, NavItems, MobileIcon, MobileMenu, MobileLink } from './Navbar_style'
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Add a small delay to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink onClick={() => handleNavClick('about')} style={{cursor: 'pointer'}}>About</NavLink>
          <NavLink onClick={() => handleNavClick('skills')} style={{cursor: 'pointer'}}>Skills</NavLink>
          <NavLink onClick={() => handleNavClick('experience')} style={{cursor: 'pointer'}}>Experience</NavLink>
          <NavLink onClick={() => handleNavClick('education')} style={{cursor: 'pointer'}}>Education</NavLink>
          <NavLink onClick={() => handleNavClick('certifications')} style={{cursor: 'pointer'}}>Certifications</NavLink>
          <NavLink as={Link} to='/projects' style={{textDecoration: 'none'}}>Projects</NavLink>
          <NavLink as={Link} to='/blog' style={{textDecoration: 'none'}}>Tech Talk</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink onClick={() => {
              setIsOpen(!isOpen);
              handleNavClick('about');
            }} style={{cursor: 'pointer'}}>About</MobileLink>
            <MobileLink onClick={() => {
              setIsOpen(!isOpen);
              handleNavClick('skills');
            }} style={{cursor: 'pointer'}}>Skills</MobileLink>
            <MobileLink onClick={() => {
              setIsOpen(!isOpen);
              handleNavClick('experience');
            }} style={{cursor: 'pointer'}}>Experience</MobileLink>
            <MobileLink onClick={() => {
              setIsOpen(!isOpen);
              handleNavClick('education');
            }} style={{cursor: 'pointer'}}>Education</MobileLink>
            <MobileLink onClick={() => {
              setIsOpen(!isOpen);
              handleNavClick('certifications');
            }} style={{cursor: 'pointer'}}>Certifications</MobileLink>
            <MobileLink as={Link} to='/projects' onClick={() => {
              setIsOpen(!isOpen);
            }} style={{textDecoration: 'none'}}>Projects</MobileLink>
            <MobileLink as={Link} to='/blog' onClick={() => {
              setIsOpen(!isOpen);
            }} style={{textDecoration: 'none'}}>Tech Talk</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar