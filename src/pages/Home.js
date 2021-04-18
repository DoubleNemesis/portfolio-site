import React from 'react'
import HomePageBlockBG from '../components/HomePageBlockBG'
import ProjectBlock from '../components/ProjectBlock'
import DisplayProject from '../components/DisplayProject'
import desk from '../images/desk2.jpg'
import tomsclassroom from '../images/tomsclassroom2.png'

const SkillText = (props) => {
    return (
        <div className="skillsIcons">
            <div className="skillsIconsLabels"><img src="https://www.tomsclassroom.com/js.png" alt="" /><span>JavaScript</span></div>
            <div className="skillsIconsLabels"><img src="https://www.tomsclassroom.com/react.png" alt="" /><span>ReactJS</span></div>
            <div className="skillsIconsLabels"><img src="https://www.tomsclassroom.com/html5.png" alt="" /><span>HTML5</span></div>
            <div className="skillsIconsLabels"><img src="https://www.tomsclassroom.com/css3.png" alt="" /><span>CSS3</span></div>
            <div className="skillsIconsLabels"><img src="https://www.tomsclassroom.com/wordpress.png" alt="" /><span>Wordpress</span></div>
        </div>
    )
}
const AboutMe = (props) => {
    return (
        <>

            <div className="aboutMeInner">
                <p>
                    <b>I'm a frontend developer from Exeter, Devon, UK</b>
                    <br />
                    <br />
                    I love turning complex challenges into superfast web applications.
                    I mainly work with ReactJS and JavaScript but I also have a sound knowledge of Wordpress.
                    I’ve been tinkering with websites since 2005 and have spent the pandemic era upping my web development skills.
                    Through my eighteen-year career as a language teacher, I have developed a special interesting educational technology.
                    I have a Masters' degree in Creative Writing and many years' experience creating content both online and offline.
                    When I'm not coding or learning, you can often find me somewhere in the great outdoors or reading a good book.
                    <br />
                    <br />
                    <a href="/about">Read more about me...</a>
                </p>

                <div className="imgHolder"></div>
            </div>

        </>
    )
}


const ProjectText = (props) => {
    return (
        <>
            <h1>{<a href={'http://www.tomsclassroom.com'}>TomsClassroom.com</a>}</h1>
            <p>
                I developed this full-stack ed-tech application to help English language students prepare for their Cambridge and IELTS exams.
                Students can test their knowledge of English collocations and then create an account to save their progress.
                I used Wordpress for the backend and hooked it up with the React frontend via the REST API.
            </p>
            <p>
                The app authenticates users with JWTs and stores user data in a MySQL table accessed via my custom Wordpress hook.
                The front-end communicates with Wordpress by making fetch requests to the REST API and saving the returned JWT in local storage to persist the user (or handling errors where necessary).
                The frontend is built with functional components and makes use of the Context API to share user data to the various components of the app.
                The app is fully-functioning and I'm currently refactoring it.
            </p>
        </>
    )
}

const ProjectImage = (props) => {
    return (
        <img src={tomsclassroom} alt="tomsclassroom.com" />
    )
}


function Home(props) {
    return (
        <>
            <HomePageBlockBG
                leftBlock="<Thomas Chant>"
                leftBlockBlurb="frontend developer"
            >
                <img src={desk} />
            </HomePageBlockBG>
            <ProjectBlock intro="My Skillset">
                <DisplayProject text={<SkillText />} />
            </ProjectBlock>
            <ProjectBlock intro="ABOUT ME">
                <DisplayProject text={<AboutMe />} />
            </ProjectBlock>
            <ProjectBlock intro="MY CURRENT PROJECT">
                <DisplayProject image={<ProjectImage />} text={<ProjectText />} extraClass="tc" />
            </ProjectBlock>
        </>
    )

}
export default Home