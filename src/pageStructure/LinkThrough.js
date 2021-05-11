import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
width: 100%;
margin-top: 1.5em;
@media(max-width: 1025px){
    flex-direction: column;
    align-items: center;
}
`

const StyledLinkThrough = styled.a`
color: white;
text-decoration: none;
font-size: 1.2em;
margin: 0 auto;


:hover{
    text-decoration: underline;
}
`

function LinkThrough({children, ...restProps}) {
    return (
        <Container>
        <StyledLinkThrough {...restProps.href}>{children}</StyledLinkThrough>
        </Container>
    )
}

export default LinkThrough