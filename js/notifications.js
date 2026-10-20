
const notificationList =
    document.getElementById("notifications-list");

const pagination =
    document.getElementById("pagination");

// Mỗi trang có 5 thông báo
const notificationsPerPage = 5;

// Trang đang mở
let currentPage = 1;

// Tổng số trang
const totalPages = Math.ceil(
    notifications.length / notificationsPerPage
);


// HIỂN THỊ THÔNG BÁO
function hienThiThongBao() {
    notificationList.innerHTML = "";

    // Giữ nguyên thứ tự trong notifications-data.js
    const startIndex =
        (currentPage - 1) * notificationsPerPage;

    const endIndex =
        startIndex + notificationsPerPage;

    const currentNotifications =
        notifications.slice(startIndex, endIndex);

    currentNotifications.forEach(function(notification) {
        const item = document.createElement("div");

        item.classList.add("notification");

        // Chỉ thêm kiểu chưa đọc nếu trạng thái là chua_doc
        if (notification.trangthai === "chua_doc") {
            item.classList.add("unread");
        }

        // Lưu thông tin ẩn
        item.dataset.mabaiviet = notification.mabaiviet;
        item.dataset.tacgia = notification.tacgia_baiviet;

        item.innerHTML = `
            <div class="notification-avatar">
                ${notification.avatar}
            </div>

            <div class="notification-content">
                <div class="notification-text">
                    <span class="username">
                        ${notification.ten_nguoituongtac}
                    </span>
                    ${notification.hanhdong}
                </div>

                <div class="caption">
                    ${notification.cap}
                </div>
            </div>

            <div class="notification-time">
                <span class="time-minutes">
                    ${notification.thoigian_tuongtac}
                </span>

                <span class="time-date">
                    ${notification.ngay}
                </span>
            </div>
        `;

        notificationList.appendChild(item);

        // Bấm vào thông báo để đánh dấu đã đọc
        item.addEventListener("click", function() {
            if (notification.trangthai === "chua_doc") {
                notification.trangthai = "da_doc";

                // Chỉ đổi giao diện, không sắp xếp lại
                item.classList.remove("unread");
            }

            console.log(
                "Mã bài viết:",
                item.dataset.mabaiviet
            );

            console.log(
                "Tác giả bài viết:",
                item.dataset.tacgia
            );
        });
    });
}


// HIỂN THỊ PHÂN TRANG
function hienThiPhanTrang() {
    pagination.innerHTML = "";

    // Nút trang trước
    const previousButton = document.createElement("button");

    previousButton.classList.add("page-button");
    previousButton.textContent = "‹";
    previousButton.title = "Trang trước";
    previousButton.disabled = currentPage === 1;

    previousButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            capNhatGiaoDien();
        }
    });

    pagination.appendChild(previousButton);


    // Các nút số trang
    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement("button");

        pageButton.classList.add("page-button");
        pageButton.textContent = page;

        if (page === currentPage) {
            pageButton.classList.add("active");
            pageButton.setAttribute("aria-current", "page");
        }

        pageButton.addEventListener("click", function() {
            currentPage = page;
            capNhatGiaoDien();
        });

        pagination.appendChild(pageButton);
    }


    // Nút trang sau
    const nextButton = document.createElement("button");

    nextButton.classList.add("page-button");
    nextButton.textContent = "›";
    nextButton.title = "Trang sau";
    nextButton.disabled = currentPage === totalPages;

    nextButton.addEventListener("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            capNhatGiaoDien();
        }
    });

    pagination.appendChild(nextButton);
}


// CẬP NHẬT GIAO DIỆN
function capNhatGiaoDien() {
    hienThiThongBao();
    hienThiPhanTrang();
}


// CHẠY KHI MỞ TRANG
capNhatGiaoDien();
