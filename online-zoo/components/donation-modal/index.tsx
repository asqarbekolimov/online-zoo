"use client";

import { useDonationModal } from "@/store/use-modal";
import { AlertDialog } from "@base-ui/react/alert-dialog";
import styles from "@/styles/donation-modal.module.css";
import Popup from "./popup";
import Donation from "./donation";
import Donor from "./donor";
import Payment from "./payment";

const DonationModal = () => {
  const { setOpenModal, isOpenModal, step } = useDonationModal();
  return (
    <>
      <AlertDialog.Root open={isOpenModal} onOpenChange={setOpenModal}>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop
            className={styles.Backdrop}
            onClick={() => setOpenModal(false)}
          />
          <AlertDialog.Popup className={styles.Popup}>
            {step === "popup" && <Popup />}
            {step === "donation" && <Donation />}
            {step === "donor" && <Donor />}
            {step === "payment" && <Payment />}
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
};

export default DonationModal;
