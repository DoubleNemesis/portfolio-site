import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
padding: 5em 0;

@media(max-width: 1025px){
    flex-direction: column;
    align-items: center;
    padding:0;
}
`
const ProjectText = styled.div`
width: 50%;
border-radius: .2em;
padding-left: 0em;

@media(max-width: 1025px){
    width: 100%;
    }

h1{
    margin: 0 0 0 .8em;
    font-size: 3em;
}

p, ul{
    font-size: 1.4em;
    margin: 1em;
    line-height: 1.6
}

p a {
    text-decoration: none;
    color: #f2b61f;
}
`
const ProjectImage = styled.div`
width: 50%;
border-radius: .2em;
padding-right: 1em;
border: 1px solid black;


@media(max-width: 1025px){
    width: 100%;
    padding-right: 0;
    display: flex;
    justify-content: center;
    }

img{
    max-height: 250px;
    object-fit: contain;
    margin: 1em;

    @media(max-width: 1025px){
        max-height: auto;
        max-width: 100%;
        margin: 0;
            }

}
`
function DisplayAboutLists({ children, ...restProps }) {
    return (
        <Container>
            <ProjectImage>{restProps.image}</ProjectImage>
            <ProjectText><h1>{restProps.title}</h1>{restProps.text}</ProjectText>
        </Container>
    )
}

export default DisplayAboutLists