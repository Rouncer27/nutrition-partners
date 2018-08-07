const SWBwebsiteWrapper = document.querySelector(".swbwrapper");
const defaultBrowserLang = SWBwebsiteWrapper.dataset.browserlang;
const sessionOption = sessionStorage.getItem("npWebLang");

if (sessionOption === null) {
  sessionStorage.setItem("npWebLang", defaultBrowserLang);
}
