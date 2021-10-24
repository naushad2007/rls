import { KeyboardEvent } from "react";

export const handleKeyUp = (event: KeyboardEvent, onClick: Function) => {
  if (event.key === "Enter" || event.key === " ") {
    onClick();
  }
};
