import React from 'react'
import styled from 'styled-components'
import projectData from '../../data/projectData'
import MiniProject from '../../components/portfolioBlocks/MiniProject'

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
function ProjectDisplay({ children, ...restProps }) {

    let projectsToDisplay = projectData['projects'].map((item) => {
        return <MiniProject
            key={item['key']}
            linkName={<a href={item['projectUrl']} target="_blank" rel="noreferrer">{item['projectName']}</a>}
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