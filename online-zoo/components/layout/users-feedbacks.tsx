"use client";

import { IFeedback } from "@/types";
import { Icons } from "../icons";
import CustomButton from "../ui/button";
import { useRef, useState } from "react";

interface UsersFeedbacksProps {
  feedbacks: IFeedback[];
}

const UsersFeedbacks = ({ feedbacks }: UsersFeedbacksProps) => {
  const [moved, setMoved] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: "left" | "right") => {
    setMoved(true);

    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      console.log(clientWidth);

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      if (direction === "left" && scrollTo === 0) {
        setMoved(false);
      }
    }
  };

  return (
    <>
      <section className="users-feedbacks">
        <div className="users-feedbacks-container">
          <div className="users-feedbacks-content">
            <h2 className="heading-2">what our users think</h2>
            <p className="text-subheader">
              We are continuously striving to improve the experiences of our
              future guests. Below you can leave your own feedback, or simply
              view feedback from past clients.
            </p>
          </div>

          <div className="users_testimonials">
            <div className="users_testimonials_inner">
              <div className="users_testimonials_container" ref={carouselRef}>
                {!feedbacks && (
                  <>
                    <div className="testimonials-error">
                      <p>Something went wrong. Please, refresh the page</p>
                    </div>
                  </>
                )}
                {feedbacks &&
                  feedbacks.map((feedback: IFeedback) => (
                    <div key={feedback.id} className="users_testimonial_card">
                      <div className="quote_icon">
                        <span className="quote">“</span>
                      </div>
                      <div className="text-subheader">
                        {feedback.city}, {feedback.month} ${feedback.year}
                      </div>
                      <p className="text-body">
                        {feedback.text.slice(0, 220)}...
                      </p>
                      <div className="text-button">{feedback.name}</div>
                    </div>
                  ))}
              </div>

              <div className="testimonials_controllers">
                <CustomButton
                  variant="outlineWhite"
                  onClick={() => handleClick("left")}
                  disabled={!moved}
                >
                  <Icons.ArrowLeft />
                </CustomButton>
                <CustomButton
                  variant="outlineWhite"
                  onClick={() => handleClick("right")}
                >
                  <Icons.ArrowRight />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback_btn">
          <CustomButton variant="outlineWhite">
            <span className="text-button">Leave feedback</span>
            <Icons.ArrowRight />
          </CustomButton>
        </div>
      </section>
    </>
  );
};

export default UsersFeedbacks;
