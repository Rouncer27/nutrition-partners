const siteNav = document.querySelector(".swbmainnav");
const parListItems = [...siteNav.querySelectorAll(".menu-item-has-children")];
const subMenus = [...siteNav.querySelectorAll(".sub-menu")];
const navButton = document.querySelector(".swbmainnav__button");
let menuStartUp = false;

const mobileNavInit = () => {
  if (!menuStartUp) {
    addSpanEventListener(parListItems);
    addMainButtonEventListener(navButton);
    menuStartUp = true;
  }
  closeAllSubMenus(subMenus);
};

const closeAllOpenSubMenus = () => {
  const currentActiveSubMenus = [...document.querySelectorAll(".sub-open")];

  currentActiveSubMenus.forEach(stillOpen => {
    if (stillOpen.classList.contains("sub-open")) {
      stillOpen.classList.remove("sub-open");
    }
  });
};

const openSubMenu = e => {
  e.preventDefault();
  const currentActiveSubMenus = [...document.querySelectorAll(".sub-open")];
  const currentSubMenu = e.target.offsetParent.querySelector(".sub-menu");

  if (!currentSubMenu.classList.contains("sub-open")) {
    if (currentActiveSubMenus.length > 0) {
      currentActiveSubMenus.forEach(submenu => {
        if (submenu.classList.contains("sub-open")) {
          submenu.classList.remove("sub-open");
        }
      });
    }
    currentSubMenu.classList.add("sub-open");
  } else {
    currentSubMenu.classList.remove("sub-open");
  }
};

const addSpanEventListener = items => {
  // For each menu item with a sub-menu we need to add an event listener to that item. //
  // We add a span element for this click event to be attached to. //
  items.forEach(listItem => {
    // Create the span elelment here. //
    const spanButton = document.createElement("span");
    spanButton.classList.add("sub-icon");
    // Add the event listener. //
    spanButton.addEventListener("touchend", openSubMenu, false);
    spanButton.addEventListener("click", openSubMenu, false);
    // Attach the span element to the list item. //
    listItem.appendChild(spanButton);
  });
};

const closeAllSubMenus = subMenus => {
  // Close all the sub-menus to start. //
  subMenus.forEach(menu => {
    if (!menu.classList.contains("collapse")) {
      menu.classList.add("collapse");
      const subList = [...menu.querySelectorAll("li")];
    }
  });
};

const addMainButtonEventListener = navButton => {
  navButton.addEventListener("click", closeAllOpenSubMenus);
};

if (siteNav) {
  window.addEventListener("resize", () => {
    const mq = window.matchMedia("(max-width: 768px)").matches;
    if (mq) {
      mobileNavInit();
    }
  });

  window.addEventListener("load", () => {
    const mq = window.matchMedia("(max-width: 768px)").matches;
    if (mq) {
      mobileNavInit();
    }
  });
}
