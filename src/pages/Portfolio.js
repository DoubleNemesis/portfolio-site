import React from 'react'
import MainContainer from '../pageStructure/MainContainer'
import MiniProject from '../components/portfolioBlocks/MiniProject'
import IntroBar from '../pageStructure/IntroBar'
import projectData from '../data/projectData'

function Portfolio(props) {

    let projectsToDisplay = projectData['projects'].map((item)=>{
        return <MiniProject 
        key={item['key']} 
        linkName={<a href={item['projectUrl']} target="_blank">{item['projectName']}</a>} 
        projectType = {item['projectType']} 
        flipSideText={item['flipsSideText']} 
        image={<img src={item['imageUrl']} alt={item['imageUrl']}/>} 
        githubLink={item['githubLink']}
        />
    })

    return (
        <>
            <MainContainer>
                <IntroBar intro="a selection of my projects"/>
                {projectsToDisplay}
            </MainContainer>
        </>
    )
}

export default Portfolio