import { AnimalsSidebar } from "@/components/layout";
import YourDonation from "@/components/layout/quick-donation";
import { IAnimal } from "@/types";

const AnimalDetail = async () => {
  const data = await fetch(
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets"
  );
  if (!data.ok) {
    throw new Error("Failed to fetch");
  }

  const pets: { data: IAnimal[] } = await data.json();
  console.log(pets.data);
  return (
    <>
      <main className="zoos-page">
        <div className="page-layout">
          <AnimalsSidebar data={pets.data} />

          <section className="live-cams">
            <div className="container">
              <div className="top-text">
                <h2 className="heading-2">live panda cams</h2>
                <button className="btn donation-trigger" id="donation-btn">
                  <span className="text-button">Donate now</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="live__cam">
                <div className="live__content">
                  <a href="https://youtube.com" target="_blank">
                    <img
                      className="live__image"
                      src="/assets/images/zoos/panda/main-cam.jpg"
                      alt="Panda Cam"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="22"
                        viewBox="0 0 25 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0724 0.119971C11.2545 0.199174 11.42 0.315255 11.5593 0.461565C11.6989 0.607505 11.8097 0.780876 11.8853 0.971748C11.9609 1.16262 11.9998 1.36724 11.9998 1.57389C11.9998 1.78055 11.9609 1.98517 11.8853 2.17604C11.8097 2.36691 11.6989 2.54028 11.5593 2.68622L5.53159 9H22.6822C23.1066 9 23.5135 9.21071 23.8136 9.58579C24.1137 9.96086 24.2822 10.4696 24.2822 11C24.2822 11.5304 24.1137 12.0391 23.8136 12.4142C23.5135 12.7893 23.1066 13 22.6822 13H5.53081L11.5593 19.3146C11.8408 19.6096 11.999 20.0097 11.999 20.4269C11.999 20.8441 11.8408 21.2443 11.5593 21.5393C11.2777 21.8343 10.8959 22 10.4978 22C10.0996 22 9.71776 21.8343 9.43622 21.5393L0.440245 12.1127C0.300617 11.9668 0.189838 11.7934 0.114252 11.6026C0.0386677 11.4117 -0.000240326 11.2071 -0.000240326 11.0004C-0.000240326 10.7938 0.0386677 10.5891 0.114252 10.3983C0.189838 10.2074 0.300617 10.034 0.440245 9.88808L9.43622 0.461565C9.5755 0.315255 9.74095 0.199174 9.92311 0.119971C10.1053 0.0407677 10.3005 0 10.4978 0C10.695 0 10.8902 0.0407677 11.0724 0.119971Z"
                          fill="#20113D"
                        />
                      </svg>
                    </button>

                    <ul className="cam__list">
                      <li className="cam_item cam_item--active">
                        <a href="#" className="cam__card">
                          <span className="cam__live">
                            <span className="live__text">cam 1</span>
                            <img
                              src="/assets/icons/live-camera.svg"
                              alt="live cam"
                            />
                          </span>
                          <img
                            src="/assets/images/zoos/panda/1.png"
                            alt="panda 1"
                          />
                          <button className="play_btn"></button>
                        </a>
                      </li>
                      <li className="cam_item">
                        <a href="#" className="cam__card">
                          <span className="cam__live">
                            <span className="live__text">cam 2</span>
                            <img
                              src="/assets/icons/live-camera.svg"
                              alt="live cam"
                            />
                          </span>
                          <img
                            src="/assets/images/zoos/panda/2.png"
                            alt="panda 2"
                          />
                          <button className="play_btn"></button>
                        </a>
                      </li>
                      <li className="cam_item">
                        <a href="#" className="cam__card">
                          <span className="cam__live">
                            <span className="live__text">cam 3</span>
                            <img
                              src="/assets/icons/live-camera.svg"
                              alt="live cam"
                            />
                          </span>
                          <img
                            src="/assets/images/zoos/panda/3.png"
                            alt="panda 3"
                          />
                          <button className="play_btn"></button>
                        </a>
                      </li>
                    </ul>

                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="22"
                        viewBox="0 0 25 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                          fill="#20113D"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <YourDonation
          title="make the Bamboo Donation!"
          description="Our process for bamboo donations first starts with a site evaluation. It is important that our team sees where the bamboo is growing, then determining if the bamboo is a species that our animals are currently eating. Thank you for your interest in donating bamboo for our pandas."
        />

        <section className="details">
          <div className="container">
            <div className="did_you_know">
              <h3 className="heading-3">did you know?</h3>
              <p className="text-subheader">
                Pandas are often seen eating in a relaxed sitting posture, with
                their hind legs stretched out before them. They may appear
                sedentary, but they are skilled tree-climbers and efficient
                swimmers.
              </p>
            </div>

            <div className="animal-content">
              <div className="animal-info">
                <dl className="animal-info__list">
                  <div className="animal-info__row">
                    <dt className="animal-info__label">Common name:</dt>
                    <dd className="animal-info__value">Giant Panda</dd>
                  </div>
                  <div className="animal-info__row">
                    <dt className="animal-info__label">Scientific name:</dt>
                    <dd className="animal-info__value">
                      Ailuropoda melanoleuca
                    </dd>
                  </div>
                  <div className="animal-info__row">
                    <dt className="animal-info__label">Type:</dt>
                    <dd className="animal-info__value">Herbivore</dd>
                  </div>
                  <div className="animal-info__row">
                    <dt className="animal-info__label">Size:</dt>
                    <dd className="animal-info__value">4 to 5 feet</dd>
                  </div>
                  <div className="animal-info__row">
                    <dt className="animal-info__label">Diet:</dt>
                    <dd className="animal-info__value">Omnivore</dd>
                  </div>
                  <div className="animal-info__row">
                    <dt className="animal-info__label">Habitat:</dt>
                    <dd className="animal-info__value">Forests</dd>
                  </div>
                  <div className="animal-info__row">
                    <dt className="animal-info__label">Range:</dt>
                    <dd className="animal-info__value">Eastern Asia</dd>
                  </div>
                </dl>
                <a href="/pages/map.html" className="btn btn--outline">
                  <span className="text-button">VIEW MAP</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              <div className="detail-img">
                <img
                  src="/assets/images/zoos/panda/detail.png"
                  alt="Panda Detail"
                />
              </div>
            </div>

            <p className="animal-description text-body">
              Giant pandas are very unusual animals that eat almost exclusively
              bamboo, which is very low in nutrients. Because of this, they have
              many unique adaptations for their low-energy lifestyle. Giant
              pandas are solitary. They have a highly developed sense of smell
              that males use to avoid each other and to find females for mating
              in the spring. After a five-month pregnancy, females give birth to
              a cub or two, though they cannot care for both twins. The blind
              infants weigh only 5 ounces at birth and cannot crawl until they
              reach three months of age. They are born white, and develop their
              much loved coloring later. Habitat loss is the primary threat to
              this species. Its popularity around the world has helped the giant
              panda become the focus of successful conservation programs.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AnimalDetail;
