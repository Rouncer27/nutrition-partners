import "babel-polyfill";
import axios from "axios";

const SWBwebsiteWrapper = document.querySelector(".swbwrapper");
const defaultBrowserLang = SWBwebsiteWrapper.dataset.browserlang;
const sessionOption = sessionStorage.getItem("npWebLang");

if (sessionOption === null) {
  if (defaultBrowserLang === "en" || defaultBrowserLang === "fr") {
    sessionStorage.setItem("npWebLang", defaultBrowserLang);
  } else {
    sessionStorage.setItem("npWebLang", "en");
  }
}
