import Image from "next/image";

const HowItWorks = () => {
  return (
    <>
      <section className="how-it-works">
        <div className="how-it-works_container">
          <div className="wellcome-zoo">
            <div className="wellcome-zoo_info">
              <h2 className="heading-2">Welcome to the Online Zoo!</h2>
              <p className="text-body">
                On our website, using live webcams, fans of all ages can observe
                various animals. Among them, are Giant pandas, eagles,
                alligators, forest gorillas, African lions, and others. It is
                the whole natural world in real-time in front of our cameras. We
                hope you will enjoy watching closely and explore animals’
                behavior and habitats! Note: animals are not always on view on
                cameras, so please check back if you don&apos;t see anything.
              </p>
            </div>
            <Image
              className="wellcome-zoo_img"
              src="/assets/images/wellcome-img.png"
              alt="wellcome-zoo"
              width={400}
              height={400}
            />
          </div>
          <div className="wellcome-zoo">
            <Image
              className="wellcome-zoo_img"
              src="/assets/images/we-work.png"
              alt="we-work"
              width={400}
              height={400}
            />
            <div className="wellcome-zoo_info">
              <h2 className="heading-2">How we work</h2>
              <p className="text-body">
                Online Zoo is a nonprofit committed to inspiring awareness and
                preservation of nature and wild animals in our zoo and
                worldwide. Every day, our experts work to safeguard the health
                and wellness of the animals. To continue these efforts, we need
                your help. We&apos;re so grateful to our numerous supporters.
                All donations, large and small, go a long way to the
                conservation efforts of our pets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
