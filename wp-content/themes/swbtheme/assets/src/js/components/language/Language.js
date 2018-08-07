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
console.log(x);

function getLocation() {
  console.log("hello 1");
  if (navigator.geolocation) {
    console.log("hello 2");
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("hello 3");
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  getProvince(position.coords.latitude, position.coords.longitude);
}

function getProvince(lat, lng) {
  const locationURL = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}`;
  axios.get(`${locationURL}`).then(result => {
    console.log(result.data);
    x.innerHTML = `You are from ${
      result.data.results[0].address_components[4].long_name
    }`;
  });
}

getLocation();
