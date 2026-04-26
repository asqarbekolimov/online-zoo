"use client";

import { useDonationModal } from "@/store/use-modal";
import { Icons } from "../icons";
import CustomButton from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentFormData, paymentSchema } from "@/lib/validation";
import type { ChangeEvent } from "react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const formatExpirationDate = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

const Payment = () => {
  const { setStep, setOpenModal, donationData } = useDonationModal();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async () => {
    try {
      toast.loading("Processing donation...");
      const res = await fetch(`${API_URL}/donations`, {
        method: "POST",
        body: JSON.stringify(donationData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.dismiss();
        toast.error(result.error, { removeDelay: 500 });
        return;
      }

      toast.dismiss();
      toast.success("Donation processed successfully!", { removeDelay: 500 });
      setOpenModal(false);
      setStep("popup");
    } catch (error) {
      console.error(error);
    }
  };

  const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpirationDate(event.target.value);

    event.target.value = formattedValue;
    setValue("expirationDate", formattedValue, { shouldValidate: true });
  };

  return (
    <form className="donation-form-modal" onSubmit={handleSubmit(onSubmit)}>
      <button
        type="button"
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

      <div className="donation-step" id="donationStep3">
        <h4 className="donation-section-title">Payment Information:</h4>
        <div className="donation-form-content">
          <div className="form-grid">
            <div
              className={`form-group full-width ${
                errors.cardNumber ? "error" : ""
              }`}
            >
              <label htmlFor="cardNumber">
                <span className="required">*</span> Card number
              </label>
              <input
                {...register("cardNumber")}
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                inputMode="numeric"
                className={errors.cardNumber ? "error" : ""}
              />
              {errors.cardNumber && (
                <p className="error">{errors.cardNumber.message}</p>
              )}
            </div>
            <div
              className={`form-group ${errors.expirationDate ? "error" : ""}`}
            >
              <label htmlFor="expirationDate">
                <span className="required">*</span> Expiration date
              </label>
              <input
                {...register("expirationDate")}
                type="text"
                id="expirationDate"
                placeholder="MM/YY"
                inputMode="numeric"
                maxLength={5}
                className={errors.expirationDate ? "error" : ""}
                onChange={handleExpirationDateChange}
              />
              {errors.expirationDate && (
                <p className="error">{errors.expirationDate.message}</p>
              )}
            </div>
            <div className={`form-group ${errors.cvv ? "error" : ""}`}>
              <label htmlFor="cvv">
                <span className="required">*</span> CVV
              </label>
              <input
                {...register("cvv")}
                type="text"
                id="cvv"
                placeholder="123"
                inputMode="numeric"
                className={errors.cvv ? "error" : ""}
              />
              {errors.cvv && <p className="error">{errors.cvv.message}</p>}
            </div>
            <div
              className={`form-group full-width ${
                errors.cardholderName ? "error" : ""
              }`}
            >
              <label htmlFor="cardholderName">
                <span className="required">*</span> Cardholder name
              </label>
              <input
                {...register("cardholderName")}
                type="text"
                id="cardholderName"
                className={errors.cardholderName ? "error" : ""}
              />
              {errors.cardholderName && (
                <p className="error">{errors.cardholderName.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="donation-form-footer">
          <div className="step-indicators">
            <span className="step-dot completed"></span>
            <span className="step-dot completed"></span>
            <span className="step-dot active"></span>
          </div>
          <div className="footer-buttons">
            <CustomButton
              type="button"
              variant="link"
              onClick={() => setStep("donor")}
            >
              <span>BACK</span>
            </CustomButton>
            <CustomButton
              type="submit"
              variant="orange"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Complete Donation</span>
                  <Icons.ArrowRight />
                </>
              )}
            </CustomButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Payment;
