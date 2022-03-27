import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeItem } from "../redux/itemSlice";
import { navigateStatus } from "../redux/statusSlice";

const NavigationDots = ({ active }) => {
  const storeItem = useSelector((state) => state.item);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(changeItem(item));
    dispatch(navigateStatus());
  };

  return (
    <div className="app__navigation">
      {["home", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            onClick={() => handleClick(item)}
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
            alt={`${item}`}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
