import AnimalDetailedInfo from "@/components/layout/animal-detailed-info";
import LiveCams from "@/components/layout/live-cams";
import YourDonation from "@/components/layout/quick-donation";
import FetchError from "@/components/ui/fetch-error";
import { getAnimalById } from "@/lib/api";
import { IAnimal } from "@/types";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const AnimalDetail = async ({ params }: PageProps) => {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const animal: IAnimal = await getAnimalById(id);
  console.log(animal);

  if (!animal) {
    return <FetchError />;
  }

  return (
    <div>
      <>
        <LiveCams animal={animal} />

        <YourDonation
          title={`make the ${animal?.type} Donation!`}
          description="Our process for bamboo donations first starts with a site evaluation. It is important that our team sees where the bamboo is growing, then determining if the bamboo is a species that our animals are currently eating. Thank you for your interest in donating bamboo for our pandas."
        />

        <AnimalDetailedInfo animal={animal} />
      </>
    </div>
  );
};

export default AnimalDetail;
