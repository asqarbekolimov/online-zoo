"use client";

import { useDonationModal } from "@/store/use-modal";
import { Icons } from "../icons";
import { DonationAmounts } from "@/lib/constants";
import CustomButton from "../ui/button";
import { useState, useEffect } from "react";
import { getPets } from "@/lib/api";
import { IPet } from "@/types";

const Donation = () => {
  const [selectPet, setSelectPet] = useState(false);
  const [pets, setPets] = useState<IPet[] | []>([]);
  const [selectedPet, setSelectedPet] = useState<IPet | null>(null);

  const { setStep, setOpenModal, setAmount, amount } = useDonationModal();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await getPets();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  console.log(pets);

  const handleAmountClick = (amount: number) => {
    setAmount(amount);
  };

  const handleSelectPet = (pet: IPet) => {
    setSelectedPet(pet);
    setSelectPet(false);
  };

  return (
    <>
      <div className="donation-form-modal">
        <button
          className="modal-close"
          id="donationFormClose"
          aria-label="Close modal"
          onClick={() => setOpenModal(false)}
        >
          <Icons.XIcon />
        </button>

        <div className="donation-form-header">
          <h3 className="donation-form-title">make your donation</h3>
        </div>

        <div className="donation-form-divider"></div>

        <div className="donation-step">
          <h4 className="donation-section-title">Donation Information:</h4>
          <div className="donation-form-content">
            <p className="donation-label">
              <span className="required">*</span> Choose your donation amount:
            </p>
            <div className="amount-buttons">
              {DonationAmounts.map(
                (item) =>
                  item > 0 && (
                    <button
                      key={item}
                      className={`amount-btn ${amount === item ? "selected" : ""}`}
                      data-amount={item}
                      onClick={() => handleAmountClick(item)}
                    >
                      ${item}
                    </button>
                  )
              )}
            </div>
            <div className="other-amount-row">
              <button
                className={`other-amount-btn ${amount === 0 ? "selected" : ""}`}
                onClick={() => handleAmountClick(0)}
              >
                other amount
              </button>
              <input
                type="text"
                className="other-amount-input"
                placeholder=""
              />
            </div>
            <div className="special-pet-row">
              <button className="special-pet-btn">for special pet</button>
              <div className="custom-select" id="petSelect">
                <div
                  className="select-selected"
                  onClick={() => setSelectPet((state) => !state)}
                >
                  {selectedPet ? (
                    <span className="selected-text">
                      {selectedPet.name} the {selectedPet.commonName}
                    </span>
                  ) : (
                    <span className="non-selected-text">
                      Choose your favourite
                    </span>
                  )}
                </div>
                <div
                  className={`select-items ${selectPet ? "select-show" : "select-hide"}`}
                >
                  {pets ? (
                    pets.map((pet) => (
                      <div
                        key={pet.id}
                        data-value={pet.name}
                        onClick={() => handleSelectPet(pet)}
                        className={
                          selectedPet?.id === pet.id ? "same-as-selected" : ""
                        }
                      >
                        {pet.name} the {pet.commonName}
                      </div>
                    ))
                  ) : (
                    <div>Please, refresh the page</div>
                  )}
                </div>
              </div>
            </div>
            <div className="recurring-gift">
              <label className="checkbox-container">
                <input type="checkbox" id="recurringGift" />
                <span className="checkmark"></span>
                Make this a monthly recurring gift
              </label>
            </div>
          </div>
          <div className="donation-form-footer">
            <div className="step-indicators">
              <span className="step-dot active"></span>
              <span className="step-dot"></span>
              <span className="step-dot"></span>
            </div>
            <CustomButton
              variant="teal"
              onClick={() => setStep("donor")}
              className="next-btn"
            >
              <span>NEXT</span>
              <Icons.ArrowRight />
            </CustomButton>
            {/* <button className="next-btn" onClick={() => setStep("donor")}>
              <span>NEXT</span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
