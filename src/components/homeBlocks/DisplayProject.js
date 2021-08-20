import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: column;
background-color: white;
border-radius: 3px;

@media(max-width: 1025px){
    align-items: center;
    justify-content: center;
            }
`

function DisplayProject({ children, ...restProps }) {
    return (
        <Container>{children}</Container>
    )
}

export default DisplayProject