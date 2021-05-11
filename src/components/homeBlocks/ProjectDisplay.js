import React from 'react'
import styled from 'styled-components'
import projectData from '../../data/projectData'
import MiniProject from '../../components/portfolioBlocks/MiniProject'
import MainContainer from '../../pageStructure/MainContainer'
import IntroBar from '../../pageStructure/IntroBar'
import LinkThrough from '../../pageStructure/LinkThrough'

const Container = styled.div`
border-top: 2px solid #666;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fafafa;
background-color: #333;
width: 100%;
box-sizing: border-box;
padding-bottom: 5em;
padding-top: 3em;
margin-top: 0em;


@media(max-width: 1025px){
    width: 100%;
            }
`
const Inner = styled.div`
width: 69%;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media(max-width: 800px){
    width: 100%; 
    padding: 0;
}
`



function ProjectDisplay({ children, ...restProps }) {

    let projectsToDisplay = projectData['projects'].map((item) => {
        return <MiniProject
            key={item['key']}
            linkName={<a href={item['projectUrl']} target="_blank">{item['projectName']}</a>}
            projectType={item['projectType']}
            flipSideText={item['flipsSideText']}
            image={<img src={item['imageUrl']} alt={item['imageUrl']} />}
            githubLink={item['githubLink']}
        />
    })

    return (
        <Container {...restProps}>
            <Inner>
            <IntroBar intro={'some recent projects'}></IntroBar>
            {projectsToDisplay[0]}
            {projectsToDisplay[1]}
            {projectsToDisplay[2]}
            </Inner>
            <LinkThrough href="#/portfolio">View Complete Portfolio</LinkThrough>
        </Container>
    )
}

export default ProjectDisplay