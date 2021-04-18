import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
padding-bottom: 5em;
border-bottom: 2px solid #666;
@media(max-width: 800px){
    flex-direction: column;
    align-items: center;
}

h1{
    color: whitesmoke;
}
`
const ProjectText = styled.div`
width: 50%;
background-color: #333;
padding-left: 0em;
color: whitesmoke;
display: flex;
flex-direction: column;

p, ul{
    font-size: 1.2rem;
    font-size: 1.28vw;
    margin: 1em 1em 1em 0;
    line-height: 1.6;
    letter-spacing: .4px;
}

@media(max-width: 800px){
    width: 90%;
    p,ul{
        font-size: 1.4rem; 
        margin: 0em 0em 1em 0; 
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
display: flex;
align-items: center;
justify-content: center;

@media(max-width: 800px){
    width: 100%;
    padding-right: 0;
    justify-content: center;
    }

img{
    width: 90%;
    object-fit: contain;
    margin: 1em 1em 1em 1em;


@media(max-width: 800px){
    max-height: auto;
    max-width: 90%;
    margin: 2em 1em;
        }
}
`




function DisplayAboutTextOnly({ children, ...restProps }) {
    return (
        <Container><ProjectText>{restProps.text}</ProjectText><ProjectImage>{restProps.image}</ProjectImage></Container>
    
    )
}

export default DisplayAboutTextOnly