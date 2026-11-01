document.addEventListener('click', function(event) {
    if (!(event.target instanceof Element)) {
        return;
    }

    const popup = document.getElementById('giao_dien_dang_bai_viet');

    if (event.target.closest('.nut_them_bai_dang')) {
        popup?.classList.add('active');
    } else if (popup && event.target === popup) {
        popup.classList.remove('active');
    }
});