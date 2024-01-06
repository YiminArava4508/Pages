import { Link } from 'react-router-dom';
import './index.scss';
import Loader from 'react-loaders'

const Home = () => {
    return (
        <>
        <div className="container home-page" >
            <div className="text-zone" >
                <h1>
                    Hello, I'm Yimin Arava, welcome to my page!
                </h1>
                <h3>
                    Software Developer / FullStack Developer / Data Engineer
                </h3>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>

        <Loader type="pacman" />
    </>
    )


}

export default Home


/*

            style={{backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",     
                          
        }}
*/