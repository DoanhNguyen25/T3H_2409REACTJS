// API tương tác và xử lý các trường hợp bất dồng bộ
// fetch
// const demoFetch = fetch("https://dummyjson.com/users")
//   .then(function (res) {
//     return res.json();
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const list__user = document.getElementById("list__user");

// (async function getData() {
//   const response = await fetch("https://dummyjson.com/users");
//   const data = await response.json();
//   if (data) {
//     localStorage.setItem("dataUser", JSON.stringify(data.users));
//   }

//   list__user.innerHTML = data.users.map((user, idx) => {
//     return `
//     <h1>STT: ${idx + 1}</h1>
//     <div class="card" style="width: 18rem;">
//         <img src="${user.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${user.username}</h5>
//             <p class="card-text">${user.userAgent}}</p>
//            <p>${user.address.address} - ${user.address.city} - ${
//       user.address.country
//     }</p>
//         </div>
//     </div>
//     `;
//   });
// })();

// const getDataFromLocalstorage = localStorage.getItem("dataUser");
// console.log(JSON.parse(getDataFromLocalstorage));

// function async await
const API_URL =
  "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
const forecastContainer = document.getElementById("forecast");
(async function getData() {
  console.log("roi vao day");
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Lỗi khi gọi API");
    }
    const data = await response.json();
    const limitedData = data.list.length > 0 ? data.list.slice(0, 8) : [];
    limitedData.forEach((item) => {
      const dateTime = item.dt_txt;
      const temp = item.main.temp;
      const description = item.weather[0].description;
      const icon = item.weather[0].icon;
      const forecastHTML = `
        <div class="forecast-item">
          <p><strong>${new Date(dateTime).toLocaleString()}</strong></p>
          <p>${temp}°C</p>
          <p>${description}</p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
        </div>
      `;
      forecastContainer.innerHTML += forecastHTML;
    });
  } catch {
    (error) => {
      console.error(error);
      forecastContainer.innerHTML = `<p style="color: red;">Không thể tải dữ liệu thời tiết.</p>`;
    };
  }
})();

// Fetch api promise

// fetch(API_URL)
//   .then((response) => {
//     if (!response.ok) throw new Error("Lỗi khi gọi API");
//     return response.json();
//   })
//   .then((data) => {
//     const limitedData = data.list.slice(0, 8);
//     limitedData.forEach((item) => {
//       const dateTime = item.dt_txt;
//       const temp = item.main.temp;
//       const description = item.weather[0].description;
//       const icon = item.weather[0].icon;
//       const forecastHTML = `
//         <div class="forecast-item">
//           <p><strong>${new Date(dateTime).toLocaleString()}</strong></p>
//           <p>${temp}°C</p>
//           <p>${description}</p>
//           <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
//         </div>
//       `;
//       forecastContainer.innerHTML += forecastHTML;
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//     forecastContainer.innerHTML = `<p style="color: red;">Không thể tải dữ liệu thời tiết.</p>`;
//   });
