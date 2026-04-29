"use client";

import { useDonationModal } from "@/store/use-modal";
import { IAnimal } from "@/types";
import Image from "next/image";
import { Icons } from "../icons";

const LiveCams = ({ animal }: { animal: IAnimal }) => {
  const { setOpenModal } = useDonationModal();
  return (
    <section className="live-cams">
      <div className="container">
        <div className="top-text">
          <h2 className="heading-2">live {animal?.commonName} cams</h2>
          <button
            className="btn donation-trigger"
            onClick={() => setOpenModal(true)}
          >
            <span className="text-button">Donate now</span>

            <Icons.ArrowRight />
          </button>
        </div>

        <div className="live__cam">
          <div className="live__content">
            <a href="https://youtube.com" target="_blank">
              <Image
                className="live__image"
                src={`/assets/images/card/${animal.id}.png`}
                alt={animal.commonName}
                width={650}
                height={600}
              />
            </a>
            <a href="https://youtube.com" target="_blank">
              <button className="play_btn"></button>
            </a>
          </div>
        </div>

        <div className="more__live">
          <h3 className="heading-3">more live views</h3>

          <div className="more__live-cams">
            <div className="live__cams-slider">
              <button>
                <Icons.ArrowLeft />
              </button>

              <ul className="cam__list">
                <li className="cam_item cam_item--active">
                  <a href="#" className="cam__card">
                    <span className="cam__live">
                      <span className="live__text">cam 1</span>
                      <Icons.PlayIcon />
                    </span>
                    <Image
                      src={`/assets/images/card/${animal.id}.png`}
                      alt={animal.commonName}
                      width={320}
                      height={210}
                    />
                    <button className="play_btn"></button>
                  </a>
                </li>
                <li className="cam_item">
                  <a href="#" className="cam__card">
                    <span className="cam__live">
                      <span className="live__text">cam 2</span>
                      <Icons.PlayIcon />
                    </span>
                    <Image
                      src={`/assets/images/card/${animal.id}.png`}
                      alt={animal.commonName}
                      width={320}
                      height={210}
                    />
                    <button className="play_btn"></button>
                  </a>
                </li>
                <li className="cam_item">
                  <a href="#" className="cam__card">
                    <span className="cam__live">
                      <span className="live__text">cam 3</span>
                      <Icons.PlayIcon />
                    </span>
                    <Image
                      src={`/assets/images/card/${animal.id}.png`}
                      alt={animal.commonName}
                      width={320}
                      height={210}
                    />
                    <button className="play_btn"></button>
                  </a>
                </li>
              </ul>

              <button>
                <Icons.ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCams;
