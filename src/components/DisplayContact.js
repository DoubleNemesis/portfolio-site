import React from 'react'
import styled from 'styled-components'
import Spacer from '../components/Spacer'

const Container = styled.div`
display:flex;
flex-direction: row;
background-color: whitesmoke;
color: black;
border-radius:.2em;


@media(max-width: 1325px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
            }
`

const StyledSocMedia = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
font-size: 2.3rem;

i{
    margin-left: 0;
    width: 1.4em;
}

span{
    margin-left: 1em;
    font-size: 2rem;
}

.fa-twitter{
    color: #55acee;
}

.fa-linkedin{
    color: #0072b1;
}

.fa-youtube{
    color: #FF0000;
}

.fa-envelope{
    color: #666;
}

a{
    color: #333;
    :hover{
        color: #0066b2; 
    }
}

i:hover {
    color: #0066b2;
}
`
const ContactText = styled.div`
width: 50%;
margin: 1em 1em 1em 3em;
font-size: 1.4rem;
line-height: 1.6;
color: black;

a {
    text-decoration: none;
    color: black;

    :hover{
        text-decoration: underline; 
    }
}

@media(max-width: 1025px){
    width: 90%;
    background-color: whitesmoke;
    border:none;
    margin-top: 0em;
            }
`
const ContactImage = styled.div`
display: flex;
width: 50%;
border-radius: .2em;
justify-content: center;
align-items: flex-end;

img{
    max-width: 100%;
    object-fit: contain;
    margin-top: 1em;

    @media(max-width: 1025px){
        max-height: auto;
        max-width: 100%;
        border-left: none;
        margin: 0;
                }
}

@media(max-width: 1025px){
    width: 90%;
    padding: 5% 0px;
    display: flex;
    justify-content: baseline;
    align-items: center;
    background-color: whitesmoke;
    border: 1px solid lightgrey;
    border: none;
    border-radius: unset;
    }
` 
const Title = styled.h1`
    color: #333;
    font-size: 1.3rem;
    padding-top:none;
    padding-bottom:none;
`


function DisplayContact({ children, ...restProps }) {
    return (
        <>
            <Container>
                <ContactText>
                    <Title>{restProps.title}</Title>
                    <StyledSocMedia>
                        {restProps.text}
                    </StyledSocMedia>
                </ContactText>
                <ContactImage>
                    {restProps.image}
                </ContactImage>
            </Container>
            <Spacer height="250" />
        </>
    )
}



export default DisplayContact