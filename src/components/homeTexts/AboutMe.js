import styled from 'styled-components'
import LinkThrough from '../../pageStructure/LinkThrough'
import TomImage from '../homeImages/TomImage'
import tom from './../../images/tom9.png'

const Container = styled.div`
display: flex;
flex-direction: row;
@media(max-width:700px){
    flex-direction: column;
}
background-color: whitesmoke;
border-radius: 3px;
line-height: 1.6;

h1{
    font-size: 1.3rem;
    color: #333;
    padding-left: 1em;
}

a {
    text-decoration: none;
    color: #7CB9E8;
    color: darkBlue;

    :hover{
        text-decoration: underline; 
    }
}

p{
    font-size: 1.1rem;
    padding: 0 2em 0 1em;
} 


`

const AboutMe = (props) => {
    return (
        <Container>
            <div>
                    <p><b>I'm a frontend developer from Exeter, Devon, UK</b></p>
                    <p>
                    I love turning complex challenges into superfast web applications.
                    I mainly work with ReactJS and JavaScript but I also have a sound knowledge of Wordpress.
                    I’ve been tinkering with websites since 2005 and have spent the pandemic era upping my web development skills.
                    Through my eighteen-year career as a language teacher, I have developed a special interesting educational technology.
                    I have a Masters' degree in Creative Writing and many years' experience creating content both online and offline.
                    When I'm not coding or learning, you can often find me somewhere in the great outdoors or reading a good book.
                    </p>
            </div>
                    <TomImage image={tom} altText="Tom Chant Web Developer"/>
        </Container>
    )
}

export default AboutMe