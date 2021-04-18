import React from 'react'
import MainContainer from '../components/MainContainer'
import DisplayAboutTexts from '../components/DisplayAboutTexts'
import DisplayAboutTextOnly from '../components/DisplayAboutTextOnly'
import DisplayHistory from '../components/DisplayHistory'
import IntroBar from '../components/IntroBar'
import Spacer from '../components/Spacer'
import tombg from '../images/tombg.png'
import tomsclassroomQuiz from '../images/tomsclassroom2Quiz.png'
import future from '../images/future.jpg'
import trees from '../images/trees.jpg'

const TomImage = (props) => {
    return (
        <img src={tombg} alt="Thomas Chant" />
    )
}

const ProjectImageQuiz = (props) => {
    return (
        <img src={tomsclassroomQuiz} alt="tomsclassroom.com/quiz" />
    )
}
const ProjectImageFuture = (props) => {
    // https://unsplash.com/@drew_beamer credit
    return (
        <img src={future} alt="the future" />
    )
}
const ProjectImageSoftSkills = (props) => {

    return (
        <img src={trees} alt="soft skills" />
    )
}

const AboutMe = (props) => {
    return (
        <p>
            <p>
                I’m a front-end developer based in Devon in the Southwest of the UK and a recent graduate of the Scrimba Frontend Career Path.
            </p>
            <p>
            I create clean, readable code and enjoy refactoring old projects to make them DRY-er and more colleague-friendly.            </p>
            <p>
                Here's a picture of me trying to smile without looking creepy.
            </p>
            <p>
                Please read on for details of my work and study history.
            </p>
        </p>
    )
}

const AboutWork = () => {
    return (
        <>
            <div>
                <h4>2020 – present</h4>
                <h2>Web-developer @ Exeter English Online (online language school)</h2>
                <h5>Tasks include:</h5>
                <ul>
                    <li>Using Javascript and <b>CSS</b> to add a filter to the staff profiles to enable clients to view prospective teachers by speciality.</li>
                    <li>Using HTML and PHP to customize Wordpress themes and templates to display staff profiles.</li>
                    <li>Creating custom mySQL tables to hold staff data and writing a PHP script to display that data on the front-end.</li>
                    <li>Debugging major responsiveness issues.</li>
                </ul>
            </div>
            <div>
                <h4>2015 – present</h4>
                <h2>Web-developer @ Devon and Exeter Institution (historical studies library)</h2>
                <h5>Tasks include:</h5>
                <ul>
                    <li>Customising Wordpress theme to improve header layout</li>
                    <li>Improving responsiveness of various page elements with CSS</li>
                    <li>Troubleshooting Advanced Custom Fields issues</li>
                    <li>Troubleshooting plugin conflicts</li>
                    <li>Not responsible for current design of site</li>
                </ul>
            </div>
            <div>
                <h4>2002 – 2020</h4>
                <h2>ESL Teacher @ Globe English LTD</h2>
            </div>
        </>
    )
}

const AboutStudy = () => {
    return (
        <>
            <div>
                <h4>2020 – present</h4>
                <h2>Scrimba Frontend Developer Career Path (and other courses)</h2>
                <h5>Overview of topics covered</h5>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS (including Flexbox and Grid)</li>
                    <li>UX Design</li>
                    <li>ReactJS Basics</li>
                    <li>Advanced ReactJS</li>
                    <li>Reusable ReactJS</li>
                    <li>Responsive Design</li>
                    <li>Working with APIs</li>
                    <li>Pacman, snake, Netflix clone projects</li>
                </ul>
            </div>
            <div>
                <h4>Spring 2020</h4>
                <h2>CodeCademy</h2>
                <h5>Overview of topics covered</h5>
                <ul>
                    <li>asynchronous JavaScript</li>
                    <li>Node-SQLlite</li>
                </ul>
            </div>
            <div>
                <h4>2017-2019</h4>
                <h2>FreeCodeCamp</h2>
                <h5>Overview of topics covered</h5>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Hundreds of algorithm challenges and projects</li>
                </ul>
            </div>
            <div>
                <h4>2004-5</h4>
                <h2>MA Creative Writing @ The University of Plymouth</h2>
            </div>
            <div>
                <h4>2001</h4>
                <h2>CELTA @ Studio School, Cambridge</h2>
            </div>
            <div>
                <h4>1996-9</h4>
                <h2>BSc Geography @ University of Southampton</h2>
            </div>
        </>
    )
}


const AboutSoftSkills = (props) => {
    return (
        <>
            <p>
                As well as being a qualified English teacher, I have a Masters’ degree in Creating Writing and have spent many happy hours creating teaching resources and writing exams, as well as other written-word projects both on and offline.
                As a colleague, I’m known as a peace-maker and negotiator. Work-place happiness is extremely important to me and the well-being of my colleagues is paramount as we take on the pressures of work together.

                </p>
        </>
    )
}

const AboutFuture = (props) => {
    return (
        <p>
            <p>
                I’m always learning. Wtih JavaScript and React, there will always be something new in the pipeline and new coding patterns.
                I’m also learning the ropes of Gatsby and expanding my back-end knowledge with PHP (with a special focus on Wordpress) and NodeJS.
        </p>
            <p>
                For styling, I’ve stuck to vanilla CSS. Frameworks come and go and I believe it’s best to know what’s going on under the hood.
                That said, I will probably add a CSS framework to my skillset in the near future.
    </p>
        </p>
    )
}
const AboutBackstory = (props) => {
    return (
        <p>
            Back in the early days, I built sites in flat HTML. As time went on, I learned the basics of CSS, some PHP, and eventually JavaScript. For a time I ran a successful and profitable health blog based on Wordpress. Whilst working as a teacher I built several apps to help my colleagues and students including a full-stack version of the game Jeopardy with a language-teaching twist.
        </p>
    )
}

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