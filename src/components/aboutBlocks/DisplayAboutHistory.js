import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
padding: 5em 0;
border-bottom: 2px solid #666;
width: 100%;
@media(max-width: 1025px){
    flex-direction: column;
    align-items: center;
}

h1{
    color: whitesmoke;
}
`
const ProjectText = styled.div`
width: 100%;
background-color: #333;
padding-left: 2em;
padding-top: .7em;
color: whitesmoke;
display: flex;
flex-direction: column;

p, ul{
    font-size: 1.2rem;
    margin: 1em 0em;
    line-height: 1.6;
    letter-spacing: .4px;
}

p a {
    text-decoration: none;
    color: #f2b61f;
}

h4, h5, h2{
    letter-spacing: 1px;
    font-weight: 400;
}

@media(max-width:800px){
    max-width: 85%;
}

`
const Title = styled.div`
margin-bottom: 1em;
color: green;
`




function DisplayAboutHistory({ children, ...restProps }) {
    return (
        <Container><Title><h1>{restProps.title}</h1></Title><ProjectText>{restProps.text}</ProjectText></Container>
    )
}

export default DisplayAboutHistory 