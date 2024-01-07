import Loader from 'react-loaders'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
const refForm = useRef()
const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'service_wegeav9',
            'template_8b9h38f',
            refForm.current,
            'FpdUPpg5KxSiZVQL0'
        )
        .then(
            ()=>{
                alert('Message Successfully sent!')
                window.location.reload(true)

            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
}
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me
                </h1>
                <p>
                    As a recent graduate, I'm currently seeking entry level Software Engineering 
                    or Fullstack Developer opportunites. Please reach out if you have any questions or requests.
                </p>
                <div className='contact-form'>
                    <form ref ={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' 
                                       name='name'
                                       placeholder='Name' 
                                       required
                                       />
                            </li>
                            <li className='half'>
                                <input type='email' 
                                       name='email' 
                                       placeholder='Email' 
                                       required
                                       />
                            </li>
                            <li>
                                <input placeholder='Subject' 
                                       type = 'text' 
                                       name='subject' 
                                       required
                                       />
                            </li>
                            <li>
                                <textarea 
                                       placeholder='Message' 
                                       name='message' 
                                       required
                                       />
                            </li>
                            <li>
                                <input 
                                       type='submit'
                                       className='flat-button'
                                       value='SEND'
                                       />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    <Loader type = 'pacman' />
    
    </>
    
    )
}


export default Contact