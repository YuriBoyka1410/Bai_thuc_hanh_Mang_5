/**
 * =====================================================
 * HỆ THỐNG PHÂN TÍCH DỮ LIỆU DATASTREAM
 * Chủ đề: Refactor Legacy Code bằng Array Methods
 *
 * Các phương thức sử dụng:
 * - filter(): Lọc dữ liệu
 * - map(): Biến đổi dữ liệu
 * - reduce(): Tổng hợp dữ liệu
 * - find(): Tìm kiếm phần tử
 * =====================================================
 */

/// =====================================================
// PHẦN 1: KHAI BÁO DỮ LIỆU BAN ĐẦU
// =====================================================
//Mảng chứa thông tin khách hàng
const raw_users = [
  {
    id: 1,
    name: "Alice",
    role: "VIP",
    email: "alice@gmail.com",
    total_spent: 500,
  },
  {
    id: 2,
    name: "Bob",
    role: "MEMBER",
    email: "bob@gmail.com",
    total_spent: 120,
  },
  {
    id: 3,
    name: "Charlie",
    role: "VIP",
    email: "charlie@gmail.com",
    total_spent: 800,
  },
  {
    id: 4,
    name: "David",
    role: "GUEST",
    email: "david@gmail.com",
    total_spent: 50,
  },
];

// =====================================================
// PHẦN 2: LỌC DANH SÁCH KHÁCH HÀNG VIP
// =====================================================
// filter() dùng để lọc các phần tử thỏa mãn điều kiện.
// user.role === "VIP": Chỉ lấy khách hàng có vai trò VIP.
// user && kiểm tra phần tử không phải null hoặc undefined.
const vip_users = raw_users.filter((user) => user && user.role === "VIP");
console.log("Danh sách khách hàng VIP:");
console.log(vip_users);

// =====================================================
// PHẦN 3: LẤY DANH SÁCH EMAIL KHÁCH HÀNG VIP
// =====================================================

// Bước 1: filter() lọc khách VIP.
// Bước 2: filter() tiếp theo kiểm tra email hợp lệ.
// Bước 3: map() lấy riêng thuộc tính email.
// trim() loại bỏ khoảng trắng ở đầu và cuối chuỗi.
// map() trả về một mảng email mới.
const modern_vip_emails = raw_users
  .filter((user) => user && user.role === "VIP")
  .filter((user) => typeof user.email === "string" && user.email.trim() != "")
  .map((user) => user.email);
console.log("Danh sách email khách VIP: ");
console.log(modern_vip_emails);

// =====================================================
// PHẦN 4: TÍNH TỔNG DOANH THU KHÁCH HÀNG VIP
// =====================================================

// Bước 1: filter() lọc khách hàng VIP.
// Bước 2: reduce() tính tổng totalSpent.
//
// acc: Giá trị tích lũy.
// curr: Object khách hàng hiện tại.
// 0: Giá trị khởi tạo của acc.
//
// Number.isFinite() kiểm tra giá trị có phải số
// hữu hạn hay không.
// Chỉ cộng những giá trị không âm và hợp lệ.
const modern_total_revenue = raw_users
  .filter((user) => user && user.role === "VIP")
  .reduce((acc, curr) => {
    //Lấy số tiền khách hàng đã chi tiêu
    const amount = curr.total_spent;

    //Kiểm tra dữ liệu trước khi cộng
    if (typeof amount === "number" && Number.isFinite(amount) && amount >= 0) {
      return acc + amount;
    }
    //Nếu dữ liệu không hợp lệ thì giữ nguyên acc
    return acc;
  }, 0);
console.log("Tổng danh thu từ khách hàng VIP:");
console.log(modern_total_revenue);

// =====================================================
// PHẦN 5: TÌM KHÁCH HÀNG VIP ĐẦU TIÊN
// =====================================================

// find() trả về Object đầu tiên thỏa mãn điều kiện.
// Nếu không tìm thấy thì trả về undefined.
const first_vip = raw_users.find((user) => user && user.role === "VIP");
console.log("Khách hàng VIP đầu tiên:");
console.log(first_vip);
