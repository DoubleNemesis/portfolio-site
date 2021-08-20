import React from 'react'
import styled from 'styled-components'

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
margin: 0;


@media(max-width: 1025px){
    width: 100%;
            }

`

const IntroContainer = styled.div`

border-top: 2px solid #666;
margin: 3em 0 1em 0;
height: 30px;
width: 69%;
text-align: center;


@media(max-width: 1025px){
    width: 90%;
                }
`

const Intro = styled.h2`
font-size: 1.3rem;
letter-spacing: 1.px;
color: white;
background-color: #333;
font-weight: 200;
z-index: 1;
margin-top: -14px;
width: 32%;
margin-left:auto;
margin-right:auto;
border-radius: .3em;
text-transform: uppercase;

@media(max-width: 1025px){
    margin-top: -11px;
    width: 52%;
                }

`
const Project = styled.div`
width: 69%;
padding-top: 0;

@media(max-width: 1025px){
    width: 90%;
    } 
`

function ProjectBlock({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <IntroContainer>
                <Intro>{restProps.intro}</Intro>
            </IntroContainer>
            <Project>{children}</Project>
        </Container>
    )
}

export default ProjectBlock