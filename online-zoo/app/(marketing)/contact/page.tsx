import { ContactForm } from "@/components/layout";
import Image from "next/image";

const ContacPage = () => {
  return (
    <main className="contact-main">
      <div className="contact-hero">
        <div className="container">
          <div className="hero-image">
            <Image
              src={"/assets/images/touch-animal.png"}
              alt="Touch the animal through screen"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <section className="get-in-touch">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h1 className="heading-2">Get in touch</h1>
              <p className="text-body">
                Whether you have a question, or would like to say hello,
                we&apos;re happy to hear from you. Please use the form to send
                us a message and we&apos;ll get back to you as soon as we can.
                Whether you have a question, or would like to say hello,
                we&apos;re happy to hear from you. Please use the form to send
                us a message and we&apos;ll get back to you as soon as we can.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContacPage;
