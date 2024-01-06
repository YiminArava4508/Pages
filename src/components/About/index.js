import './index.scss';

import Loader from 'react-loaders';

const About = () => {

    return (
        <>
        <div className='container about-page'>
            <h1>
                About me
            </h1>
            <p>I graduated from the 
                University of California-Santa Barbara in june 2023
                with a B.S. degree in Statistics and Data Science.
                <br></br>
                <br></br>
                I am currently seeking entry-level Data Science/ Data Engineering Positions 
                where I can apply my Data Science and Software skills 
                to solve real-world problems and with innovative solutions. 
                <br></br>
                <br></br>
                I am eager to connect with fellow 
                Data Scientists, Engineers, Analysts, and Professionals 
                who also share my desire to learn, improve, and make impactful changes 
                in this data-driven world. 
                <br></br>
                <br></br>
                Please feel free to reach out if you want to discuss any data-related topics or opportunities.
                </p>

        </div>
        <Loader type ="pacman" />
        </>
    )
}

export default About