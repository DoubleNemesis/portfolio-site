import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'


const blendOut = keyframes`
    from {opacity: 1;}
    to {opacity: 0;}
    from {top: 2.8em;}
    to {top: -500px;}
`

const blendIn = keyframes`
from {opacity: 0;}
to {opacity: 1);}
from {top: -500px;}
to {top: 2.8em;}
`
const rotateOpen = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(90deg));}
`
const rotateClose = keyframes`
from {transform: rotate(90deg);}
to {transform: rotate(0deg));}
`
const Container = styled.div`
z-index: 1;
display:flex;
align-items: center;
justify-content: center;
background-color: transparent;
`
const StyledHeader = styled.div`
z-index: 10;
display: flex;
align-items: center;
justify-content: space-between;
width: 69%;
height: 3.8em;
background-color: white;
color: black;

@media(max-width:1025px){
    justify-content: space-between;
    height: 5rem;
    width: 100%;
}

`

const StyledDivInner = styled.div`
display: flex;
width: auto;
`

const StyledNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-size: 1.1rem;
margin-right: 5vw;
letter-spacing: 2px;

span, a{
    margin: 0 10px 0 10px;
    color: black;
    text-decoration: none;
}
span:hover, a:hover{
    color: #0066b2;
    text-decoration: overline;
}

@media(max-width:1025px){
    position: absolute;
    visibility: ${({ canShowNav }) => !canShowNav ? 'hidden' : 'visible'};
    left: 0;
    margin-top: 2rem;
    background-color: #333;
    flex-direction: column;
    border-radius: 0px;
    width: 100%;
    padding: 0em 0 3em 0;
    animation: ${({ isShownNav }) => !isShownNav ? blendOut : blendIn} .5s linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    align-items: unset;
    font-size: 1.4rem;
    z-index: -20;
    

    span, a{
        margin: 0px 30px 0px 30px;
        padding: 20px 0;
        text-align: center;
        color: white;
    }
    span{
        border-bottom: 1px solid #999;
    }

}
`

const StyledMobileNav = styled.div`
display: none;

@media(max-width:1025px){
    display: inline;
    margin-right: 6vw;
    font-size: 2.5rem;
    font-weight: 400;
    transform: ${({ isShownNav })=> isShownNav ? `rotate(0deg)` : `rotate(90deg)`};
    transition: .5s;
    cursor: pointer;
    letter-spacing: -2px; 
}

@media(max-width:600px){
    letter-spacing: 2px; 

}
`

const StyledSocMedia = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-around;
font-size: 1.8em;

i{
    margin: 0 10px 0 10px;
}

a{
    color: black;
}
a:hover{
    color: #0066b2;
}

@media(max-width:1025px){
    font-size: 2.4rem;
    color: white;
}
@media(max-width:1025px){
    display: flex;
    visibility: ${({ isShownNav }) => !isShownNav ? 'hidden' : 'visible'};
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 31.9rem;
    width: 50%;
    a{
        color: white;
    }
}
`
const StyledLogo2 = styled.div`

width: 3.8em;

img{
    width: 3.8em;
    display: flex;
    margin-top: 0px;
}

img:hover{
    width: 3.8em;
}

@media(max-width:1025px){
    margin-left: 3vw;
    z-index:100;
img{
    width: 65px;
}
img:hover{
    width: 65px;
}

}

`

function Header({ children, ...restProps }) {

    const [isShownNav, setIsShownNav] = useState(false)
    const [canShowNav, setCanShowNav] = useState(false)

    function handleMenuToggle() {
        setCanShowNav(true)
        setIsShownNav(!isShownNav)
    }

    return (
        <>
            <Container {...restProps}>
                <StyledHeader>
                    <StyledLogo2>
                        <Link to={restProps.to}><img src={restProps.logo} alt="home"/></Link>
                    </StyledLogo2>
                    <StyledDivInner>
                        <StyledNav isShownNav={isShownNav} canShowNav={canShowNav} aria-label="navigation menu" onClick={handleMenuToggle} >{children}</StyledNav>
                        <StyledSocMedia isShownNav={isShownNav}>
                            <a href={restProps.twitter}><i className="fab fa-twitter" aria-label="twitter link"></i></a>
                            <a href={restProps.linkedin}><i className="fab fa-linkedin" aria-label="linked in link"></i></a>
                            <a href={restProps.github}><i className="fab fa-github" aria-label="guthub link"></i></a>
                            <a href={restProps.youtube}><i className="fab fa-youtube" aria-label="youtube link"></i></a>
                            <a href={`mailto:${restProps.email}`}><i className="fa fa-envelope" aria-label="email link"></i></a>
                        </StyledSocMedia>
                    </StyledDivInner>
                    <StyledMobileNav onClick={handleMenuToggle} isShownNav={isShownNav} aria-label="menu toggle mobile">|||</StyledMobileNav>
                </StyledHeader>
            </Container>
        </>
    )
}

export default Header