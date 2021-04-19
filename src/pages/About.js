import React from 'react'
import MainContainer from '../pageStructure/MainContainer'
import DisplayAboutTexts from '../components/DisplayAboutTexts'
import DisplayAboutTextOnly from '../components/DisplayAboutTextOnly'
import DisplayHistory from '../components/DisplayHistory'
import IntroBar from '../pageStructure/IntroBar'
import Spacer from '../pageStructure/Spacer'
import AboutMe from '../components/aboutTexts/AboutMe'
import AboutWork from '../components/aboutTexts/AboutWork'
import AboutStudy from '../components/aboutTexts/AboutStudy'
import AboutSoftSkills from '../components/aboutTexts/AboutSoftSkills'
import AboutFuture from '../components/aboutTexts/AboutFuture'
import AboutBackstory from '../components/aboutTexts/AboutBackstory'
import {TomImage, ProjectImageQuiz, ProjectImageFuture, ProjectImageSoftSkills} from '../components/aboutImages/aboutImages.js'

function About() {
    return (
        <>
            <MainContainer>
                <IntroBar intro="About" /> 
                <DisplayAboutTextOnly text={<AboutMe />} image={<TomImage />} />
                <Spacer height="1" />
                <DisplayHistory title="work history" text={<AboutWork />} />
                <Spacer height="1" />
                <DisplayHistory title="study history" text={<AboutStudy />} />
                <Spacer height="1" />
                <DisplayAboutTexts title="the future" text={<AboutFuture />} image={<ProjectImageFuture />} />
                <Spacer height="1" />
                <DisplayAboutTexts title="my tech backstory" text={<AboutBackstory />} image={<ProjectImageQuiz />} />
                <Spacer height="1" />
                <DisplayAboutTexts title="my soft skills" text={<AboutSoftSkills />} image={<ProjectImageSoftSkills />} />
            </MainContainer>
        </>
    )
}

export default About