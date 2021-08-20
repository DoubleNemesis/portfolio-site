import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
background-color: whitesmoke;
width: 100%;
height: 80px;
box-sizing: border-box;
font-family: Verdana;
color: #666;
font-size: .8rem;

@media(max-width: 1025px){
    flex-direction: column;
    margin-top: 1em;
}

h5{
    color: black;
    padding: .5em;

}

span, a{
    color: black;
    font-size: 1.2rem;
    padding: .5em .5em;
    text-decoration: none;
}
`
const Button = styled.button`
border: none;
font-size: 2rem;
font-weight: 600;
background: whitesmoke;
cursor: pointer;

:hover{
    color:red; 
}
`

const Arrow = ()=> <>&uarr;&uarr;</>

function Footer({ children, ...restProps }) {
    function handleClick() {
        window.scrollTo({
            top: 0,
            left: 115, behavior: 'smooth'
        });
    }

    return (
        <Container {...restProps}>{children}<Button onClick={handleClick}><Arrow/></Button></Container>
    )
}

export default Footer