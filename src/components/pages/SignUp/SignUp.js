
import React, { useState } from 'react'
import HeroSection from '../../HeroSection'
import {homeObjThree} from './Data'
// import Pricing from '../../Pricing'
import "../../../App.css"
import { db } from "../../../firebase"

import Contact from "./contact"

const SignUp = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

//    const [loader, setLoader] = useState("false")

   const handleSubmit = (e) => {
       e.preventDefault();
    //    setLoader(true)

       db.collection('contacts').add({
           name: name,
           email: email,
           message: message,
       })
    //    .then(() => {
    //        alert("Message has been submitted")
    //        setLoader(false)
    //    })
    //    .catch((error) => {
    //        alert(error.message)
    //        setLoader(false)
    //    });

       setName("");
       setEmail("");
       setMessage("");
   };

    return (
        <div className="contact-background">
             <Contact />
        <div className="app">
            {/* <HeroSection {...homeObjThree} />   */}
            <form autoComplete="off" className="form" onSubmit={handleSubmit}>
                <h1>Contact Us</h1>

                <label>Name</label>
                <input required name="email" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email</label>
                <input required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />   

                <label>Message</label>
                <textarea required placeholder="Message"  value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
               
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
        {/* <hr/> */}

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713881.1699768393!2d-74.98270615259989!3d45.658887730384166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2scm!4v1608449829934!5m2!1sen!2scm" style={{
            border: '0',
            width: '100%',
            height: '400px',
            frameborder: '0',
            padding: '20px'
        
        }} allowFullScreen></iframe>
        </div>
        {/* <hr /> */}
        </div>
    )
}

export default SignUp


