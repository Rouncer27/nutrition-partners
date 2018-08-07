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

var x = document.getElementById("demo");
const API_KEY = "8e2f5850676548cb8ad0de88a1813fe4";

function getLocation() {
  axios
    .get("https://api.ipgeolocation.io/getip")
    .then(result => {
      const userIP = result.data.ip;
      axios
        .get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${userIP}`
        )
        .then(result => {
          sessionStorage.setItem("npWebLocation", result.data.state_prov);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

getLocation();
