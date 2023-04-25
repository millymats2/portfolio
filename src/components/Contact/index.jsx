import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return(
        <div className='container contact'>
            <h1 className='contact-me'>Contact Me</h1>
        <div class="contact-form">
        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mayzavja" method="post">
  <h1 className='touch'>Let's get in touch</h1>
  <fieldset id="fs-frm-inputs" className='form'>
  <div className='input-form'>
    <input type="text" name="name" id="full-name" placeholder="Name" className='input' required=""/>
    <input type="email" name="_replyto" id="email-address" placeholder="Email" className='input'required=""/>
 </div>
    <textarea rows="5" name="message" id="message" placeholder="Enter your mesage here" className='input-message'required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
  </fieldset>
  <input type="submit" value="Submit" className='submit'/>
</form>
      </div>
      <div className="links">
                <a target="_blank" data-hover="LinkedIn" className="link" rel='noreferrer' href='https://www.linkedin.com/in/milana-matsuka/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF"/>
                </a>
                <a target="_blank" data-hover="GitHub" className="link" rel='noreferrer' href='https://github.com/millymats2'>
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF"/>
                </a>
                <a target="_blank" data-hover="Email" className="link" rel='noreferrer' href='mailto:millymats2@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} color="#FFFFFF"/>
                </a>
                </div>
    </div>
    )
}
export default Contact
