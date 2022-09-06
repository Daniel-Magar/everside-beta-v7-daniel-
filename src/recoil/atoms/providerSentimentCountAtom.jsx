import { atom } from "recoil";

const providerSentimentCountAtom = atom({
  key: "providerSentimentCountAtom", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export default providerSentimentCountAtom;
