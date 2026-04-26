"use client";

import { useDonationModal } from "@/store/use-modal";
import { Icons } from "../icons";
import CustomButton from "../ui/button";

const Payment = () => {
  const { setStep, setOpenModal } = useDonationModal();
  return (
    <div className="donation-form-modal">
      <button
        className="modal-close"
        id="donationFormClose"
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
            <div className="form-group full-width">
              <label>
                <span className="required">*</span> Card number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <span className="required">*</span> Expiration date
              </label>
              <input type="text" id="expDate" placeholder="MM/YY" required />
            </div>
            <div className="form-group">
              <label>
                <span className="required">*</span> CVV
              </label>
              <input type="text" id="cvv" placeholder="123" required />
            </div>
            <div className="form-group full-width">
              <label>
                <span className="required">*</span> Cardholder name
              </label>
              <input type="text" id="cardholderName" required />
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
            <CustomButton variant="link" onClick={() => setStep("donor")}>
              <span>BACK</span>
            </CustomButton>
            <CustomButton variant="orange" className="submit-btn">
              <span>Complete Donation</span>
              <Icons.ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
