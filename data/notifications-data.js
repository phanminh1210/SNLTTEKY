
const notifications = [
    {
        ten_nguoituongtac: "Nguyễn Minh",
        mabaiviet: "POST_001",
        tacgia_baiviet: "Trần Văn A",
        cap: "Hôm nay trời đẹp quá!",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "5 phút trước",
        ngay: "18/10/2026",
        trangthai: "chua_doc",
        avatar: "M"
    },
    {
        ten_nguoituongtac: "Trần Anh",
        mabaiviet: "POST_002",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Một ngày thật tuyệt vời.",
        hanhdong: "đã bình luận về bài viết của bạn",
        thoigian_tuongtac: "18 phút trước",
        ngay: "18/10/2026",
        trangthai: "chua_doc",
        avatar: "A"
    },
    {
        ten_nguoituongtac: "Lê Hoàng",
        mabaiviet: "POST_003",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Buổi chiều đi chơi cùng bạn bè.",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "30 phút trước",
        ngay: "18/10/2026",
        trangthai: "chua_doc",
        avatar: "H"
    },
    {
        ten_nguoituongtac: "Phạm Nam",
        mabaiviet: "POST_004",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Bức ảnh mới của mình.",
        hanhdong: "đã bình luận về bài viết của bạn",
        thoigian_tuongtac: "45 phút trước",
        ngay: "18/10/2026",
        trangthai: "chua_doc",
        avatar: "N"
    },
    {
        ten_nguoituongtac: "Đỗ Linh",
        mabaiviet: "POST_005",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Cuối tuần thư giãn.",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "1 giờ trước",
        ngay: "18/10/2026",
        trangthai: "chua_doc",
        avatar: "L"
    },
    {
        ten_nguoituongtac: "Hoàng Phúc",
        mabaiviet: "POST_006",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Một ngày đáng nhớ.",
        hanhdong: "đã bình luận về bài viết của bạn",
        thoigian_tuongtac: "2 giờ trước",
        ngay: "18/10/2026",
        trangthai: "da_doc",
        avatar: "P"
    },
    {
        ten_nguoituongtac: "Vũ Hà",
        mabaiviet: "POST_007",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Chuyến đi thật thú vị!",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "3 giờ trước",
        ngay: "18/10/2026",
        trangthai: "da_doc",
        avatar: "H"
    },
    {
        ten_nguoituongtac: "Bùi Đức",
        mabaiviet: "POST_008",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Hôm nay chơi bóng rổ.",
        hanhdong: "đã bình luận về bài viết của bạn",
        thoigian_tuongtac: "4 giờ trước",
        ngay: "18/10/2026",
        trangthai: "da_doc",
        avatar: "Đ"
    },
    {
        ten_nguoituongtac: "Mai Chi",
        mabaiviet: "POST_009",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Một tấm hình kỷ niệm.",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "5 giờ trước",
        ngay: "18/10/2026",
        trangthai: "da_doc",
        avatar: "C"
    },
    {
        ten_nguoituongtac: "Đặng Long",
        mabaiviet: "POST_010",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Cùng cố gắng mỗi ngày.",
        hanhdong: "đã bình luận về bài viết của bạn",
        thoigian_tuongtac: "6 giờ trước",
        ngay: "18/10/2026",
        trangthai: "da_doc",
        avatar: "L"
    },
    {
        ten_nguoituongtac: "Ngô Trang",
        mabaiviet: "POST_011",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Ngày mới nhiều năng lượng.",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "1 ngày trước",
        ngay: "17/10/2026",
        trangthai: "da_doc",
        avatar: "T"
    },
    {
        ten_nguoituongtac: "Phan Huy",
        mabaiviet: "POST_012",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Thử một điều mới mẻ.",
        hanhdong: "đã bình luận về bài viết của bạn",
        thoigian_tuongtac: "1 ngày trước",
        ngay: "17/10/2026",
        trangthai: "da_doc",
        avatar: "H"
    },
    {
        ten_nguoituongtac: "Đinh Mai",
        mabaiviet: "POST_013",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Khoảnh khắc tuyệt vời.",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "2 ngày trước",
        ngay: "16/10/2026",
        trangthai: "da_doc",
        avatar: "M"
    },
    {
        ten_nguoituongtac: "Lý Sơn",
        mabaiviet: "POST_014",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Cảm ơn mọi người nhé!",
        hanhdong: "đã bình luận về bài viết của bạn",
        thoigian_tuongtac: "2 ngày trước",
        ngay: "16/10/2026",
        trangthai: "da_doc",
        avatar: "S"
    },
    {
        ten_nguoituongtac: "Dương Vy",
        mabaiviet: "POST_015",
        tacgia_baiviet: "Nguyễn Quý Dương",
        cap: "Hẹn gặp lại mọi người.",
        hanhdong: "đã thích bài viết của bạn",
        thoigian_tuongtac: "3 ngày trước",
        ngay: "15/10/2026",
        trangthai: "da_doc",
        avatar: "V"
    }
];
