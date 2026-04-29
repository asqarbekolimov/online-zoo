import { create } from "zustand";

type ModalStep = "popup" | "donation" | "donor" | "payment" | "success";

export interface DonationData {
  name: string;
  email: string;
  amount: number;
  petId: number;
}

type DonationDataUpdater =
  | DonationData
  | ((currentData: DonationData) => DonationData);

interface DonationModalState {
  donationData: DonationData;
  isOpenModal: boolean;
  step: ModalStep;
  amount: number;
  setOpenModal: (isOpen: boolean) => void;
  setStep: (step: ModalStep) => void;
  setAmount: (amount: number) => void;
  setDonationData: (donationData: DonationDataUpdater) => void;
}

export const useDonationModal = create<DonationModalState>()((set) => ({
  donationData: {
    name: "",
    email: "",
    amount: 0,
    petId: 0,
  },
  isOpenModal: false,
  step: "popup" as ModalStep,
  amount: 0,
  setOpenModal: (isOpen) => set({ isOpenModal: isOpen }),
  setStep: (step: ModalStep) => set({ step }),
  setAmount: (amount: number) => set({ amount }),
  setDonationData: (donationData) =>
    set((state) => ({
      donationData:
        typeof donationData === "function"
          ? donationData(state.donationData)
          : donationData,
    })),
}));
