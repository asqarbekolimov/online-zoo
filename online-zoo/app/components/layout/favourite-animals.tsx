import CustomButton from "../ui/button";

const FavouriteAnimals = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_bg">
          <div className="hero_container">
            <div className="hero__content">
              <h1 className="heading-1">Watch your favorite animal online</h1>
              <p className="text-body">
                Explore the exciting and mysterious world of wild animals in a
                natural setting without leaving your home.
              </p>
              <CustomButton variant="orange">VIEW LIVE CAM</CustomButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavouriteAnimals;
