import type { SetterOrUpdater } from "recoil";
import { useRecoilState, atom } from "recoil";

export const modalScreenAtom = atom<boolean>({
  default: false,
  key: "modalScreen",
});

export const useModalScreen = (): [boolean, SetterOrUpdater<boolean>] => {
  const [isToastOpen, setToastOpen] = useRecoilState(modalScreenAtom);

  return [isToastOpen, setToastOpen];
};
