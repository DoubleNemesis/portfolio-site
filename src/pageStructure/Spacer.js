import styled from 'styled-components'

const Container = styled.span`
display: block;
height: ${({height})=>height}px;
min-height: ${({height})=>height}px;
width: 100%;
min-width: 100%;
background-color: transparent;
`

function Spacer({height}) {

    return (
        <Container height={height}></Container>
    )
}

export default Spacer