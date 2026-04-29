import { IAnimal } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";

interface Props {
  animal: IAnimal;
}

const AnimalDetailedInfo = ({ animal }: Props) => {
  return (
    <section className="details">
      <div className="container">
        <div className="did_you_know">
          <h3 className="heading-3">did you know?</h3>
          <p className="text-subheader">{animal?.description}</p>
        </div>

        <div className="animal-content">
          <div className="animal-info">
            <dl className="animal-info__list">
              <div className="animal-info__row">
                <dt className="animal-info__label">Common name:</dt>
                <dd className="animal-info__value">{animal?.commonName}</dd>
              </div>
              <div className="animal-info__row">
                <dt className="animal-info__label">Scientific name:</dt>
                <dd className="animal-info__value">{animal.scientificName}</dd>
              </div>
              <div className="animal-info__row">
                <dt className="animal-info__label">Type:</dt>
                <dd className="animal-info__value">{animal.type}</dd>
              </div>
              <div className="animal-info__row">
                <dt className="animal-info__label">Size:</dt>
                <dd className="animal-info__value">{animal.size}</dd>
              </div>
              <div className="animal-info__row">
                <dt className="animal-info__label">Diet:</dt>
                <dd className="animal-info__value">{animal.diet}</dd>
              </div>
              <div className="animal-info__row">
                <dt className="animal-info__label">Habitat:</dt>
                <dd className="animal-info__value">{animal.habitat}</dd>
              </div>
              <div className="animal-info__row">
                <dt className="animal-info__label">Range:</dt>
                <dd className="animal-info__value">{animal.range}</dd>
              </div>
            </dl>
            <Link href="/map" className="btn btn--outline">
              <span className="text-button">VIEW MAP</span>
              <Icons.ArrowRight />
            </Link>
          </div>

          <div className="detail-img">
            <Image
              src={`/assets/images/card/${animal.id}.png`}
              alt={animal.commonName}
              width={440}
              height={440}
            />
          </div>
        </div>

        <p className="animal-description text-body">
          {animal?.detailedDescription}
        </p>
      </div>
    </section>
  );
};

export default AnimalDetailedInfo;
