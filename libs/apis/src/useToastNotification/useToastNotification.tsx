import type { SetterOrUpdater } from "recoil";
import { useRecoilState, atom } from "recoil";

export const toastNotificationAtom = atom<boolean>({
  default: false,
  key: "toastNotification",
});

export const useToastNotification = (): [boolean, SetterOrUpdater<boolean>] => {
  const [isToastOpen, setToastOpen] = useRecoilState(toastNotificationAtom);

  return [isToastOpen, setToastOpen];
};
