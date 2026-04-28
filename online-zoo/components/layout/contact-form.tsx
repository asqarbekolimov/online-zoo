"use client";

import CustomButton from "../ui/button";
import { Icons } from "../icons";
import { useForm } from "react-hook-form";
import { ContactFormData, contactSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      toast.loading("Sending message...");
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.dismiss();
      toast.success(`${data.name}, thank you for your message!`);
      reset();
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form" id="contactForm">
          <div className={`form-group ${errors.name ? "error" : ""}`}>
            <label htmlFor="name">
              <span className="required">*</span> Your Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="First and last name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error" style={{ color: '#ff3333', fontSize: '14px', marginTop: '5px' }}>{errors.name.message}</p>}
          </div>

          <div className={`form-group ${errors.email ? "error" : ""}`}>
            <label htmlFor="email">
              <span className="required">*</span> Your Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error" style={{ color: '#ff3333', fontSize: '14px', marginTop: '5px' }}>{errors.email.message}</p>}
          </div>

          <div className={`form-group ${errors.subject ? "error" : ""}`}>
            <label htmlFor="subject">
              <span className="required">*</span> Subject
            </label>
            <input
              {...register("subject")}
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className={errors.subject ? "error" : ""}
            />
            {errors.subject && <p className="error" style={{ color: '#ff3333', fontSize: '14px', marginTop: '5px' }}>{errors.subject.message}</p>}
          </div>

          <div className={`form-group ${errors.message ? "error" : ""}`}>
            <label htmlFor="message">
              <span className="required">*</span> Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={6}
              placeholder="Enter your message"
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && <p className="error" style={{ color: '#ff3333', fontSize: '14px', marginTop: '5px' }}>{errors.message.message}</p>}
          </div>

          <CustomButton disabled={isSubmitting} className="btn submit-btn">
            {isSubmitting ? (
              <span className="text-button">Sending...</span>
            ) : (
              <>
                <span className="text-button">Send Message</span>
                <Icons.ArrowRight />
              </>
            )}
          </CustomButton>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
