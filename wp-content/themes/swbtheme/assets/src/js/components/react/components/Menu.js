import React, { Component } from "react";

import ListItem from "./menuItems/ListItem";

const Menu = props => {
  const menuItmems = props.mainMenuItem;
  const slug = props.slug;
  return (
    <ul id="menu-main-menu" className="swbmainnav__wrap">
      {menuItmems.length > 0 &&
        menuItmems.map(item => {
          return <ListItem key={item.id} item={item} slug={slug} />;
        })}
    </ul>
  );
};

export default Menu;
