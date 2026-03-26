import {
  CareAnimals,
  FavouriteAnimals,
  HowItWorks,
  OurPets,
  PayAndFeed,
  QuickDonation,
  UsersFeedbacks,
} from "@/components/layout";
import { getFeedbacks, getPets } from "@/lib/api";
import { Suspense } from "react";

const HomePage = async () => {
  const pets = await getPets();
  const feedbacks = await getFeedbacks();

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
        <Suspense fallback={<p>Loading...</p>}>
          <OurPets pets={pets.data} />
        </Suspense>
        <PayAndFeed />
        <Suspense fallback={<p>Loading...</p>}>
          <UsersFeedbacks feedbacks={feedbacks.data} />
        </Suspense>
        <CareAnimals />
      </main>
    </>
  );
};

export default HomePage;
