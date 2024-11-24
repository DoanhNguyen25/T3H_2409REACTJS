function test() {
  return new Promise((resolve, reject) => {
    console.log("pending..........");
    setTimeout(function () {
      resolve({
        data: {
          name: "test",
          age: 18,
        },
      });
    }, 3000);
  });
}

function test1() {
  return new Promise((resolve, reject) => {
    console.log("pending..........");
    setTimeout(function () {
      resolve({
        data: {
          name: "test1",
          age: 19,
        },
      });
    }, 3000);
  });
}

// (async function getData() {
//   try {
//     const data = await test();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error);
//   } finally {
//   }
// })();

// ;(function getData(){
//     test().then(value => {
//         console.log(value)
//     }).catch(error => {
//         console.log(error)
//     })
// })()

// Promise.all
;(async function getData() {
  try {
    const data = await Promise.all([test(), test1()]);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})()



