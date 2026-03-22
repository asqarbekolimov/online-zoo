import { Icons } from "../icons";
import CustomButton from "../ui/button";

const OurPets = () => {
  return (
    <>
      <section className="our-pets">
        <div className="container">
          <div className="our-pets_info">
            <h2 className="heading-2">meet some our Pets</h2>
            <p className="subheader">
              Do you have a special place in your heart for animals? Who are
              your favorites? Perhaps you&apos;d like to donate to special ones
              or all our pets? We think it&apos;s important for you to choose
              how your donation is used.
            </p>
          </div>

          <div className="slider_controllers">
            <CustomButton variant="outlineNavy">
              <Icons.ArrowLeft />
            </CustomButton>
            <CustomButton variant="outlineNavy">
              <Icons.ArrowRight />
            </CustomButton>
          </div>
        </div>

        <div className="our-pets_slider">
          <div className="our-pets_slider_inner">
            <div className="our-pets_slider_container"></div>
          </div>
        </div>

        <div className="choose-your-favourite_btn">
          <CustomButton variant="outlineNavy" className="outline-btn">
            <span className="btn-text">choose your favourite</span>
            <Icons.ArrowRight />
          </CustomButton>
        </div>
      </section>
    </>
  );
};

export default OurPets;
