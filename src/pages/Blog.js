import React from 'react'
import styled from 'styled-components'
import MainContainer from '../components/MainContainer'
import IntroBar from '../components/IntroBar'
import blogData from '../data/blogData'
import Spacer from '../components/Spacer'

const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
width: 100%;

@media(max-width: 800px){
    flex-direction: column;
    align-items: center;
}
`
const VideoTitle = styled.h2` 
font-size: 1.2rem; 
color: #999;
`
const StyledMediaItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-top: none;
border-radius: .2em;
width: 30em;
margin: 1em;

iframe{
    width: 100%;
    height: 250px; 
}
`



const vlogItems = blogData['entries'].map((item) => {

    const srcToAdd = `https://www.youtube.com/embed/${item.embedCode}`


    return (
        <>
            <StyledMediaItem key={item.key}>
                <VideoTitle>{item.name}</VideoTitle>
                <iframe src={srcToAdd} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </StyledMediaItem>
        </>
    )
})

function Blog() {
    return (
        <>
            <MainContainer>
                <IntroBar intro="YouTube Videos" />
                <Container>
                    {vlogItems}
                </Container>
                <Spacer height="250" />
            </MainContainer>
        </>
    )
}

export default Blog