import svg1 from '../../images/svg-1.svg'
import svg2 from '../../images/svg-2.svg'
import svg3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id:'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allow you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get Started',
    img: svg2,
    imgStart: false,
    alt: 'PiggyBank',
    dark: true,
    primary:true,
    darkText:false
}

export const homeObjTwo = {
    id:'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: svg1,
    alt: 'Car',
    dark: false,
    primary:false,
    darkText:true
}

export const homeObjThree = {
    id:'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headLine: 'Creating an account is extremely ease',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start now',
    imgStart: false,
    img: svg3,
    alt: 'Desk',
    dark: false,
    primary:false,
    darkText:true
}