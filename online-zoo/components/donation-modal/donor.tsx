"use client";

import { useDonationModal } from "@/store/use-modal";
import { Icons } from "../icons";
import CustomButton from "../ui/button";

const Donor = () => {
  const { setStep, setOpenModal } = useDonationModal();

  return (
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
        <h4 className="donation-section-title">Donor Information:</h4>
        <div className="donation-form-content">
          <div className="form-flex">
            <div className="form-group">
              <label>
                <span className="required">*</span> Your Name
              </label>
              <input type="text" id="firstName" />
            </div>
            <div className="form-group">
              <label>
                <span className="required">*</span> Your Email Address
              </label>
              <input type="email" id="email" />

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
            <CustomButton variant="link" onClick={() => setStep("donation")}>
              <span>BACK</span>
            </CustomButton>
            <CustomButton
              variant="teal"
              onClick={() => setStep("payment")}
              className="next-btn"
            >
              <span>NEXT</span>
              <Icons.ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donor;
