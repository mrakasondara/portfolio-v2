import { useRef } from "react";
import { IoIosMail } from "react-icons/io";
import emailjs from '@emailjs/browser'
import FormMessage from "./FormMessage";
import './contact.scss'

const Contact = () =>{
    const ref = useRef()

    const sendEmail = (ev) =>{
        ev.preventDefault()
        emailjs.sendForm('service_j3lcf8k', 'template_z6yhbo3', ref.current, {
            publicKey: 'quE4cF2GwkGRVvqBK',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    }

    return(
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="wrapper">
                <div className="desc">
                    <h2>Let's build project together</h2>
                    <div className="group">
                        <span><IoIosMail/></span>
                        <h5>Contact</h5>
                        <p>rakasondara21@gmail.com</p>
                    </div>
                </div>
             <FormMessage onRef={ref} onSubmit={sendEmail}/>
            </div>
        </div>
    )
}
export default Contact