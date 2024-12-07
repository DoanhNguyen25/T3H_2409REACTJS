let listStudent = JSON.parse(localStorage.getItem("listStudent")) ?? [];
// nullish operator

// Khởi tạo dom
const $btnCreate = document.getElementById("create");
const $btnUpdate = document.getElementById("update");
const $btnSearch = document.getElementById("search");
const $inputName = document.getElementById("name");
const $inputMathScore = document.getElementById("math_score");
const $inputEnglishScore = document.getElementById("english_score");
const $inputLiteratureScore = document.getElementById("literature_score");
const $inputKeyword = document.getElementById("keyword");

// Mỗi trang hiển thị 1 dữ liệu
const PAGE_SIZE = 2;
let pageCurrent = 1;

let indexStudentUpdate = -1;

function calAverageScore(math_score, english_score, literature_score) {
  return (
    (Number(math_score) + Number(english_score) + Number(literature_score)) / 3
  );
}

// Read: hiển thị thông tin danh sách học sinh
function renderListStudent(students) {
  const totalPage = Math.ceil(students.length / PAGE_SIZE); // Tổng số trang
  const start = (pageCurrent - 1) * PAGE_SIZE; // Chỉ số bắt đầu
  const end = start + PAGE_SIZE; // Chỉ số kết thúc
  const data = students.slice(start, end); // Lấy dữ liệu tương ứng trang

  let string = "";
  for (let i = 0; i < data.length; i++) {
    console.log("data[i]: ", data[i]);
    // template string
    string += `
    <tr>
        <th scope="row">${start + i + 1}</th>
        <td>${data[i].name}</td>
        <td>${data[i].gender === "boy" ? "Nam" : "Nữ"}</td>
        <td>${data[i].math_score}</td>
        <td>${data[i].english_score}</td>
        <td>${data[i].literature_score}</td>
        <td>${calAverageScore(
          data[i].math_score,
          data[i].english_score,
          data[i].literature_score
        )}</td>
        <td>
          <button class="btn btn-success" onclick="updateStudent(${i})">Update</button>
          <button class="btn btn-danger" onclick="deleteStudent(${i})">Delete</button>
        </td>
    </tr>
    `;
  }
  document.getElementById("info-student").innerHTML = string;

  // render pagination
  let strPagination = "";
  for (let i = 1; i <= totalPage; i++) {
    strPagination += `<li class="page-item ${
      pageCurrent === i ? "active" : ""
    }">
      <a class="page-link" href="#" onclick="getCurrentPage(${i})">${i}</a>
    </li>`;
  }
  document.getElementById("pagination").innerHTML = `
          <ul class="pagination">
            <li class="page-item"><a class="page-link ${
              pageCurrent === 1 ? "disabled" : ""
            }" href="#" onclick="getCurrentPage(-1)">Previous</a></li>
            ${strPagination}
            <li class="page-item"><a class="page-link" href="#" onclick="getCurrentPage(0)">Next</a></li>
          </ul>
  `;
}
renderListStudent(listStudent);

// Create
// Bước 1: gán sự kiện onclick cho button "Create student"
$btnCreate.onclick = function () {
  // Bước 2: Xử lý trong hàm
  // -Lấy được các thông tin người dùng nhập ở các input
  const name = $inputName.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const math_score = $inputMathScore.value;
  const english_score = $inputEnglishScore.value;
  const literature_score = $inputLiteratureScore.value;
  // -Tạo một object newStudent
  const newStudent = {
    id: Date.now(),
    name: name,
    gender: gender,
    math_score: math_score,
    english_score: english_score,
    literature_score: literature_score,
  };
  console.log("newStudent: ", newStudent);
  // -Đẩy object newStudent vào mảng listStudent
  listStudent.push(newStudent);
  //   -Cập nhật dữ liệu vào local storage
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
  // -Gọi hàm renderListStudent để hiển thị lại danh sách học sinh
  renderListStudent(listStudent);
};

