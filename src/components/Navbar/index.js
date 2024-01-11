import React from 'react'
import { Nav, NavLink, NavbarContainer, NavItems, MobileIcon, MobileMenu, MobileLink } from './Navbar_style'
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#certificate'>Certificate</NavLink>
          {/* <NavLink href='#blog'>Blog</NavLink> */}
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#certificate' onClick={() => {
              setIsOpen(!isOpen)
            }}>Certificate</MobileLink>
            {/* <MobileLink href='#blog' onClick={() => {
              setIsOpen(!isOpen)
            }}>Blog</MobileLink> */}
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar