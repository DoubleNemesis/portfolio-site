import React from 'react'
import HomePageBlock from '../components/homeBlocks/HomePageBlock'
import ProjectBlock from '../components/homeBlocks/ProjectBlock'
import ProjectDisplay from '../components/homeBlocks/ProjectDisplay'
import DisplayProject from '../components/homeBlocks/DisplayProject'
import desk from '../images/desk2.jpg'
import tomsclassroom from '../images/tomsclassroom2.png'
import SkillText from '../components/homeTexts/SkillText'
import AboutMe from '../components/homeTexts/AboutMe'
import ProjectText from '../components/homeTexts/ProjectText'
import ProjectImage from '../components/homeImages/ProjectImage'
import LinkThrough from '../pageStructure/LinkThrough'

function Home(props) {
    return (
        <>
            <HomePageBlock blockHeadline="<Thomas Chant>" blockBlurb="frontend developer">
                <img src={desk} alt="header image of desk" alt="Thomas Chant Frontend Developer" />
            </HomePageBlock>

            <ProjectBlock intro="My Skillset">
                <DisplayProject>
                    <SkillText />
                </DisplayProject>
            </ProjectBlock>

            <ProjectBlock intro="MY CURRENT PROJECT">
                <DisplayProject>
                    <ProjectImage image={tomsclassroom} altText="main project - Tom's Classroom Collocation Checker" />
                    <ProjectText />
                </DisplayProject>
            </ProjectBlock>

            <ProjectBlock intro="some recent projects">
            <ProjectDisplay />

            <LinkThrough href="#/portfolio">View Complete Portfolio</LinkThrough>
            </ProjectBlock>


            <ProjectBlock intro="ABOUT ME">
                <AboutMe />
                <LinkThrough href="#/about">Read More About Me</LinkThrough>
            </ProjectBlock>

        </>
    )
}
export default Home