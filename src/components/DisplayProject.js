import React from 'react'
import styled from 'styled-components'
import tom from '../images/tom9.png'

const Container = styled.div`
display:flex;
flex-direction: column;

@media(max-width: 1025px){
    align-items: center;
    justify-content: center;
            }
`
const ProjectText = styled.div`
display: flex;
justify-content: center;
width: 100%;
line-height: 1.6;
margin-bottom: 0;

.aboutMeInner{
display: flex;

.imgHolder{
    display: flex;
    align-items: flex-end;
    border-left: .2em solid #333;
    width: 100%;
    border-top-right-radius: .2em;
    border-bottom-right-radius: .2em;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #333;
    background-image: url(${tom});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;


}

    @media(max-width: 599px){
        flex-direction: column;
        .imgHolder{
            min-height: 400px;
        }
    }

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
    max-width: 60%;
    padding: 0 2em 0 1em;
}
p>p{
    padding: 0;
}

@media(max-width: 599px){
    p{
        max-width:100%;
    }
}

@media(max-width: 1025px){
    width: 90%;
    background-color: white;
    border:none;
    margin-top: 0em;
            }

h1{
    font-size: 1.3rem;
    color: #333;
}


div{
    background-color: #fafafa;
    width:100%;
    border-radius: .2em;
}

.tc {
    border-radius: 0;
    border-bottom-right-radius: .2em;
    border-bottom-left-radius: .2em;

    h1{
        padding-left: 1em;
    }

    p{
        max-width: 100%;
    }
}


.skillsIcons{
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8em;
    flex-wrap: wrap;
}

.skillsIconsLabels{
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    margin-top: .54em;
    width: 80px;

    img{
        width: 4em;
    }
}



`
//    color: #f7df1e;
const ProjectImage = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: #fafafa;
background-color: #333;


@media(max-width: 1025px){
    width: 90%;
    padding: 0% 0px;
    display: flex;
    justify-content: baseline;
    align-items: center;
    border: 1px solid lightgrey;
    border: none;
    border-radius: unset;


    }

img{
    width: 100%;
    border-top-right-radius: .2em;
    border-top-left-radius: .2em;


    @media(max-width: 1025px){
        max-height: auto;
        max-width: 100%;
        border-left: none;
        margin: 0;
                }
}
`



function DisplayProject({children, ...restProps}) {
    return (
        <Container><ProjectImage>{restProps.image}</ProjectImage><ProjectText><div className={restProps.extraClass}>{restProps.text}</div></ProjectText></Container>
    )
}

export default DisplayProject