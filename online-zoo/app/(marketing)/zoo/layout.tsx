import { AnimalsSidebar } from "@/components/layout";
import FetchError from "@/components/ui/fetch-error";
import { IAnimal } from "@/types";
import { ReactNode } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const layout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const data = await fetch(`${API_URL}/pets`);
  if (!data.ok) {
    return <FetchError message="Something went wrong..." />;
  }

  const pets: { data: IAnimal[] } = await data.json();
  return (
    <main className="zoos-page">
      <div className="page-layout">
        <AnimalsSidebar data={pets.data} />
        {children}
      </div>
    </main>
  );
};

export default layout;
