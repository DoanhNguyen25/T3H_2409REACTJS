import React from "react";

const Menu = ({ count, exchange }) => {
  if (!exchange)
    return (
      <>
        <div>count:{count}</div>
        <div>chưa có dữ liệu từ component Setting</div>
      </>
    );
  return (
    <div>
      <div>count:{count}</div>
      <div>Đã nhận được dữ liệu từ component Setting:{exchange}</div>
    </div>
  );
};

export default Menu;
&&
|| 
!
??:nullish operator
