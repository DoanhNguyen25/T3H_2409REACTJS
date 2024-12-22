import React, { useState } from "react";
import { arr } from "../const";
import Layout from "../components/common/Layout";
import CardCustom from "../components/CardCustom";
import { object } from "prop-types";
import App from "../App";

const HomePage = () => {
  // const [count, setCount] = useState(0); //khởi tạo giá trị ban đầu cho biến state Initial state
  // const [test, setTest] = useState("string");
  const [sum, setSum] = useState(0);

  function useState(){

    return [state, setState]
  }

  // console.log("giá trị của state", state);

  return (
    // cách 1: dùng thể đóng mở
    <>
      {/* <Layout>
        {arr.map((item) => (
          <CardCustom key={item.id}  count={count}/>
        ))}
      </Layout>
      <button
        onClick={() => {
          console.log(sum++);
        }}
      >
        Click me
      </button>
      Giá trị của state:{sum} */}
      <Counter />
    </>

    // cấch 2: truyền vào dưới dạng props như thông thường
    //     <Layout  children=
    //     {arr.map((item) => (
    //       <CardCustom key={item.id} card={item} />
    //     ))}/>
    //
  );
};

// count nằm ở cùng nhớ a còn khi mà mình khởi tạo 1 cái biến mới thì sẽ được lưu ở 1 vùng nhớ mới => khi useState check thì có sự khác biệt về giá trị vùng nhớ nên cập nhật lại ui
const Counter = () => {
  const [count, setCount] = useState([1, 2, 3, 4, 5]);

  const handleIncrease = () => {
    setCount([...count, 6, 8]);
  };
  //spread operator

  // đây là kiểu dũe liệu reference trong th này nó là object

  // về bản chất cái tk useState nó sẽ dùng 1 cái phép so sánh nông nông ở đây là kiểu liệu và giá trị bằng nhau k có sự thay đổi thì nó sẽ k cập nhật lại giao diện

  // đối với OBJECT:
  // ae cần tránh thay đổi trực tiếp vào cái object gốc mà phải tạo ra 1 cái object nó là bản sao của object gốc rồi thay đổi trên cái object đã sao chép ra
  // ví dụ
  // const shadowCount ={...count,id:count.id+1}
  // sau đó mới set giá trị state bằng bản sao của object gốc

  // đối với ARRAY:
  //  khi dùng spread operator thì mình không cần phải khởi tạo ra bản sao, có thể thực hiện cập nhật trực tiếp luôn

  return (
    <>
      <div>
        {count.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
      <button onClick={handleIncrease}>Increment</button>
    </>
  );
};

export default HomePage;

