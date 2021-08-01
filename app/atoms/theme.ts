import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import { ThemeOptions } from "@/types/theme";

const { persistAtom } = recoilPersist();

export const themeAtom = atom<ThemeOptions>({
  key: "theme",
  default: "Dark",
  effects_UNSTABLE: [persistAtom],
});
