import styled from 'styled-components'

const SkillsIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8em;
    flex-wrap: wrap;
    width: 100%;
    `

const Icon = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    max-width: 80px;
    padding: 0;
    
    p{
        padding: 0;
        margin: 0;
        margin-top: .6em;
        font-size: 1.1rem;
    }
`
const SKillImage = styled.img`
width: 4em;
`
const SkillText = (props) => {
    return (
        <SkillsIcons>
            <Icon><SKillImage src="https://www.tomsclassroom.com/js.png" alt="javascript" /><p>JavaScript</p></Icon>
            <Icon><SKillImage src="https://www.tomsclassroom.com/react.png" alt="react" /><p>ReactJS</p></Icon>
            <Icon><SKillImage src="https://www.tomsclassroom.com/html5.png" alt="HTML5" /><p>HTML5</p></Icon>
            <Icon><SKillImage src="https://www.tomsclassroom.com/css3.png" alt="CSS3" /><p>CSS3</p></Icon>
            <Icon><SKillImage src="https://www.tomsclassroom.com/wordpress.png" alt="wordpress" /><p>Wordpress</p></Icon>
        </SkillsIcons>
    )
}

export default SkillText