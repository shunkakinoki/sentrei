import type { SetterOrUpdater } from "recoil";
import { useRecoilState, atom } from "recoil";

export const modalWindowAtom = atom<boolean>({
  default: false,
  key: "modalWindow",
});

export const useModalWindow = (): [boolean, SetterOrUpdater<boolean>] => {
  const [isToastOpen, setToastOpen] = useRecoilState(modalWindowAtom);

  return [isToastOpen, setToastOpen];
};
