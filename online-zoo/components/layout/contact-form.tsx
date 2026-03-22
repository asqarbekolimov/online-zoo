import CustomButton from "../ui/button";
import { Icons } from "../icons";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form-wrapper">
        <form className="contact-form" id="contactForm">
          <div className="form-group">
            <label htmlFor="name">
              <span className="required">*</span> Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First and last name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <span className="required">*</span> Your Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              <span className="required">*</span> Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <span className="required">*</span> Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <CustomButton className="btn submit-btn">
            <span className="text-button">Send Message</span>
            <Icons.ArrowRight />
          </CustomButton>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
