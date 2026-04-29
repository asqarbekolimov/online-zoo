"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react";
import { Icons } from "../icons";
import styles from "@/styles/user-avatar.module.css";
import CustomButton from "../ui/button";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    toggleDialog();
  };

  return (
    <>
      <div className="header__account">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger onClick={toggleDialog}>
            <div className="user__avatar" onClick={toggleDialog}>
              {user ? (
                <span className="user__avatar-name">
                  {user?.user?.name?.slice(0, 1).toUpperCase()}
                </span>
              ) : (
                <Icons.userAvatar />
              )}
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Backdrop className={styles.Backdrop} />
            <Dialog.Popup className={styles.Popup}>
              {!user ? (
                <>
                  <Dialog.Title className={styles.Title}>
                    Authorization
                  </Dialog.Title>
                  <Dialog.Description className={styles.Description}>
                    Please, sign in to access your account or create a new one
                    if you do&apos;t have it yet.
                  </Dialog.Description>
                  <Link href="/sign-in" onClick={toggleDialog}>
                    <CustomButton
                      variant="teal"
                      className={styles.CustomButton}
                    >
                      Sign In
                    </CustomButton>
                  </Link>
                  <Link href="/sign-up" onClick={toggleDialog}>
                    <CustomButton
                      variant="teal"
                      className={styles.CustomButton}
                    >
                      Create Account
                    </CustomButton>
                  </Link>
                  <div className={styles.Actions}>
                    <CustomButton
                      variant="outlineTeal"
                      className={styles.Button}
                      onClick={toggleDialog}
                    >
                      Close
                    </CustomButton>
                  </div>
                </>
              ) : (
                <>
                  <Dialog.Title className={styles.Title}>
                    Welcome, {user?.user?.name}!
                  </Dialog.Title>
                  <Dialog.Description className={styles.Description}>
                    <div style={{ textAlign: "left", marginBottom: "15px" }}>
                      <p>
                        <strong>Name:</strong> {user?.user?.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {user?.user?.email}
                      </p>
                      <p>
                        <strong>Login:</strong> {user?.user?.login}
                      </p>
                    </div>
                  </Dialog.Description>
                  <div className={styles.Actions}>
                    <CustomButton
                      variant="orange"
                      className={styles.Button}
                      onClick={handleLogout}
                    >
                      Logout
                    </CustomButton>
                    <CustomButton
                      variant="outlineTeal"
                      className={styles.Button}
                      onClick={toggleDialog}
                    >
                      Close
                    </CustomButton>
                  </div>
                </>
              )}
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>

        <div className="user-menu" hidden></div>
      </div>
    </>
  );
};

export default UserAvatar;
