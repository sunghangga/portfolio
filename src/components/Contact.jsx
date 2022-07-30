import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p8htapt",
        "template_dnqirr7",
        e.target,
        "AITmQhJ-juEoLftM3"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010295.9968150447!2d114.51104464007311!3d-8.453713709950243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali!5e0!3m2!1sid!2sid!4v1658585109618!5m2!1sid!2sid" title="Google Maps" allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
        {/* MENU WRAP */}

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
