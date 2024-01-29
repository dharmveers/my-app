import React from "react";
import { CardBody, CardFooter, CardHeader, CardText, CardTitle, Row } from "reactstrap";

const About=()=>{
    return(
        <div>
            <Row>
                <CardBody>
                    <CardHeader  tag="h4" className="bg-info p-1">About</CardHeader>
                    <CardTitle tag="h5" className="mt-4">DHARMVEER SINGH</CardTitle>
                    <CardText className="mt-3">
                    Greetings! I'm Dharmveer Singh, a dynamic Full Stack Developer
                    with a passion for transforming ideas into captivating web
                    experiences. Proficient in Java, Hibernate, Springboot,
                    Microservices, Design Pattern, HTML, CSS, and JavaScript, I
                    specialize in building responsive and visually appealing user
                    interfaces using React.js. On the server side coupled with MongoDB
                    for efficient database management. My approach is rooted in
                    innovation, constantly exploring emerging technologies to enhance
                    website functionalities and aesthetics. I thrive on pushing the
                    boundaries of what's possible, ensuring websites not only meet
                    technical standards but exceed user expectations. With expertise
                    in RESTful API design, Git version control, and deployment on
                    platforms like firebase and Netlify, I bring a holistic skill set
                    to the table. My philosophy revolves around user-centric design
                    and performance optimization, aiming to create not just websites
                    but memorable digital experiences. I'm eager to collaborate on
                    exciting projects that demand creativity and technical finesse.
                    </CardText>
                    <CardFooter>
                        <a href="https://www.hackerrank.com/profile/d2singh437" className="text-decoration-none bg-white p-2 m-1">HackerRank</a>
                        <a href="https://www.linkedin.com/in/dharmveer-singh-8475891a2/" className="text-decoration-none bg-white p-2 m-1">LinkedIn</a>
                        <a href="https://github.com/dharmveers/" className="text-decoration-none bg-white p-2 m-1">GitHub</a>
                    </CardFooter>
                </CardBody>
            </Row>
        </div>
    );
}

export default About;