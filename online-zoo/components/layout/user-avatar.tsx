"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react";
import { Icons } from "../icons";
import styles from "@/styles/user-avatar.module.css";
import CustomButton from "../ui/button";
import Link from "next/link";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="header__account">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger onClick={toggleDialog}>
            <div className="user__avatar" onClick={toggleDialog}>
              <Icons.userAvatar />
              <span className="user__avatar-name"></span>
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Backdrop className={styles.Backdrop} />
            <Dialog.Popup className={styles.Popup}>
              <Dialog.Title className={styles.Title}>Authoration</Dialog.Title>
              <Dialog.Description className={styles.Description}>
                Please, sign in to access your account or create a new one if
                you do&apos;t have it yet.
              </Dialog.Description>
              <Link href="/sign-in" onClick={toggleDialog}>
                <CustomButton variant="teal" className={styles.CustomButton}>
                  Sign In
                </CustomButton>
              </Link>
              <Link href="/create-account" onClick={toggleDialog}>
                <CustomButton variant="teal" className={styles.CustomButton}>
                  Create Account
                </CustomButton>
              </Link>
              <div className={styles.Actions}>
                <Dialog.Close className={styles.Button}>
                  <CustomButton variant="outlineTeal">Close</CustomButton>
                </Dialog.Close>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>

        <div className="user-menu" hidden></div>
      </div>
    </>
  );
};

export default UserAvatar;
