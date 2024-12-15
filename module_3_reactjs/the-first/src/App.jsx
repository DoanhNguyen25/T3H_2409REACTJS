import "./App.css";

function App() {
  const arr = [
    {
      id: 1,
      img: "",
      name: "Vinh",
      price: 22222,
    },
  ];
  return (
    <>
      {arr.map((item) => (
        <>
          <div className="item">Đây là phần tử :{item.id}</div>
          <div>{item.name}</div>
        </>
      ))}
    </>
  );
}

export default App;
