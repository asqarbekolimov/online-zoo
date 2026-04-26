"use client";

import { useDonationModal } from "@/store/use-modal";
import { Icons } from "../icons";
import CustomButton from "../ui/button";

interface Props {
  title: string;
  description: string;
}

const YourDonation = ({ title, description }: Props) => {
  const { setOpenModal, setStep, setAmount } = useDonationModal();

  const handleDonateClick = () => {
    setStep("donation");
    setOpenModal(true);
    setAmount(0);
  };
  return (
    <>
      <section className="your-donation">
        <div className="container">
          <div className="text">
            <h3 className="heading-3">{title}</h3>
            <p className="text-body">{description}</p>
          </div>

          <div className="quick_donation" onClick={handleDonateClick}>
            <div className="text-subheader">Quick Donate</div>
            <div className="donation_amount">
              <span className="amount-input">$ Donation Amount</span>
              <CustomButton variant="orange">
                <Icons.ArrowRight />
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourDonation;
