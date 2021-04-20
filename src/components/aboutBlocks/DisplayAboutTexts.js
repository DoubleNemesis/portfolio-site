import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
padding: 5em 0;
border-bottom: 2px solid #666;

@media(max-width: 1025px){
    flex-direction: column;
    align-items: center;
}
`
const ProjectText = styled.div`
width: 50%;
background-color: #333;
padding: 0 2em 0 0;
color: white;

@media(max-width: 1025px){
width: 100%;
}
@media(max-width: 800px){
width: 90%;

}

p, ul{
    font-size: 1.2rem;
    line-height: 1.6;
    letter-spacing: .4px;
}

@media(max-width:800px){
    p, ul{
    padding: 0 .5em 0 .5em;
    }
}

p a {
    text-decoration: none;
    color: #f2b61f;
}
`
const ProjectImage = styled.div`
width: 50%;
background-color: #333;
padding-right: 1em;
display: flex;
align-items: center;

@media(max-width: 1025px){
    width: 100%;
    padding-right: 0;
    justify-content: center;
    }

img{
    max-width: 100%;
    object-fit: contain;
    margin: 1em;
    border: none;

@media(max-width: 1025px){
    max-height: auto;
    width: 90%;
    margin: 2em 1em;
        }
}
`
const Title = styled.div`
margin-bottom: 1em;
h1{
    font-size: 2rem;
    color: whitesmoke;
}

@media(max-width:800px){
    margin-bottom: 2em;
}
`
function DisplayAboutTexts({ children, ...restProps }) {
    return (
        <Container>
            <Title>
                <h1>{restProps.title}</h1>
            </Title>
            <ProjectText>{restProps.text}</ProjectText>
            <ProjectImage>{restProps.image}</ProjectImage>
        </Container>
    )
}

export default DisplayAboutTexts