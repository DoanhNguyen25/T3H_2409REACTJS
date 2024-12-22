import React, { useState } from "react";
import Setting from "../components/Setting";
import Menu from "../components/Menu";

const LoginPage = () => {
  const [count, setCount] = useState(2);
  const [exchange, setExchange] = useState(null);

  console.log(
    !exchange
      ? "dữ liệu ban đầu của exchange"
      : "đã nhận dữ liệu từ component con",
    exchange
  );

  const handleSetExchange = (data) => {
    setExchange(data);
  };

  return (
    <div>
      <Setting count={count} handleSetExchange={handleSetExchange} />
      <Menu count={count} exchange={exchange} />
    </div>
  );
};

export default LoginPage;
