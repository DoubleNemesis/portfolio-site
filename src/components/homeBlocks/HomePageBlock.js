import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
z-index: -1;
height: auto;
background-color: #333;
`

const InnerBlock = styled.div`
width: 67%;
position: absolute;
height: 20em;
margin-top: 2em;
top: 10em;
text-align: center;
z-index: 1;

@media(max-width: 1025px){
    width: 100%;
    top: 11em;
}


h1{
    color: white;
    font-size: 4rem;
    margin-bottom: 2rem;
    text-align: center;


    @media(max-width: 1025px){
        font-size: 4rem;
                }
    @media(max-width: 599px){
        font-size: 3rem;
                }
                

}

.typewriter h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid transparent; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: .8em auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .1em; /* Adjust as needed */
    animation: 
      typing 4s steps(60, end),
      blink-caret .75s step-end 3;
  }
  
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: white; }
  }

h4{
margin: 0;
padding: 0;
width: 0;
text-align: center;
font-size: 2.2rem;
color: whitesmoke;
font-weight: 100;
@media(max-width: 1025px){
    font-size: 1.7rem;
            }
}

.typewriter h4 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid transparent; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 1.8em auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .1em; /* Adjust as needed */
    animation: 
      typing 4s steps(60, end),
      blink-caret .75s step-end 2;
      animation-delay: 3s;
      animation-fill-mode: forwards;
  }

  


`
const OuterBlock = styled.div`
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
    object-fit: cover;
    object-position: center right;
    opacity: .5;
    filter: brightness(60%);

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
function HomePageBlockBG({ children, ...restProps }) {
    return (
        <Container>
            <InnerBlock>
                <div className="typewriter"><h1>{restProps.blockHeadline}</h1></div>
                <div className="typewriter"><h4>{restProps.blockBlurb}</h4></div>
            </InnerBlock>
            <OuterBlock {...restProps}>{children}</OuterBlock>
        </Container>
    )
}

export default HomePageBlockBG