"use client";

import { useDonationModal } from "@/store/use-modal";
import { Icons } from "../icons";
import CustomButton from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DonorFormData, donorSchema } from "@/lib/validation";

const Donor = () => {
  const { setStep, setOpenModal } = useDonationModal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DonorFormData>({
    resolver: zodResolver(donorSchema),
  });

  const onSubmit = () => {
    setStep("payment");
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
      <div className="donation-step">
        <h4 className="donation-section-title">Billing Information:</h4>
        <div className="donation-form-content">
          <div className="form-flex">
            <div className={`form-group ${errors.name ? "error" : ""}`}>
              <label htmlFor="donorName">
                <span className="required">*</span> Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="donorName"
                className={errors.name ? "error" : ""}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className={`form-group ${errors.email ? "error" : ""}`}>
              <label htmlFor="donorEmail">
                <span className="required">*</span> Your Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                id="donorEmail"
                className={errors.email ? "error" : ""}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              <p className="text-body">
                You will receive emails from the Online Zoo, including updates
                and news on the latest discoveries and translations. You can
                unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        <div className="donation-form-footer">
          <div className="step-indicators">
            <span className="step-dot completed"></span>
            <span className="step-dot active"></span>
            <span className="step-dot"></span>
          </div>
          <div className="footer-buttons">
            <CustomButton
              type="button"
              variant="link"
              onClick={() => setStep("donation")}
            >
              <span>BACK</span>
            </CustomButton>
            <CustomButton
              type="submit"
              variant="teal"
              disabled={isSubmitting}
              className="next-btn"
            >
              <span>NEXT</span>
              <Icons.ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Donor;
