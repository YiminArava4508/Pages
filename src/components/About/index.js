import './index.scss';
import skills from '../../content_options';
import Loader from 'react-loaders';
import { Row } from "react-bootstrap";

const About = () => {

    return (
        <>
        <div className='container about-page'>
            <div className="text-zone" >
                <h1>
                    About me
                </h1>
                    <p>
                    Hello! I graduated in 2023 with a B.S. in Statistics and Data Science 
                    Degree from UCSB. I started really getting into coding around 
                    my 2nd to 3rd year in college
                    when I participated in a summer workshop internship.
                    
                    <br></br>
                    <br></br>
                    Thanks to my incredible internship experience 
                    as a backend developer with the UCSB Data Science club, 
                    I learned the software development cycle 
                    and what it's like to be a part of a professional team environment.
                    I find myself liking software development more after the internship so
                    I started doing software projects in my free time.
                    
                    <br></br>
                    <br></br>
                    I created this project as a way to gain some frontend experience with React.js.
                    I also wanted to have a portfolio for all my projects.
                    <br></br>
                    <br></br>
                    Hey, thanks for reading! If you want to reach me, 
                    you can email me on contact me page.
                    I have much to learn and I'm open to all kinds of feedbacks!
                    Please feel free to reach out if you want to discuss any data-related topics or opportunities.
                    I am eager to connect with fellow Software/Data Engineers, Analysts,
                    Developers who also share my desire to learn, improve, and make impactful changes 
                    in this data-driven world. 
                    </p>
       
      
                    <Row className="bar-zone">
                        <h3>
                            Skills
                        </h3>
                    {skills.map((data, i) => {
                    return (
                        <div key={i}>
                        <h3 className="progress-title">{data.name}</h3>
                        <div className="progress">
                            <div
                            className="progress-bar"
                            style={{
                                width: `${data.value}%`,
                            }}
                            >
                            <div className="progress-value">{data.value}%</div>
                            </div>
                        </div>
                        </div>
                    );
                    })}

                    </Row>
            </div>
        </div>
        <Loader type ="pacman" />
        </>
    )
}

export default About