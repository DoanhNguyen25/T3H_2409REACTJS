```jsx
Quizzes
1. Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
2. Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
3. Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”


Quizzes
1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.


Quizzes
1. Khai báo 1 function nhận vào chuỗi slogan. Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.
2. Hãy sử dụng phương thức map để biến đổi 1 mảng texts bao gồm các chuỗi thành 1 mảng textsLength có các phần tử là chiều dài tương ứng của từng chuỗi trong mảng texts.



Thực hành
1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
3. Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
4. Cho bộ dữ liệu về users như sau: data.js
-Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
-Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
-Đếm số lượng user có age > 50.
-Đếm số lượng user đã kết hôn và chưa kết hôn.
-Đếm số lượng user theo từng ngành nghề tương ứng.
    Output:
    {
        "Dentist": 5,
        "Developer": 13,
        "Doctor": 6,
        "Farmer": 8,
        "Project Manager": 5,
        "Teacher": 9,
        "Worker" : 4
    }

5. Xây dựng chương trình quản lý kho hàng như sau:
-Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
-Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
```jsx

const storage = {
    name: 'Fake Storage',
    address: 'HN',
    owner: 'Dung Tien',
    items: [
        {
            id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
        },
        {
            id: 2, name: 'Product 2', category: 'Device', pricce: 110
        },
        {
            id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
        },
    ]
}
jsx```
*Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
    Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
    Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
    Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
    Action 4 -> Ý nghĩa: Xóa mặt hàng
-Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
-Mô tả chi tiết
+action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
+action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại. 
+action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
+action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

```