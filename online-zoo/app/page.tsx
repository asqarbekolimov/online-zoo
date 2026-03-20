import {
  CareAnimals,
  FavouriteAnimals,
  HowItWorks,
  OurPets,
  PayAndFeed,
  QuickDonation,
  UsersFeedbacks,
} from "@/components/layout";

const HomePage = () => {
  return (
    <>
      <main>
        <FavouriteAnimals />
        <HowItWorks />
        <QuickDonation
          title="Your donation makes a difference!"
          description="The Online Zoo's animal webcams are some of the most famous
              on the internet. Tune in to watch your favourite animals — live,
              24/7!"
        />
        <OurPets />
        <PayAndFeed />
        <UsersFeedbacks />
        <CareAnimals />
      </main>
    </>
  );
};

export default HomePage;
