import tombg from '../../images/tombg.png'
import tomsclassroomQuiz from '../../images/tomsclassroom2Quiz.png'
import future from '../../images/future.jpg'
import trees from '../../images/trees.jpg'

export const TomImage = (props) => {
    return (
        <img src={tombg} alt="Thomas Chant" />
    )
}

export const ProjectImageQuiz = (props) => {
    return (
        <img src={tomsclassroomQuiz} alt="tomsclassroom.com/quiz" />
    )
}

export const ProjectImageFuture = (props) => {
    // https://unsplash.com/@drew_beamer credit
    return (
        <img src={future} alt="the future" />
    )
}

export const ProjectImageSoftSkills = (props) => {
    return (
        <img src={trees} alt="soft skills" />
    )
}