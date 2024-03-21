// import React, { useState } from 'react';
// import SMTPJS from 'smtp.js';



// const ContactForm = () => {

//      const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [message, setMessage] = useState('');

    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const smtp = new SMTPJS({
//             host: 'smtp.elasticemail.com',
//             port: 2525, // or your SMTP port
//             username: 'harioffice11a@gmail.com',
//             password: 'F26A0D69B6061E4337EFFF5A990740D1D231',
//         });
    
//         const emailData = {
//             to: email,
//             name: name,
//             body: message,
//         };
    
//         try {
//             await smtp.send(emailData);
//             console.log('Email sent successfully!');
//         } catch (error) {
//             console.error('Error sending email:', error);
//         }

        
//     };

   
 
//   return (
//     <div style={{display:"flex",textAlign:"center",justifyContent:"center",height: '100vh',alignItems:"center"}}>
//     <div style={{padding:"20px",background: 'linear-gradient(135deg, #6a0dad, #cb40f2)',borderRadius:"5px"}}>
//     <h1 style={{textAlign:"left",color:"transparent",backgroundImage:'linear-gradient(to right, #FF4E50, #F9D423)',backgroundClip:"text"}}>Contact Form</h1>
//     <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
//       <div>
//       <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
        
//           placeholder='UserName'
//           style={{border:"1px solid black",borderRadius:"5px",padding:"5px"}}
//           required
//         />
//       </div> 
//       <div>
        
//         <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//           type="email"
         
//           placeholder='Email'
//           style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginTop:"10px"}}
//           required
//         />
//       </div>
//       <div>
//       <textarea
         
//          value={message}
//          onChange={(e) => setMessage(e.target.value)}
//           placeholder='Add Your Message...'
//          style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginTop:'10px'}}
//           required
//         />
//       </div>
//       <button style={{marginTop:"10px",background:'linear-gradient(to right, #FF4E50, #F9D423)',borderRadius:"5px",border:"none",cursor:"pointer",padding:"5px"}} type="submit" value="Send Email">Submit</button>
//     </form>
//     </div>
//     </div>
//   );
// };

// export default ContactForm;
