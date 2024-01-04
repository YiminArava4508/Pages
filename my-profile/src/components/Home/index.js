import { Link } from 'react-router-dom';
import './index.scss';
const Home = () => {
    
    return (
        <div className="container home-page" >
            <div className="text-zone" >
                <h1>
                    Hi, My name is Yimin Arava
                </h1>
                <h3>
                    Software Developer / FullStack Developer / Data Engineer
                </h3>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )


}

export default Home


/*

            style={{backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",     
                          
        }}
*/