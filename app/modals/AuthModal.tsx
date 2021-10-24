import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";

import { authModalAtom } from "@/atoms/modals";
import TextInput from "@/components/forms/TextInput";
import Modal from "@/components/Modal";
import emitter from "@/utils/emitter";

const AuthModal: FC = () => {
  const [isOpen, setOpen] = useRecoilState(authModalAtom);

  useEffect(() => {
    emitter.on("authModal", () => setOpen(true));

    return () => {
      emitter.off("authModal");
    };
  }, [setOpen]);

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} title="Login">
      <TextInput />
    </Modal>
  );
};

export default AuthModal;
