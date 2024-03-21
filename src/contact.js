import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
       e.preventDefault();
       emailjs.sendForm("Your_Service_Id","Your_template_No", form.current, {
        publicKey: "Your_Public_key",
       })
       .then (() => {
        alert("Form Submitted Successfully");
       },
       (error) => {
        console.log("Failed...",error.text);
       })
    }
 
  return (
    <div style={{display:"flex",textAlign:"center",justifyContent:"center",height: '100vh',alignItems:"center"}}>
    <div style={{padding:"20px",background: 'linear-gradient(135deg, #6a0dad, #cb40f2)',borderRadius:"5px"}}>
    <h1 style={{color:"red",textAlign:"left",color:"transparent",backgroundImage:'linear-gradient(to right, #FF4E50, #F9D423)',backgroundClip:"text"}}>Contact Form</h1>
    <form ref={form} onSubmit={sendEmail} style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
      <div>
      <input
          type="text"
          name="from_name"
          placeholder='UserName'
          style={{border:"1px solid black",borderRadius:"5px",padding:"5px"}}
          required
        />
      </div> 
      <div>
        
        <input
          type="email"
          placeholder='Email'
          name="from_email"
          style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginTop:"10px"}}
          required
        />
      </div>
      <div>
    
        <textarea
          placeholder='Add Your Message...'
          name="message"
          style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginTop:'10px'}}
          required
        />
      </div>
      <button style={{marginTop:"10px",background:'linear-gradient(to right, #FF4E50, #F9D423)',borderRadius:"5px",border:"none",cursor:"pointer",padding:"5px"}} type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default ContactForm;
