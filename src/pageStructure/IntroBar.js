import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center; 
align-items: center;
background-color: #fafafa;
background-color: #333;
width: 100%;
box-sizing: border-box;
margin-top: 0em;



@media(max-width: 1025px){
    width: 100%;
            }

`
//border: 2px solid red;
const IntroContainer = styled.div`

border-top: 2px solid #666;
margin: 3em 0 1em 0;
height: 30px;
width: 69%;
width: 100%;
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



function IntroBar({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <IntroContainer>
                <Intro>{restProps.intro}</Intro>
            </IntroContainer>
        </Container>
    )
}

export default IntroBar