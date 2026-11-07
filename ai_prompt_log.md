# AI PROMPT LOG

## Project: DataStream Data Cleaning

## Language: JavaScript

---

## 1. TÌM HIỂU LÝ THUYẾT

### Prompt 01: Tìm hiểu filter(), map(), reduce()

Hãy giải thích ngắn gọn chức năng của ba phương
thức mảng trong JavaScript: map(), filter() và
reduce(). Cho ví dụ đơn giản về đầu vào và đầu ra
của từng phương thức.

### Prompt 02: Tìm hiểu find()

Phương thức find() trong JavaScript có chức năng
gì? Nó khác filter() ở điểm nào? Cho ví dụ minh họa.

### Prompt 03: Imperative và Declarative

Hãy giải thích sự khác biệt giữa lập trình mệnh lệnh
(Imperative Programming) sử dụng vòng lặp for và
lập trình khai báo (Declarative Programming) sử
dụng các phương thức mảng trong JavaScript.

### Prompt 04: Tìm hiểu reduce()

Trong hàm reduce((acc, curr) => ..., 0), hai tham số
acc và curr có ý nghĩa gì? Số 0 ở cuối có tác dụng
gì? Điều gì xảy ra nếu bỏ số 0 khi mảng đầu vào
là một mảng rỗng?

---

## 2. THIẾT KẾ VÀ TỐI ƯU CODE

### Prompt 05: Tìm hiểu Chaining Methods

Trong JavaScript, khi sử dụng chaining như
array.filter().map(), chương trình phải duyệt qua
mảng bao nhiêu lần? Cách này có ưu điểm và
nhược điểm gì về hiệu năng?

### Prompt 06: So sánh map() và forEach()

Hãy giải thích sự khác biệt cơ bản giữa map()
và forEach(). Tại sao trong bài toán lấy danh sách
email khách hàng VIP nên sử dụng map() thay vì
forEach()?

### Prompt 07: Tìm hiểu Immutability

Tính bất biến (Immutability) trong JavaScript là gì?
Các phương thức filter(), map() và reduce() có
làm thay đổi mảng ban đầu không? Hãy cho ví dụ.

### Prompt 08: Độ phức tạp thuật toán

Độ phức tạp thuật toán O(n) là gì?
Khi xử lý mảng có 1 triệu phần tử bằng filter(),
map() và reduce(), chương trình sẽ hoạt động
như thế nào?

---

## 3. TẠO DỮ LIỆU KIỂM THỬ

### Prompt 09: Sinh dữ liệu người dùng giả lập

Hãy tạo cho tôi 20 Object người dùng giả lập
dưới dạng JavaScript Array chứa các thuộc tính:

- id
- name
- role
- email
- totalSpent

Trong đó cố tình thêm các trường hợp dữ liệu
không hợp lệ:

- role viết thường như "vip".
- totalSpent là chuỗi thay vì số.
- totalSpent có giá trị âm.
- Thiếu thuộc tính email.
- Thiếu thuộc tính totalSpent.
- Email là chuỗi rỗng.
- Một số phần tử null hoặc không phải Object.

Mục đích là sử dụng dữ liệu này để kiểm thử
chương trình DataStream.

### Prompt 10: Kiểm thử mảng rỗng

Nếu dữ liệu đầu vào là mảng rỗng [],
các phương thức filter(), map(), reduce() và
find() sẽ trả về kết quả như thế nào?
Trường hợp nào có thể phát sinh lỗi?

### Prompt 11: Kiểm tra dữ liệu không hợp lệ

Làm thế nào để sử dụng typeof và Number.isFinite()
để kiểm tra thuộc tính totalSpent trước khi cộng
dồn doanh thu bằng reduce()?

---

## 4. KIỂM TRA VÀ ĐÁNH GIÁ

### Prompt 12: Phân tích lỗi TypeError

Trong JavaScript, tại sao việc truy cập thuộc tính
của null hoặc undefined có thể gây ra TypeError?
Làm thế nào để kiểm tra dữ liệu trước khi truy cập
thuộc tính của Object?

### Prompt 13: Đánh giá code

Hãy đóng vai Tech Lead và đưa ra các câu hỏi
vấn đáp về chương trình DataStream sử dụng
filter(), map(), reduce() và find().

Tập trung vào:

- Cách hoạt động của từng phương thức.
- Sự khác biệt giữa map() và forEach().
- Accumulator trong reduce().
- Chaining Methods.
- Immutability.
- Độ phức tạp thuật toán O(n).

### Prompt 14: Kiểm tra tính đúng đắn

Hãy giúp tôi xây dựng danh sách test case
để kiểm tra chương trình DataStream với dữ liệu
chuẩn và dữ liệu nhiễu.

Tôi muốn kiểm tra các trường hợp:

- Mảng rỗng.
- Không có khách VIP.
- Thiếu email.
- totalSpent không phải số.
- totalSpent âm.
- Dữ liệu null.
- Dữ liệu không hợp lệ.

---

## 5. KẾT LUẬN

AI được sử dụng với vai trò Mentor và Tester
trong quá trình thực hiện bài tập.

Các nội dung sử dụng AI:

- Tìm hiểu lý thuyết các phương thức mảng.
- Giải thích cơ chế hoạt động của JavaScript.
- Tìm hiểu cách tối ưu xử lý dữ liệu.
- Sinh dữ liệu giả lập để kiểm thử.
- Xây dựng các tình huống kiểm thử.
- Chuẩn bị câu hỏi vấn đáp.

Học viên tự tìm hiểu, triển khai và kiểm tra
logic xử lý dữ liệu trong chương trình.