// Bước 1: Gán sự kiện onclick cho các button delete
function deleteStudent(index) {
  // Bước 2: Xử lý trong hàm
  //     -Tìm index của học sinh trong danh sách
  //     -Xóa học sinh khỏi danh sách
  listStudent.splice(index, 1);
  //   -Cập nhật dữ liệu vào local storage
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
  //     -Gọi lại hàm renderListStudent để in ra danh sách mới nhất
  renderListStudent(listStudent);
}

function updateStudent(index) {
  // Bước 1: Khi click vào button update -> lấy được thông tin học sinh
  indexStudentUpdate = index;
  const student = listStudent[index];
  console.log("update...: ", student);
  // Bước 2: Khi đã có thông tin -> show thông tin lên input tương ứng
  $inputName.value = student.name;

  console.log(student.gender);
  document.querySelector(`input[value=${student.gender}]`).checked = true;
  $inputMathScore.value = student.math_score;
  $inputEnglishScore.value = student.english_score;
  $inputLiteratureScore.value = student.literature_score;
  // Bước 3: Ẩn button "Create student" và hiển thị button "Update student"
  $btnUpdate.style.display = "inline";
  $btnCreate.style.display = "none";
}
// Bước 1: Gán sự kiện onclick cho button Update student
$btnUpdate.onclick = function () {
  // Bước 2: Lấy thông tin người dùng đã chỉnh sửa
  const name = $inputName.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const math_score = $inputMathScore.value;
  const english_score = $inputEnglishScore.value;
  const literature_score = $inputLiteratureScore.value;
  console.log("name: ", name);
  // Bước 3: Cập nhật thông tin mới vào trong danh sách
  listStudent[indexStudentUpdate].name = name;
  listStudent[indexStudentUpdate].gender = gender;
  listStudent[indexStudentUpdate].math_score = math_score;
  listStudent[indexStudentUpdate].english_score = english_score;
  listStudent[indexStudentUpdate].literature_score = literature_score;

  // Bước 4: Cập nhật dữ liệu vào local storage
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
  // Bước 5: Gọi lại hàm renderListStudent để in ra danh sách mới nhất
  renderListStudent(listStudent);
  // Bước 6: Reset lại các input
  $inputName.value = "";
  $inputMathScore.value = "";
  $inputEnglishScore.value = "";
  $inputLiteratureScore.value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  indexStudentUpdate = -1;

  // Bước 7: Ẩn button "Update student" và hiển thị button "Create student"
  $btnUpdate.style.display = "none";
  $btnCreate.style.display = "inline";
};

// Bước 1: Gán event onclick cho button search
$btnSearch.onclick = function () {
  console.log("search...");
  // 	Bước 2: Lấy được keyword người dùng vừa nhập
  const keyword = $inputKeyword.value;
  // 	Bước 3: Tìm các học sinh phù hợp với keyword vừa nhập
  const result = [];
  for (let student of listStudent) {
    if (student.name.toLowerCase().includes(keyword.toLowerCase())) {
      result.push(student);
    }
  }
  // 	Bước 4: Gọi lại hàm renderListStudent để in ra những thông tin vừa tìm kiếm được
  renderListStudent(result);
};

// Bước 1: Gán event onclick cho button search
$inputKeyword.oninput = function () {
  const keyword = $inputKeyword.value;
  const result = [];
  for (let student of listStudent) {
    if (
      student.name.toLowerCase().includes(keyword.toLowerCase()) ||
      student.math_score == keyword
    ) {
      result.push(student);
    }
  }
  renderListStudent(result);
};

// Pagination
function getCurrentPage(page) {
  const totalPage = Math.ceil(listStudent.length / PAGE_SIZE);
  if (page === -1 && pageCurrent > 1) {
    pageCurrent--; // Chuyển về trang trước
  } else if (page === 0 && pageCurrent < totalPage) {
    pageCurrent++; // Chuyển sang trang sau
  } else if (page > 0) {
    pageCurrent = page; // Chuyển đến trang cụ thể
  }

  renderListStudent(listStudent);
}
