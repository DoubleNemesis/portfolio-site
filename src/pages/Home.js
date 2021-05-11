import React from 'react'
import HomePageBlock from '../components/homeBlocks/HomePageBlock'
import ProjectBlock from '../components/homeBlocks/ProjectBlock'
import DisplayProject from '../components/homeBlocks/DisplayProject'
import desk from '../images/desk2.jpg'
import tomsclassroom from '../images/tomsclassroom2.png'
import SkillText from '../components/homeTexts/SkillText'
import AboutMe from '../components/homeTexts/AboutMe'
import ProjectText from '../components/homeTexts/ProjectText'
import ProjectImage from '../components/homeImages/ProjectImage'

function Home(props) {
    return (
        <>
            <HomePageBlock blockHeadline="<Thomas Chant>" blockBlurb="frontend developer">
                <img src={desk} alt="Thomas Chant Frontend Developer"/>
            </HomePageBlock>
            <ProjectBlock intro="My Skillset">
                <DisplayProject text={<SkillText />} />
            </ProjectBlock>
            <ProjectBlock intro="ABOUT ME">
                <DisplayProject text={<AboutMe />} />
            </ProjectBlock>
            <ProjectBlock intro="MY CURRENT PROJECT">
                <DisplayProject image={<ProjectImage img={tomsclassroom} />} text={<ProjectText />} extraClass="largeProject" />
            </ProjectBlock>
        </>
    )
}
export default Home