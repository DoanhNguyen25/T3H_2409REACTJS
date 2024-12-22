import React from "react";

const Setting = ({ count, handleSetExchange }) => {
  console.log("count tại component Setting", count);
  const handlePassData = () => {
    handleSetExchange("hello lớp 2409");
  };
  return (
    <div>
      <button onClick={handlePassData}>Pass data to Menu component</button>
    </div>
  );
};

export default Setting;
