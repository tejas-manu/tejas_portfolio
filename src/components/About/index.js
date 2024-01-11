import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './About_style'
import HeroImg from '../../images/HeroImage.jpg'
import { Bio } from '../../data/constants';

const About = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                    <Img src={HeroImg} alt="hero-image" />
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                    <Title>Hello, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                {Bio.roles.map((role, index) => (
                                <p key={index}>{role}</p>
                                ))}
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        {/* <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton> */}
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default About