import styled from 'styled-components'

const Image = styled.img`
max-width: 100%;
`

const ProjectImage = (props) => {
    return (
        <Image src={props.image} alt={props.altText}/>
    )
}

export default ProjectImage