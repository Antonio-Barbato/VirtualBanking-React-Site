import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>Sign Up for a new Account today and receive $250 in credit towards your next payment.</HeroP>
            <HeroBtnWrapper>
                <Button 
                to='signup' 
                onMouseLeave={onHover} 
                onMouseEnter={onHover} 
                primary='true' 
                dark='true' 
                smooth={true} 
                duration={500} 
                exact='true' 
                offset={-80} 
                spy={true} >
                Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
