import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems,FooterLink,FooterLinkTitle, FooterLinksWrapper } from './footerElements'
import { SocialIcons,SocialLogo, SocialMediaWrap,SocialMedia, SocialIconLink, WebsiteRight} from './footerElements'
import {FaFacebook,FaTwitter,FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
}
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorship</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebok</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>    
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
            <WebsiteRight>dolla © {new Date().getFullYear()} All rigths reserved.</WebsiteRight>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebok'><FaFacebook/></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'><FaYoutube/></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
