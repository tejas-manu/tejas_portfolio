import {FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcon, SocialMediaIcons, Copyright} from "./Footer_style";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';


function Footer() {
    return (
      <FooterContainer>
        <FooterWrapper>
          <Logo>Tejas Manu Srinivasan</Logo>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href={Bio.blog}>Blog</NavLink>
          </Nav>
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
          </SocialMediaIcons>
          <Copyright>
            &copy; 2025 Tejas Manu Srinivasan. All rights reserved.
          </Copyright>
  
        </FooterWrapper>
      </FooterContainer>
    );
  }
  
  export default Footer;
