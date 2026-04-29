"use client";

import { IPet } from "@/types";
import { Icons } from "../icons";
import CustomButton from "../ui/button";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface OurPetsProps {
  pets: IPet[];
}

const OurPets = ({ pets }: OurPetsProps) => {
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
            <CustomButton
              variant="outlineNavy"
              onClick={() => handleClick("left")}
              disabled={!moved}
            >
              <Icons.ArrowLeft />
            </CustomButton>
            <CustomButton
              variant="outlineNavy"
              onClick={() => handleClick("right")}
            >
              <Icons.ArrowRight />
            </CustomButton>
          </div>
        </div>

        <div className="our-pets_slider">
          <div className="our-pets_slider_inner">
            <div className="our-pets_slider_container" ref={carouselRef}>
              {!pets && <p>Something went wrong. Please, refresh the page</p>}
              {pets &&
                pets.map((pet: IPet) => (
                  <div key={pet.id} className="card--navy">
                    <div className="card_header">
                      <div className="animal_name">
                        <span className="subheader">{pet.name}</span>
                      </div>
                      <Image
                        className="card_img"
                        src={`/assets/images/card/${pet.id}.png`}
                        alt={pet.name}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="card_body">
                      <h3>{pet.name}</h3>
                      <p>{pet.description}</p>
                      <Link href={`/zoo/${pet.id}`}>
                        <button className="ghost-btn">
                          <span className="btn-text">VIEW LIVE CAM</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="25"
                            viewBox="0 0 28 25"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.8777 0.135121C14.6725 0.224325 14.4862 0.355065 14.3293 0.519851C14.1721 0.684221 14.0473 0.879485 13.9622 1.09446C13.877 1.30944 13.8332 1.5399 13.8332 1.77265C13.8332 2.00539 13.877 2.23586 13.9622 2.45083C14.0473 2.66581 14.1721 2.86107 14.3293 3.02544L21.1182 10.1365H1.80205C1.32411 10.1365 0.865757 10.3738 0.527808 10.7963C0.189858 11.2187 0 11.7917 0 12.3891C0 12.9865 0.189858 13.5594 0.527808 13.9819C0.865757 14.4043 1.32411 14.6416 1.80205 14.6416H21.1191L14.3293 21.7536C14.0122 22.0859 13.8341 22.5366 13.8341 23.0064C13.8341 23.4763 14.0122 23.927 14.3293 24.2592C14.6464 24.5915 15.0765 24.7782 15.5249 24.7782C15.9733 24.7782 16.4034 24.5915 16.7205 24.2592L26.8525 13.6423C27.0097 13.478 27.1345 13.2827 27.2196 13.0677C27.3048 12.8528 27.3486 12.6223 27.3486 12.3895C27.3486 12.1568 27.3048 11.9263 27.2196 11.7114C27.1345 11.4964 27.0097 11.3011 26.8525 11.1367L16.7205 0.519851C16.5636 0.355065 16.3773 0.224325 16.1721 0.135121C15.967 0.0459159 15.747 0 15.5249 0C15.3028 0 15.0829 0.0459159 14.8777 0.135121Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
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
