require("../../src/js/components/header/header.nav.js");
require("../../src/js/components/header/mobile-nav.js");
require("../../src/js/components/footer/footer.js");
require("../../src/js/components/woocommerce/woocommerce.js");

require("../../src/js/components/language/language.js");

const homePage = document.querySelector(".swb-home-page");
if (homePage !== null)
  require("../../src/js/components/react/pages/Home/Home.js");

// import { TweenMax } from "TweenMax";
// import ScrollMagic from "scrollmagic";
// import "animation.gsap";
// import "debug.addIndicators";
