import { Icons } from "../icons";
import CustomButton from "../ui/button";

const UsersFeedbacks = () => {
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
              <div className="users_testimonials_container"></div>

              <div className="testimonials_controllers">
                <CustomButton variant="outlineWhite">
                  <Icons.ArrowLeft />
                </CustomButton>
                <CustomButton variant="outlineWhite">
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
