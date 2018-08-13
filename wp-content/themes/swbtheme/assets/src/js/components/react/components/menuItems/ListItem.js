import React from "react";
import classnames from "classnames";

const ListItem = props => {
  const { item, slug } = props;
  const isCurrent =
    item.object_slug === slug ? " current_page_item current-menu-item" : "";

  return (
    <li
      id={`menu-item-${item.id}`}
      className={`menu-item menu-item-type-${item.type} menu-item-object-${
        item.type_label
      } menu-item-${item.slug} page_item page-item-${
        item.object_id
      } menu-item-${item.id}${isCurrent}`}
    >
      <a href={item.url}>{item.title}</a>
    </li>
  );
};

export default ListItem;
