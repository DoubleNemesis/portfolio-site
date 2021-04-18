import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content: center;
z-index: -1;
height: auto;
background-color: #333;
`

const SmallBlock = styled.div`
width: 23%;
position: absolute;
height: 20em;
margin-top: 2em;
top: 10em;
text-align: center;
z-index: 1;

@media(max-width: 1025px){
    width: 23%;
    top: 10em;
            }

:first-child{
    left: 18%;  
    @media(max-width: 1025px){
left: 6%
        }
}
:last-child{
    right: 18%;   
    @media(max-width: 1025px){
        right: 6%
                }
}

h1{
    color: white;
    font-size: 5rem;
    margin-bottom: 0;
    text-align: center;

    @media(max-width: 1025px){
        font-size: 2rem;
                }
}

h4{
margin-top: 0;
text-align: center;
font-size: 2.2rem;
color: whitesmoke;
font-weight: 100;
@media(max-width: 1025px){
    font-size: 1rem;
            }
}
`

const StyledInner = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
height: auto;
margin-top: 0em;
background-color: #333;


img{
    width: 100%;
    height: 500px;
    object-fit: none;
    object-position: center right;

    @media(max-width: 1025px){
        width: 100%;
        object-fit: cover;
        object-position: top center;
                }
}

@media(max-width:820px){
    width: auto;
    margin-top: 6vw;


}
`


function HomePageBlock({ children, ...restProps }) {
    return (
        <Container>
            <SmallBlock><h1>{restProps.leftBlock}</h1><h4>{restProps.leftBlockBlurb}</h4></SmallBlock>
            <StyledInner {...restProps}>{children}</StyledInner>
            <SmallBlock><h1>{restProps.rightBlock}</h1><h4>{restProps.rightBlockBlurb}</h4></SmallBlock>
        </Container>
    )
}

export default HomePageBlock