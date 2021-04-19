const ContactDetails = (props) => {
    return (
        <>
            <a href={props.twitter}><i className="fab fa-twitter"></i><span>follow me on twitter</span></a>
            <a href={props.linkedin}><i className="fab fa-linkedin"></i><span>connect on LinkedIn</span></a>
            <a href={props.github}><i className="fab fa-github"></i><span>find me on Github</span></a>
            <a href={props.youtube}><i className="fab fa-youtube"></i><span>watch my videos</span></a>
            <a href={props.youtube}><i className="fa fa-envelope"></i><span>email me</span></a>
        </>
    )
}

export default ContactDetails