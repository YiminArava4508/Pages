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
                    Despite me majoring in data science,through my incredible internship experience 
                    as a backend developer with the UCSB Data Science club, 
                    I have now decided to pursue my new found passion in software development.
                    <br></br>
                    <br></br>
                    I am eager to connect with fellow Software Developers,
                    Data Scientists, Engineers, Analysts, and Professionals 
                    who also share my desire to learn, improve, and make impactful changes 
                    in this data-driven world. 
                    <br></br>
                    <br></br>
                    I still have much to learn, and I'm open to all kinds of feedbacks, 
                    so please feel free to reach out if you want to discuss any data-related topics or opportunities.
                    </p>
                                        <p>
                    Despite me majoring in data science,through my incredible internship experience 
                    as a backend developer with the UCSB Data Science club, 
                    I have now decided to pursue my new found passion in software development.
                    <br></br>
                    <br></br>
                    I am eager to connect with fellow Software Developers,
                    Data Scientists, Engineers, Analysts, and Professionals 
                    who also share my desire to learn, improve, and make impactful changes 
                    in this data-driven world. 
                    <br></br>
                    <br></br>
                    I still have much to learn, and I'm open to all kinds of feedbacks, 
                    so please feel free to reach out if you want to discuss any data-related topics or opportunities.
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