import React from "react";

const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  
  return (
    <ul className="list-group">
      {items.map((i) => (
        <li
          key={i[valueProperty]}
          onClick={() => onItemSelect(i)}
          style={{ cursor: "pointer" }}
          className={
            i[textProperty] === selectedItem.name
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {i[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
