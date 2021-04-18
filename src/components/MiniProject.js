import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 317px;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: white;
border: 1px solid #999;
border-radius: .2em;
margin: 1em;
padding: .5em 0 .5em 0;


.flip-box {
    background-color: transparent;
    width: 317px;
    height: 150px;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    padding-top: 3px;
    user-select: none;
  }
  
  .flip-box-inner {
    position: relative;
    width: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

@media(max-width:1025px){
  .flip-box:hover .flip-box-inner {
    transform: unset;
  }

  .flip-box:active .flip-box-inner {
    transform: rotateY(180deg);
  }
}


}
  
  .flip-box-front, .flip-box-back {
    position: absolute;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    
  }
  
  .flip-box-front {
    color: black;
  }
  
  .flip-box-back {
    color: black;
    transform: rotateY(180deg);
  }


`

const ProjectText = styled.div`
width: 94%;
background-color: whitesmoke;

.projectTextInner{
    font-size: 1.2em;
    padding: .2em .9em .2em .2em;
    display: flex;
    justify-content: space-between;
}

.projectTextInner:first-child{
    padding-top: .6em;
}

.projectTextInner:last-child{
    padding: 3px 0 1em .2em;
    color: #333;
    font-size: .9em;
}

.projectTextInner a {
    text-decoration: none;
    color: #7CB9E8;
}

.projectTextInner a:hover {
    text-decoration: underline;
}

a i {
  color: black;
}

`
const ProjectImage = styled.div`
z-index:1;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

img{
    max-width: 297px;
}

img.hidden{
    opacity: 0;
    transition: opacity .5s ease 0s;
  }

img.shown{
    opacity: 1;
    transition: opacity .5s ease 0s;
  }

`
const FlipSideText = styled.div`
position:absolute;
z-index: 0;
padding: 1em 2em;
text-align: left;

}
`
function MiniProject({ children, ...restProps }) {

  function handleClick(e) {
    console.log(e.target.classList.contains('hidden'))
    console.log(e.target.parentNode.parentNode.nextElementSibling)
    e.target.parentNode.parentNode.nextElementSibling.classList.add('shown')
    if (e.target.classList.contains('hidden')) {
      e.target.classList.remove('hidden')
    }
    else {
      e.target.classList.add('hidden')
    }



  }

  return (
    <>
      <Container >
        <div className="flip-box" aria-haspopup="true">
          <div className="flip-box-inner" >
            <div className="flip-box-front" >
              <ProjectImage>{restProps.image}</ProjectImage>
            </div>
            <div className="flip-box-back">
              <FlipSideText>{restProps.flipSideText}</FlipSideText>
            </div>
          </div>
        </div>
        <ProjectText>
          <div className="projectTextInner">{restProps.linkName}
            {restProps.githubLink ? <a href={restProps.githubLink}><i className="fab fa-github" aria-label="guthub link" /></a> : null}
          </div>
          <div className="projectTextInner">{restProps.projectType}</div>
        </ProjectText>
      </Container>
    </>
  )
}

export default MiniProject