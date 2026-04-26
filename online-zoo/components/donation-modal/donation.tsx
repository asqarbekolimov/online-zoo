"use client";

import { useDonationModal } from "@/store/use-modal";
import type { DonationData } from "@/store/use-modal";
import { Icons } from "../icons";
import { DonationAmounts } from "@/lib/constants";
import CustomButton from "../ui/button";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { getPets } from "@/lib/api";
import { IPet } from "@/types";

const Donation = () => {
  const [selectPet, setSelectPet] = useState(false);
  const [pets, setPets] = useState<IPet[] | []>([]);
  const [selectedPet, setSelectedPet] = useState<IPet | null>(null);
  const [otherAmount, setOtherAmount] = useState("");
  const [errors, setErrors] = useState({
    amount: "",
    pet: "",
  });

  const { setStep, setOpenModal, setAmount, amount, setDonationData } =
    useDonationModal();

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

  const handleAmountClick = (selectedAmount: number) => {
    setAmount(selectedAmount);
    setErrors((currentErrors) => ({ ...currentErrors, amount: "" }));

    if (selectedAmount > 0) {
      setOtherAmount("");
    }
  };

  const handleSelectPet = (pet: IPet) => {
    setSelectedPet(pet);
    setSelectPet(false);
    setErrors((currentErrors) => ({ ...currentErrors, pet: "" }));
  };

  const handleOtherAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^\d]/g, "");

    setOtherAmount(value);
    setAmount(0);
    setErrors((currentErrors) => ({ ...currentErrors, amount: "" }));
  };

  const handleNext = () => {
    const nextErrors = {
      amount: "",
      pet: "",
    };
    const customAmount = Number(otherAmount);

    if (amount === 0 && (!otherAmount || customAmount <= 0)) {
      nextErrors.amount = "Enter donation amount.";
    }

    if (!selectedPet) {
      nextErrors.pet = "Choose your favourite pet.";
    }

    if (nextErrors.amount || nextErrors.pet) {
      setErrors(nextErrors);
      return;
    }

    if (amount === 0) {
      setAmount(customAmount);
    }

    setDonationData((currentData: DonationData) => ({
      ...currentData,
      amount: amount === 0 ? customAmount : amount,
      petId: selectedPet ? selectedPet.id : 0,
    }));
    setStep("donor");
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
                      type="button"
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
                type="button"
                className={`other-amount-btn ${amount === 0 ? "selected" : ""}`}
                onClick={() => handleAmountClick(0)}
              >
                other amount
              </button>
              <input
                type="text"
                inputMode="numeric"
                className={`other-amount-input ${
                  errors.amount ? "input-error" : ""
                }`}
                placeholder="$"
                value={otherAmount}
                onChange={handleOtherAmountChange}
              />
            </div>
            {errors.amount && (
              <p className="donation-field-error">{errors.amount}</p>
            )}
            <div className="special-pet-row">
              <button type="button" className="special-pet-btn">
                for special pet
              </button>
              <div className="custom-select" id="petSelect">
                <div
                  className={`select-selected ${errors.pet ? "input-error" : ""}`}
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
            {errors.pet && <p className="donation-field-error">{errors.pet}</p>}
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
              onClick={handleNext}
              className="next-btn"
            >
              <span>NEXT</span>
              <Icons.ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
