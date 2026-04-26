import { create } from "zustand";

type ModalStep = "popup" | "donation" | "donor" | "payment" | "success";

interface DonationModalState {
  isOpenModal: boolean;
  step: ModalStep;
  amount: number;
  setOpenModal: (isOpen: boolean) => void;
  setStep: (step: ModalStep) => void;
  setAmount: (amount: number) => void;
}

export const useDonationModal = create<DonationModalState>()((set) => ({
  isOpenModal: false,
  step: "popup" as ModalStep,
  amount: 0,
  setOpenModal: (isOpen) => set({ isOpenModal: isOpen }),
  setStep: (step: ModalStep) => set({ step }),
  setAmount: (amount: number) => set({ amount }),
}));
