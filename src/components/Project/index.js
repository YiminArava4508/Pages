import './index.scss';
import Loader from 'react-loaders';
import projectPic from '../../assets/images/project_pic.jpg'
import dataproject from '../../assets/images/dataproject.jpg'
import portfolio from '../../assets/images/Portfolio.jpg'
import twitterPic from '../../assets/images/WalmartTwitter.jpg'
import classiferPic from '../../assets/images/ImageClassifer.jpg'
import dashboardPic from '../../assets/images/Dashboard.jpg'
const Project = () => {
    return (
        <>
            <div className="project-page" >
                <div className='project-container'>
                    <div className="project">
                        <img src = {portfolio} alt = 'project_pic' />
                        <h2 className= "project_title "> Portfolio Website</h2>
                        <a href='https://github.com/YiminArava4508/Pages'>
                            <button className='project_button'>VIEW</button>
                        </a>
                    </div>

                    <div className="project">
                        <img src = {twitterPic} alt = 'project_pic' />
                        <h2 className= "project_title "> Walmart Twitter</h2>
                        <a href='https://github.com/YiminArava4508/Blog'>
                            <button className='project_button'>VIEW</button>
                        </a>
                    </div>

                    <div className="project">
                        <img src = {projectPic} alt = 'project_pic' />
                        <h2 className= "project_title "> FastAPI Blog</h2>
                        <a href='https://github.com/YiminArava4508/fastapi-Blog'>
                            <button className='project_button'>VIEW</button>
                        </a>
                    </div>

                    <div className="project">
                        <img src = {classiferPic} alt = 'project_pic' />
                        <h2 className= "project_title ">Image Classifier</h2>
                        <a href='https://github.com/JasonFreeberg/image-classifier-example'>
                            <button className='project_button'>VIEW</button>
                        </a>
                    </div>

                    <div className="project">
                        <img src = {dashboardPic} alt = 'project_pic' />
                        <h2 className= "project_title ">Shiny Dashboard</h2>
                        <a href='https://github.com/dguest390/shiny-dashboard'>
                            <button className='project_button'>VIEW</button>
                        </a>
                    </div>

                    <div className="project">
                        <img src = {dataproject} alt = 'project_pic' />
                        <h2 className= "project_title "> 
                            FIFA Video Game Player Data Analysis
                            </h2>
                        <a href='https://www.linkedin.com/in/yimin-arava/details/projects/1635547539979/single-media-viewer/?profileId=ACoAADZxB2kBuwEWHOvEX6AYU3zT8PwOOYjC9os'>
                            <button className='project_button'>VIEW</button>
                        </a>
                    </div>
                </div>






            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Project