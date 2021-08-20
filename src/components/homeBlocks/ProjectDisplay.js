import React from 'react'
import styled from 'styled-components'
import projectData from '../../data/projectData'
import MiniProject from '../../components/portfolioBlocks/MiniProject'
import IntroBar from '../../pageStructure/IntroBar'
import LinkThrough from '../../pageStructure/LinkThrough'

const Container = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;




@media(max-width: 1025px){
    width: 100%;
            }
`
// const Inner = styled.div`
// width: 69%;
// display: flex;
// flex-wrap: wrap;
// justify-content: center;

// @media(max-width: 800px){
//     width: 100%; 
//     padding: 0;
// }
// `



function ProjectDisplay({ children, ...restProps }) {

    let projectsToDisplay = projectData['projects'].map((item) => {
        return <MiniProject
            key={item['key']}
            linkName={<a href={item['projectUrl']} target="_blank">{item['projectName']}</a>}
            projectType={item['projectType']}
            flipSideText={item['flipsSideText']}
            image={<img src={item['imageUrl']} alt={item['flipsSideText']} />}
            githubLink={item['githubLink']}
        />
    })

    return (
        <Container {...restProps}>
            {projectsToDisplay[0]}
            {projectsToDisplay[1]}
            {projectsToDisplay[2]}
        </Container>
    )
}

export default ProjectDisplay