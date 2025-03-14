import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcon, SocialMediaIcons, Copyright } from "./Footer_style";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const Footer = () => {
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
    <FooterContainer>
      <FooterWrapper>
        <Logo>Tejas Manu Srinivasan</Logo>
        <Nav>
          <NavLink onClick={() => handleNavClick('about')} style={{cursor: 'pointer'}}>About</NavLink>
          <NavLink onClick={() => handleNavClick('skills')} style={{cursor: 'pointer'}}>Skills</NavLink>
          <NavLink onClick={() => handleNavClick('experience')} style={{cursor: 'pointer'}}>Experience</NavLink>
          <NavLink onClick={() => handleNavClick('education')} style={{cursor: 'pointer'}}>Education</NavLink>
          <NavLink onClick={() => handleNavClick('certifications')} style={{cursor: 'pointer'}}>Certifications</NavLink>
          <NavLink as={Link} to='/projects' style={{textDecoration: 'none'}}>Projects</NavLink>
          <NavLink as={Link} to='/blog' style={{textDecoration: 'none'}}>Tech Talk</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          © {new Date().getFullYear()} Tejas Manu Srinivasan. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer