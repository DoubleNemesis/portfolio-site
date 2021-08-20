import styled from "styled-components"

const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
line-height: 1.6;
margin-bottom: 0;
margin: 0 auto;

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

const ProjectText = (props) => {
    return (
        <Text>
            <h1>{<a href={'http://www.tomsclassroom.com'}>TomsClassroom.com</a>}</h1>
            <p>
                I developed this full-stack ed-tech application to help English language students prepare for their Cambridge and IELTS exams.
                Students can test their knowledge of English collocations and then create an account to save their progress.
                I used Wordpress for the backend and hooked it up with the React frontend via the REST API.
            </p>
            <p>
                The app authenticates users with JWTs and stores user data in a MySQL table accessed via my custom Wordpress hook.
                The front-end communicates with Wordpress by making fetch requests to the REST API and saving the returned JWT in local storage to persist the user (or handling errors where necessary).
                The frontend is built with functional components and makes use of the Context API to share user data to the various components of the app.
                The app is fully-functioning and I'm currently refactoring it.
            </p>
        </Text>
    )
}

export default ProjectText