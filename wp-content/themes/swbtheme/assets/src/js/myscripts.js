require("../../src/js/components/header/header.nav.js");
require("../../src/js/components/footer/footer.js");
require("../../src/js/components/woocommerce/woocommerce.js");

require("../../src/js/components/language/language.js");

const homePage = document.querySelector(".swb-home-page");
if (homePage !== null)
  require("../../src/js/components/react/pages/Home/Home.js");

const aboutPage = document.querySelector(".swb-about-page");
if (aboutPage !== null)
  require("../../src/js/components/react/pages/About/About.js");

const productsPage = document.querySelector(".swb-products-page");
if (productsPage !== null)
  require("../../src/js/components/react/pages/Products/Products.js");

// import { TweenMax } from "TweenMax";
// import ScrollMagic from "scrollmagic";
// import "animation.gsap";
// import "debug.addIndicators";
