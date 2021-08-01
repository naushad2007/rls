import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";

import { authModalAtom } from "@/atoms/modals";
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
    <Modal isOpen={isOpen} setOpen={setOpen} title="Who are you?">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        perspiciatis quo beatae inventore temporibus, qui odit atque fugiat.
        Pariatur at labore alias vero maxime nihil minus possimus vitae ipsa
        doloremque?
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, sit vitae
        quos nobis laudantium adipisci, ut autem dolorum nulla dolores quidem
        illum quasi placeat possimus cumque voluptates! Quas, suscipit cumque?
      </p>
    </Modal>
  );
};

export default AuthModal;
