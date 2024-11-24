// let getNode = document.getElementsByTagName("div");

// Array.from(getNode).map((node, idx) => {
//   if ((idx + 1) % 2 === 0) {
//     node.innerHTML = "đây là số chẵn";
//   } else {
//     node.innerHTML = "đây là số lẻ";
//   }
// });
// getNode.length()

// const getNodeById1 = document.getElementById("123");
// const getNodeById2 = document.getElementById("1234");

// document.createElement(): Tạo mới một element.
// document.removeChild(): Xoá một element là node con của một element khác.
// document.appendChild(): Thêm một element con vào sau cùng của một element khác.
// document.replaceChild(): Thay thế node con bằng một node con khác.

// const favoriteItems = document.querySelectorAll(".favorite-list-item");
// favoriteItems.forEach((item) => {
//   item.textContent = "I love this thing";
// });

function addFavoriteItem() {
  const inputText = document.getElementById("input-text").value;

  if (inputText.trim() !== "") {
    const newItem = document.createElement("li");
    newItem.className = "favorite-list-item";
    newItem.textContent = inputText;
    document.getElementById("favorite-list").appendChild(newItem);
    document.getElementById("input-text").value = "";
  }
}

const btn = document.getElementById("btn-test");

//
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
const addressInput = document.getElementById("address");

function sayHello() {
  console.log(maleInput.checked, femaleInput.checked);
  if (
    !nameInput.value||
    !numberInput.value ||
    (!maleInput.checked && !femaleInput.checked) ||
    !addressInput.value
  ) {
    alert("bạn cần nhập đủ thông tin ");
    return;
  }
  document.getElementById("name_value").textContent = nameInput.value;
  document.getElementById("number_value").textContent = numberInput.value;
  document.getElementById("gender_value").textContent = maleInput.checked
    ? "Nam"
    : "Nữ";
  document.getElementById("address_value").textContent = addressInput.value;
}

btn.addEventListener("click", sayHello);
 