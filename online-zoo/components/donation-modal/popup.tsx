"use client";

import { useDonationModal } from "@/store/use-modal";
import Image from "next/image";
import { Icons } from "../icons";
import { DonationAmounts } from "@/lib/constants";

const Popup = () => {
  const { setOpenModal, setStep, setAmount } = useDonationModal();

  const handleAmountClick = (amount: number) => {
    setAmount(amount);
    setStep("donation");
  };

  return (
    <>
      <div className="modal">
        <button className="modal-close" onClick={() => setOpenModal(false)}>
          <Icons.XIcon />
        </button>
        <div className="modal-image">
          <Image
            src="/assets/images/modal-hero.png"
            alt="Hand holding animal paw"
            width={400}
            height={300}
          />
        </div>
        <div className="modal-content">
          <h2 className="modal-title">together we care, save and protect!</h2>
          <p className="modal-description">
            Your most generous gift not only cares for countless animals, but it
            also offers hope and a vital lifeline to the world&rsquo;s most
            endangered wildlife relying on us to survive.
          </p>
          <div className="modal-buttons">
            {DonationAmounts.map((amount) =>
              amount > 0 ? (
                <button
                  key={amount}
                  className="donation-btn donation-amount-btn"
                  data-amount={amount}
                  onClick={() => handleAmountClick(amount)}
                >
                  ${amount}
                </button>
              ) : (
                <button
                  key={amount}
                  className="donation-btn donation-amount-btn"
                  data-amount="other"
                  onClick={() => handleAmountClick(amount)}
                >
                  other amount
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
