function taobaidang() {
    document.addEventListener('click', function(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        const popup = document.getElementById('giao_dien_dang_bai_viet');
        if (event.target.closest('.nut_them_bai_dang')) {
            popup && popup.classList.add('active');
        } else if (popup && event.target === popup) {
            popup.classList.remove('active');
        }
        if (event.target.closest('.nut_dang_bai')) {
            console.log('minhbeo');
        }
    });

}

taobaidang();

// hafm {

//     a = {
//         Avatar: ",
//         tenbaiviet: "",
//         Ten: "",
//         ThoiGian: "",
//         Anh: ""
//     }
// }

function GetNameByLocalStorage() {
    const name = localStorage.getItem('ten');
    return name
}

function GetLocalStorage() {
    const name = localStorage.getItem('ten');
    return name
}

// function LuuAnhVaoAssets(ten, thoigian) {
//     const nameanh = "anh" + ten + thoigian;
//     const pathanh = "../assets/" + nameanh;

//     return pathanh;
// }


// function insertPostData(tenbaiviet) {
//     const baiviet = {
//         Avatar: localStorage.getItem('avatar'),
//         ten: localStorage.getItem('ten'),
//         tenbaiviet: document.getElementById("caption_bai_viet"),
//         thoigian: new Date(),
//         Anh: LuuAnhVaoAssets(ten, thoigian)
//     }