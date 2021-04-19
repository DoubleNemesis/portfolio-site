import React from 'react'
import MainContainer from '../pageStructure/MainContainer'
import DisplayContact from '../components/contactTexts/DisplayContact'
import ContactDetails from '../components/contactTexts/ContactDetails'
import ContactImage from '../components/contactImages/ContactImage'
import IntroBar from '../pageStructure/IntroBar'
import tom from '../images/tom6.png'

function Contact() {
    return (
        <>
            <MainContainer>
                <IntroBar intro="contact" />
                <DisplayContact title="You can find me everywhere..." text={<ContactDetails
                    twitter='https://www.twitter.com/tpchant'
                    linkedin='https://www.linkedIn.com'
                    github='https://github.com/DoubleNemesis'
                    youtube='https://www.youtube.com/tchant'
                />} image={<ContactImage img={tom} />} />
            </MainContainer>
        </>
    )
}

export default Contact