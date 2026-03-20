import { Icons } from "../icons";
import CustomButton from "../ui/button";

const CareAnimals = () => {
  return (
    <>
      <section className="care-animal">
        <div className="container">
          <div className="care-animal_info">
            <h2 className="heading-2">care for the animals you love</h2>
            <p className="text-subheader">
              You can help to look after the animals you love with your gift
              today
            </p>
          </div>

          <div className="feed-for-animals">
            <div className="feed-for-koala">
              <img src="/assets/images/feed/koala.png" alt="koala" />
            </div>
            <div className="card--navy">
              <div className="card_header">
                <img src="/assets/images/feed/1.png" alt="panda" />
              </div>
              <div className="card_body">
                <p>
                  Your $30 could give Lucas a slice of panda cake, made with our
                  secret recipe.
                </p>
                <CustomButton variant="ghostOrange" className="ghost-btn">
                  <span className="btn-text">feed</span>
                  <Icons.ArrowRight />
                </CustomButton>
              </div>
            </div>
            <div className="card--navy">
              <div className="card_header">
                <img src="/assets/images/feed/2.png" alt="tiger" />
              </div>
              <div className="card_body">
                <p>
                  Your $150 will help to care for Senja, a Sumatran tiger, for
                  three weeks.
                </p>
                <CustomButton variant="ghostOrange" className="ghost-btn">
                  <span className="btn-text">feed</span>
                  <Icons.ArrowRight />
                </CustomButton>
              </div>
            </div>
            <div className="card--navy">
              <div className="card_header">
                <img src="/assets/images/feed/3.png" alt="koala" />
              </div>
              <div className="card_body">
                <p>
                  With your support, we can give Andy his favorite fruits.
                  Especially when it&apos;s not fruit season in its natural
                  habitat.
                </p>
                <CustomButton variant="ghostOrange" className="ghost-btn">
                  <span className="btn-text">feed</span>
                  <Icons.ArrowRight />
                </CustomButton>
              </div>
            </div>
            <div className="card--navy">
              <div className="card_header">
                <img src="/assets/images/feed/4.png" alt="eagles" />
              </div>
              <div className="card_body">
                <p>
                  Sam & Lora have hatched and raised numerous young and will be
                  happy with your help.
                </p>
                <CustomButton variant="ghostOrange" className="ghost-btn">
                  <span className="btn-text">feed</span>
                  <Icons.ArrowRight />
                </CustomButton>
              </div>
            </div>
          </div>

          <CustomButton variant="outlineNavy">
            <span className="text-button">choose your favourite</span>
            <Icons.ArrowRight />
          </CustomButton>

          <div className="touch-animal">
            <img src="/assets/images/touch-animal.png" alt="touch animal" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CareAnimals;
