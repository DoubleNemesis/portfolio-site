import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333;
width: 100%;
padding-bottom: 3em;
border-top: 2px solid #333;
min-height: 80vh;
`

const Inner = styled.div`
width: 69%;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media(max-width: 800px){
    width: 100%; 
    padding: 0;
}

`
function PortfolioContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}><Inner>{children}</Inner></Container>
    )
}

export default PortfolioContainer