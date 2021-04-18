import React from 'react'
import MainContainer from '../components/MainContainer'
import DisplayContact from '../components/DisplayContact'
import IntroBar from '../components/IntroBar'
import tom from '../images/tom6.png'

const ProjectImage = (props) => { 
    return (
        <img src={tom} alt="Tom" />
    )
}

const ContactMe = (props) => {
    return (
<>
        <a href={props.twitter}><i className="fab fa-twitter blue"></i><span>follow me on twitter</span></a>
        <a href={props.linkedin}><i className="fab fa-linkedin"></i><span>connect on LinkedIn</span></a>
        <a href={props.github}><i className="fab fa-github"></i><span>find me on Github</span></a>
        <a href={props.youtube}><i className="fab fa-youtube"></i><span>watch my videos</span></a>
        <a href={props.youtube}><i className="fa fa-envelope"></i><span>email me</span></a>
</>

    )
}


function Contact() {
    return (
        <> 
            <MainContainer>
            <IntroBar intro="contact"/>
                <DisplayContact title="You can find me everywhere..." text={<ContactMe
                          twitter='https://www.twitter.com/tpchant'
                          linkedin='https://www.linkedIn.com'
                          github='https://github.com/DoubleNemesis'
                          youtube='https://www.youtube.com/tchant'
                />} image={<ProjectImage/>}/>
            </MainContainer> 
        </>
    )
}

export default Contact