import PropTypes from "prop-types";
import React from "react";

const CardCustom = ({ count = { id: "1", name: "Doanh" } }) => {
  console.log(count )
  return (
    <>
      <div className="item">Đây là phần tử :{card.id}</div>
      <div>{card.name}</div>
      <Setting count ={count}/>
    </>
  );
};

export default CardCustom;

CardCustom.propTypes = {
  card: PropTypes.object.isRequired,
};

