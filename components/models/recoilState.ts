import { atom } from "recoil";

//Atom for managing toast showing in Notification molecules.
export const isToastShowingState = atom({
  key: "isToastShowingState",
  default: false,
});
